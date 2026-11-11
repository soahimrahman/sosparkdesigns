import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Offer } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const offers = await Offer.find({ active: true });
    return NextResponse.json(offers);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch offers' }, { status: 500 });
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
    const offer = await Offer.create(data);
    return NextResponse.json(offer, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create offer' }, { status: 500 });
  }
}
