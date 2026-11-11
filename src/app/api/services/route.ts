import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Service } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const services = await Service.find().sort({ order: 1 });
    return NextResponse.json(services);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
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
    const service = await Service.create(data);
    return NextResponse.json(service, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}
