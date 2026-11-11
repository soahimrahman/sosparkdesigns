import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { PageView, Contact, Portfolio, Testimonial, Service } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const path = body.path || '/';
    const referrer = body.referrer || req.headers.get('referer') || '';
    const userAgent = req.headers.get('user-agent') || '';

    let device = 'desktop';
    if (/mobile/i.test(userAgent)) device = 'mobile';
    else if (/tablet|ipad/i.test(userAgent)) device = 'tablet';

    await connectMongo();
    await PageView.create({
      path,
      referrer,
      device,
      country: req.headers.get('x-vercel-ip-country') || 'Unknown',
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false }, { status: 200 }); // Non-blocking
  }
}

export async function GET(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'viewer');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 403 });
  }

  try {
    await connectMongo();

    const [
      totalPageViews,
      totalMessages,
      totalProjects,
      totalReviews,
      totalServices,
      recentViews,
    ] = await Promise.all([
      PageView.countDocuments(),
      Contact.countDocuments(),
      Portfolio.countDocuments(),
      Testimonial.countDocuments(),
      Service.countDocuments(),
      PageView.find().sort({ createdAt: -1 }).limit(10),
    ]);

    return NextResponse.json({
      totalPageViews,
      totalMessages,
      totalProjects,
      totalReviews,
      totalServices,
      recentViews,
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
