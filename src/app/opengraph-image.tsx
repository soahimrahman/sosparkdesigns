import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SoSpark Design — Creative Agency & Digital Lab';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #eff6ff 100%)',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: '#0069ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '28px',
              fontWeight: 900,
            }}
          >
            ✦
          </div>
          <span style={{ fontSize: '32px', fontWeight: 800, color: '#09090b', letterSpacing: '-0.02em' }}>
            SoSpark<span style={{ color: '#0069ea' }}>.</span>
          </span>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: '999px',
              background: '#dbeafe',
              color: '#0052c2',
              marginLeft: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Creative Technology Studio &bull; Venture Lab
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '980px' }}>
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 900,
              color: '#09090b',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            We imagine. We design. <br />
            <span style={{ color: '#0069ea' }}>We build what matters.</span>
          </h1>
          <p style={{ fontSize: '24px', color: '#475569', lineHeight: 1.4, margin: 0 }}>
            Brand architecture, high-performance Next.js engineering, and digital venture platforms.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '2px solid #e2e8f0',
            paddingTop: '28px',
            fontSize: '18px',
            color: '#64748b',
            fontWeight: 600,
          }}
        >
          <span>sosparkdesigns.com</span>
          <span style={{ color: '#0069ea' }}>SparkForge &bull; Subz Empire &bull; Studio Lab</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
