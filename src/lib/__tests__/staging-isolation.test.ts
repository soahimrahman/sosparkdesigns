import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

describe('Contact API Staging Isolation Guard', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  it('activates dry-run staging mode when STAGING_ISOLATION is true', async () => {
    process.env.STAGING_ISOLATION = 'true';
    process.env.MONGODB_URI = 'mongodb+srv://prod_cluster/sospark_production';

    const req = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Staging Tester',
        email: 'staging@sosparkdesigns.com',
        service: 'Brand Identity & Systems',
        budget: '$3,000 - $6,000',
        message: 'This is a test inquiry in an isolated staging environment.',
      }),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(201);
    expect(data.success).toBe(true);
    expect(data.message).toContain('Staging Environment');
    expect(data.id).toMatch(/^staging_/);
  });

  it('blocks honeypot submissions even in staging mode', async () => {
    process.env.STAGING_ISOLATION = 'true';

    const req = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Bot Spammer',
        email: 'bot@spam.com',
        service: 'Brand Identity & Systems',
        message: 'This is a bot message testing the honeypot in staging.',
        hp_website: 'https://spambot.com',
      }),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toBe('Inquiry received');
  });
});
