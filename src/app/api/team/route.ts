import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Team } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const members = await Team.find().sort({ order: 1 });
    return NextResponse.json(members);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch team' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'editor');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    const data = await req.json();
    await connectMongo();
    const member = await Team.create(data);
    return NextResponse.json(member, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
  }
}
