import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Testimonial } from '@/lib/models';

export async function POST(req: NextRequest) {
  try {
    const { name, role, company, text, rating } = await req.json();

    if (!name || !role || !text) {
      return NextResponse.json({ error: 'Name, role, and text are required' }, { status: 400 });
    }

    await connectMongo();
    const initials = name
      .split(' ')
      .map((w: string) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const review = await Testimonial.create({
      name: String(name).slice(0, 100).trim(),
      role: String(role).slice(0, 100).trim(),
      company: company ? String(company).slice(0, 100).trim() : '',
      text: String(text).slice(0, 1000).trim(),
      rating: Math.min(5, Math.max(1, Number(rating) || 5)),
      initials,
      approved: false, // Moderation required
    });

    return NextResponse.json({ success: true, id: review._id }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
