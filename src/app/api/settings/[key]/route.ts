import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Setting } from '@/lib/models';

export async function GET(
  _req: NextRequest,
  { params }: { params: { key: string } }
) {
  try {
    await connectMongo();
    const setting = await Setting.findOne({ key: params.key });
    if (!setting) {
      return NextResponse.json({ error: 'Setting not found' }, { status: 404 });
    }
    return NextResponse.json(setting);
  } catch (err: any) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
