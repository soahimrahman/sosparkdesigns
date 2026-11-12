import { NextRequest, NextResponse } from 'next/server';
import { connectMongo } from '@/lib/mongodb';
import { Contact } from '@/lib/models';
import { verifyAdminRequest } from '@/lib/auth';
import { validateContactForm } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: 'Malformed JSON payload' },
        { status: 400 }
      );
    }

    const validation = validateContactForm(body);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validation.error.issues) {
        const fieldName = issue.path[0] ? String(issue.path[0]) : 'general';
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      }
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed. Please correct the highlighted fields.',
          fields: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, company, service, budget, message, hp_website } = validation.data;

    // Spam honeypot trap: if a bot fills this hidden field, return silent success without persisting
    if (hp_website && hp_website.trim().length > 0) {
      console.warn('Bot submission blocked via honeypot field');
      return NextResponse.json(
        { success: true, message: 'Inquiry received' },
        { status: 200 }
      );
    }

    // Staging isolation guard: if running in staging mode or STAGING_ISOLATION is active without a dedicated staging db,
    // safely mock persistence to prevent polluting production customer records
    const isStagingIsolated =
      process.env.STAGING_ISOLATION === 'true' ||
      (process.env.NEXT_PUBLIC_APP_ENV === 'staging' && !process.env.MONGODB_URI?.includes('staging'));

    if (isStagingIsolated) {
      console.log('Staging isolated submission received (dry-run mode)');
      return NextResponse.json(
        {
          success: true,
          message: 'Thank you! Your project inquiry has been received (Staging Environment).',
          id: `staging_${Date.now().toString(36)}`,
        },
        { status: 201 }
      );
    }

    try {
      await connectMongo();
      const contact = await Contact.create({
        name: name.slice(0, 200).trim(),
        email: email.slice(0, 320).trim(),
        company: (company || '').slice(0, 200).trim(),
        service: (service || '').slice(0, 200).trim(),
        budget: (budget || '').slice(0, 100).trim(),
        message: message.slice(0, 5000).trim(),
      });

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you! Your project inquiry has been received. We will respond within 24–48 hours.',
          id: String(contact._id),
        },
        { status: 201 }
      );
    } catch (dbErr: any) {
      console.error('Database connection or write error in /api/contact:', dbErr);
      return NextResponse.json(
        {
          success: false,
          error: 'Unable to save your inquiry at this moment due to a service error. Please email us directly at hello@sosparkdesign.com.',
        },
        { status: 503 }
      );
    }
  } catch (err: any) {
    console.error('Unexpected error in /api/contact:', err);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const auth = await verifyAdminRequest(req, 'support');
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status || 401 });
  }

  try {
    await connectMongo();
    const messages = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json(messages);
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to retrieve messages from database' },
      { status: 500 }
    );
  }
}
