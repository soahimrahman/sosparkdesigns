import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Testimonial } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    await connectMongo();
    const { searchParams } = new URL(req.url);
    const all = searchParams.get('all') === 'true';

    const filter: any = {};
    if (!all) {
      filter.approved = true;
    }

    const reviews = await Testimonial.find(filter).sort({ createdAt: -1 });
    return NextResponse.json(reviews);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
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
    const review = await Testimonial.create(data);
    return NextResponse.json(review, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}
