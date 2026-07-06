import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, inquiryItem } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // In production this would persist to Supabase or dispatch an email.
    // For now we acknowledge receipt so the client controller can show success.
    const payload = {
      ok: true,
      received: {
        name,
        email,
        subject: subject || '',
        message,
        inquiryItem: inquiryItem || 'general',
        timestamp: new Date().toISOString(),
      },
    };

    return NextResponse.json(payload, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
