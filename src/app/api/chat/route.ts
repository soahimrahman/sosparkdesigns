import { NextRequest, NextResponse } from 'next/server';
import { generateChatReply } from '@/lib/chatService';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'messages array required' }, { status: 400 });
    }

    const reply = await generateChatReply(messages);
    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error('Chat endpoint error:', err);
    return NextResponse.json(
      { reply: 'Thank you for reaching out to SoSpark Design. Please contact us via our Contact form!' },
      { status: 200 }
    );
  }
}
