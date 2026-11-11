import { NextResponse } from 'next/server';
import { connectMongo, getDbState } from '@/lib/mongodb';

export async function GET() {
  try {
    await connectMongo();
  } catch (err) {
    // connectMongo error is captured
  }

  const { status, state } = getDbState();

  return NextResponse.json({
    status: 'ok',
    db: status,
    dbState: state,
    timestamp: new Date().toISOString(),
    framework: 'Next.js 14 App Router',
  });
}
