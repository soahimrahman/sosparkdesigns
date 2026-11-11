import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { ApiKey } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';
import { encrypt } from '@/lib/keyCrypto';

export async function GET(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'super_admin');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  await connectMongo();
  const keys = await ApiKey.find().sort({ createdAt: -1 });
  return NextResponse.json(keys);
}

export async function POST(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'super_admin');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    const { provider, keys } = await req.json();
    if (!provider || !keys) {
      return NextResponse.json({ error: 'Provider and keys string required' }, { status: 400 });
    }

    const keyList = String(keys)
      .split(/[\n,]+/)
      .map(k => k.trim())
      .filter(Boolean);

    await connectMongo();

    const created: any[] = [];
    for (const rawKey of keyList) {
      const encryptedKey = encrypt(rawKey);
      const last4 = rawKey.slice(-4);
      const doc = await ApiKey.create({
        provider: provider.toLowerCase().trim(),
        encryptedKey,
        last4,
        active: true,
      });
      created.push(doc);
    }

    return NextResponse.json({ success: true, count: created.length }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to import API keys' }, { status: 500 });
  }
}
