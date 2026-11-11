import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectMongo } from '@/lib/mongodb';
import { Admin } from '@/lib/models';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    if (!username || !password || password.length < 8) {
      return NextResponse.json(
        { error: 'Username + password (8+ chars) required' },
        { status: 400 }
      );
    }

    await connectMongo();
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      return NextResponse.json(
        {
          error:
            'Setup is only available on first run, before any admin exists. Use an existing super_admin account to add more admins.',
        },
        { status: 403 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 12);
    await Admin.create({
      username: username.toLowerCase().trim(),
      passwordHash,
      role: 'super_admin',
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Server error during setup' }, { status: 500 });
  }
}
