import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectMongo } from '@/lib/mongodb';
import { Admin } from '@/lib/models';
import { signAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password required' },
        { status: 400 }
      );
    }

    await connectMongo();
    const admin = await Admin.findOne({ username: username.toLowerCase().trim() });
    if (!admin) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    if (admin.active === false) {
      return NextResponse.json(
        { error: 'This account has been deactivated. Contact a super admin.' },
        { status: 403 }
      );
    }

    const valid = await bcrypt.compare(password, admin.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const token = signAdminToken(admin);

    return NextResponse.json({
      token,
      username: admin.username,
      role: admin.role,
    });
  } catch (err: any) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Server error during login' }, { status: 500 });
  }
}
