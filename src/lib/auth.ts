import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from './mongodb';
import { Admin } from './models';

const JWT_SECRET = process.env.JWT_SECRET || 'sosparkdesign_fallback_secret_change_in_prod';

export const ROLE_RANK: Record<string, number> = {
  viewer: 0,
  support: 1,
  editor: 2,
  admin: 3,
  super_admin: 3,
};

export interface AdminPayload {
  id: string;
  username: string;
  role: string;
}

export function signAdminToken(admin: { _id: any; username: string; role: string }): string {
  return jwt.sign(
    { id: admin._id.toString(), username: admin.username, role: admin.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export async function verifyAdminRequest(
  req: NextRequest,
  minRole?: string
): Promise<{ error?: string; status?: number; admin?: AdminPayload }> {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized — token required', status: 401 };
  }

  const token = authHeader.split(' ')[1];
  let decoded: any;
  try {
    decoded = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return { error: 'Invalid or expired token', status: 401 };
  }

  try {
    await connectMongo();
    const admin = await Admin.findById(decoded.id);
    if (!admin || admin.active === false) {
      return { error: 'Account not found or deactivated', status: 401 };
    }

    const currentRole = admin.role;
    if (minRole) {
      const requiredRank = ROLE_RANK[minRole] ?? 99;
      const currentRank = ROLE_RANK[currentRole] ?? -1;
      if (currentRank < requiredRank) {
        return { error: 'Insufficient permissions for this action', status: 403 };
      }
    }

    return {
      admin: {
        id: admin._id.toString(),
        username: admin.username,
        role: currentRole,
      },
    };
  } catch (err: any) {
    return { error: 'Could not verify account — database unavailable', status: 503 };
  }
}
