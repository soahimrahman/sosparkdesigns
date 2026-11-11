import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Portfolio } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    await connectMongo();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');

    const filter: any = {};
    if (category && category !== 'All') {
      filter.category = category;
    }

    const projects = await Portfolio.find(filter).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(projects);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch portfolio' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'editor');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    const data = await req.json();
    if (!data.title || !data.slug || !data.category || !data.description) {
      return NextResponse.json({ error: 'Title, slug, category, and description required' }, { status: 400 });
    }

    await connectMongo();
    const project = await Portfolio.create(data);
    return NextResponse.json(project, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
  }
}
