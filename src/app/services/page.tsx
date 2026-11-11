import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Layers, Code, Palette, Video, Share2, Sparkles } from 'lucide-react';
import { DEFAULT_SERVICES } from '@/lib/seedData';

export const metadata = {
  title: 'Services — SoSpark Design',
  description: 'Explore our 6 core creative disciplines: Brand Identity, Web Design, Next.js Development, Graphic Design, Video & Social.',
};

export default function ServicesPage() {
  const serviceIcons: Record<string, React.ReactNode> = {
    'brand-identity': <Palette size={28} className="text-blue-400" />,
    'web-design': <Layers size={28} className="text-blue-400" />,
    'web-development': <Code size={28} className="text-blue-400" />,
    'graphic-design': <Sparkles size={28} className="text-blue-400" />,
    'video-editing': <Video size={28} className="text-blue-400" />,
    'page-management': <Share2 size={28} className="text-blue-400" />,
  };

  const processSteps = [
    {
      num: '01',
      title: 'Discovery & Audit',
      desc: 'We unpick your brand strategy, current pain points, target customer personas, and competitive landscape.',
    },
    {
      num: '02',
      title: 'Visual Blueprint',
      desc: 'We construct mood boards, typography palettes, and interactive wireframes to align early on visual direction.',
    },
    {
      num: '03',
      title: 'Design Sprint',
      desc: 'High-fidelity Figma systems, bespoke icons, micro-animations, and complete device responsive views.',
    },
    {
      num: '04',
      title: 'Next.js Engineering',
      desc: 'Writing clean TypeScript, sub-second API routes, database models, and SEO-optimized web architecture.',
    },
    {
      num: '05',
      title: 'Launch & Scale',
      desc: 'Comprehensive cross-browser QA, Lighthouse performance validation, domain configuration, and continuous scaling.',
    },
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* ── 1. Hero ── */}
      <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)', paddingBottom: 'var(--sp-12)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            Comprehensive Capabilities
          </span>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: '1.25rem' }}>
            Designed to elevate. <br />
            <span style={{ color: 'var(--blue-light)' }}>Engineered to perform.</span>
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--ink-3)', lineHeight: 1.6 }}>
            Every discipline you need to establish an unmistakable identity, deploy modern digital products, and scale your audience.
          </p>
        </div>
      </section>

      {/* ── 2. Detailed Service Blocks ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {DEFAULT_SERVICES.map((s, idx) => (
              <div
                key={s.slug}
                id={s.slug}
                className="glass-strong"
                style={{
                  padding: '3rem',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '3rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '14px',
                        background: 'var(--blue-glass)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(37,99,235,0.3)',
                        color: 'var(--blue-light)',
                      }}
                    >
                      {serviceIcons[s.slug] || <Layers size={28} className="text-blue-400" />}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--blue-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Service 0{idx + 1}
                      </span>
                      <h2 style={{ fontSize: '1.75rem', color: '#fff' }}>{s.title}</h2>
                    </div>
                  </div>

                  <p style={{ fontSize: '1.05rem', color: 'var(--ink-2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {s.longDesc}
                  </p>

                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--ink-light)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '6px' }}>
                      Investment Starting At
                    </span>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--blue-light)', fontFamily: 'var(--font-display)' }}>
                      {s.startingAt}
                    </span>
                  </div>

                  <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-primary">
                    Book This Service <ArrowRight size={15} />
                  </Link>
                </div>

                <div
                  style={{
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid var(--glass-border-2)',
                    borderRadius: '18px',
                    padding: '2rem',
                  }}
                >
                  <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-light)', marginBottom: '1.25rem' }}>
                    What&apos;s Included In This Package
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {s.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: 'var(--ink-2)' }}>
                        <CheckCircle2 size={18} color="var(--blue-light)" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Our 5-Step Process ── */}
      <section className="section" style={{ background: 'var(--cream-2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', marginInline: 'auto', marginBottom: 'var(--sp-16)' }}>
            <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
              Execution Playbook
            </span>
            <h2 style={{ fontSize: 'var(--text-3xl)' }}>
              How We Deliver Predictable Excellence
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {processSteps.map((p, i) => (
              <div
                key={i}
                className="glass"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: 'var(--blue-light)',
                    opacity: 0.8,
                    marginBottom: '0.75rem',
                  }}
                >
                  {p.num}
                </span>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.5rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
