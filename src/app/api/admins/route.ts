import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { verifyAdminRequest } from '@/lib/auth';
import { connectMongo } from '@/lib/mongodb';
import { Admin } from '@/lib/models';

export async function GET(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'super_admin');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  await connectMongo();
  const admins = await Admin.find().sort({ createdAt: -1 });
  return NextResponse.json(admins);
}

export async function POST(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'super_admin');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    const { username, password, role } = await req.json();
    if (!username || !password || password.length < 8) {
      return NextResponse.json({ error: 'Username and 8+ char password required' }, { status: 400 });
    }

    await connectMongo();
    const existing = await Admin.findOne({ username: username.toLowerCase().trim() });
    if (existing) {
      return NextResponse.json({ error: 'Admin with this username already exists' }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const newAdmin = await Admin.create({
      username: username.toLowerCase().trim(),
      passwordHash,
      role: role || 'editor',
      invitedBy: auth.admin?.username,
    });

    return NextResponse.json({ success: true, admin: newAdmin }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 });
  }
}
