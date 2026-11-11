import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { BlogPost } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const posts = await BlogPost.find({ published: true }).sort({ createdAt: -1 });
    return NextResponse.json(posts);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
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
    const post = await BlogPost.create(data);
    return NextResponse.json(post, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
  }
}
