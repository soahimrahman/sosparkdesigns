import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminRequest } from '@/lib/auth';
import { connectMongo } from '@/lib/mongodb';
import { Admin } from '@/lib/models';

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const auth = await verifyAdminRequest(req, 'super_admin');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    const { role, active } = await req.json();
    await connectMongo();

    const updated = await Admin.findByIdAndUpdate(
      params.id,
      { ...(role && { role }), ...(active !== undefined && { active }) },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: 'Admin not found' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to update admin' }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const auth = await verifyAdminRequest(req, 'super_admin');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    await connectMongo();
    await Admin.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to delete admin' }, { status: 500 });
  }
}
