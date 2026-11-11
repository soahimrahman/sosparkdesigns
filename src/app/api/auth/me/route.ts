import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  const auth = await verifyAdminRequest(req);
  if (auth.error || !auth.admin) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 401 });
  }

  return NextResponse.json({
    username: auth.admin.username,
    role: auth.admin.role,
  });
}
