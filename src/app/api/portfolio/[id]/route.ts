import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Portfolio } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const auth = await verifyAdminRequest(req, 'editor');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    const data = await req.json();
    await connectMongo();
    const updated = await Portfolio.findByIdAndUpdate(params.id, data, { new: true });
    if (!updated) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const auth = await verifyAdminRequest(req, 'editor');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    await connectMongo();
    await Portfolio.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
