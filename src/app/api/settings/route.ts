import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Setting } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const settings = await Setting.find();
    return NextResponse.json(settings);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'super_admin');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    const { key, value, type, group, label } = await req.json();
    if (!key) {
      return NextResponse.json({ error: 'Key required' }, { status: 400 });
    }

    await connectMongo();
    const updated = await Setting.findOneAndUpdate(
      { key },
      { key, value, type, group, label, updatedBy: auth.admin?.username },
      { upsert: true, new: true }
    );

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to save setting' }, { status: 500 });
  }
}
