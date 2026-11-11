import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Contact } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, service, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    await connectMongo();
    const contact = await Contact.create({
      name: String(name).slice(0, 200).trim(),
      email: String(email).slice(0, 320).trim(),
      company: company ? String(company).slice(0, 200).trim() : '',
      service: service ? String(service).slice(0, 200).trim() : '',
      budget: budget ? String(budget).slice(0, 100).trim() : '',
      message: String(message).slice(0, 5000).trim(),
    });

    return NextResponse.json({ success: true, id: contact._id }, { status: 201 });
  } catch (err: any) {
    console.error('Contact submission error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'support');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 401 });
  }

  await connectMongo();
  const messages = await Contact.find().sort({ createdAt: -1 });
  return NextResponse.json(messages);
}
