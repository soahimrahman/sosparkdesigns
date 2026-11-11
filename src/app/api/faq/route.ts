import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { FAQ } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const faqs = await FAQ.find({ active: true }).sort({ order: 1 });
    return NextResponse.json(faqs);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
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
    const faq = await FAQ.create(data);
    return NextResponse.json(faq, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 });
  }
}
