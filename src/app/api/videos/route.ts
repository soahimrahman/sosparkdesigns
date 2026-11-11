import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Video } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function GET() {
  try {
    await connectMongo();
    const videos = await Video.find({ active: true }).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(videos);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'editor');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    const data = await req.json();
    if (data.youtubeUrl && !data.youtubeId) {
      const match = data.youtubeUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
      if (match) {
        data.youtubeId = match[1];
        if (!data.thumbnail) {
          data.thumbnail = `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
        }
      }
    }

    await connectMongo();
    const video = await Video.create({
      ...data,
      uploadedBy: auth.admin?.username,
    });
    return NextResponse.json(video, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create video' }, { status: 500 });
  }
}
