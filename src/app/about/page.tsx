import React from 'react';
import Link from 'next/link';
import { Sparkles, Compass, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { DEFAULT_TEAM } from '@/lib/seedData';

export const metadata = {
  title: 'About Us — SoSpark Design',
  description: 'Learn about our philosophy, our story, and the team engineering bold brands that refuse to fade.',
};

export default function AboutPage() {
  const values = [
    {
      title: 'Uncompromising Precision',
      desc: 'We refuse template solutions. Every curve, kerning pair, line of code, and transition is engineered purposefully.',
      icon: <Compass size={22} className="text-blue-400" />,
    },
    {
      title: 'Audacious Vision',
      desc: 'Great brands do not whisper in crowded markets. We create commanding identities that arrest attention.',
      icon: <Sparkles size={22} className="text-blue-400" />,
    },
    {
      title: 'Full-Stack Fluidity',
      desc: 'Design and engineering are not separate silos here. Our designs are built by people who understand production code.',
      icon: <Zap size={22} className="text-blue-400" />,
    },
    {
      title: 'Enduring Longevity',
      desc: 'Trends die fast; strong fundamentals endure. We build scalable design systems that stay relevant for decades.',
      icon: <ShieldCheck size={22} className="text-blue-400" />,
    },
  ];

  const milestones = [
    {
      year: '2021',
      title: 'The Inception',
      desc: 'Founded by Soahim Rahman Tasin with a clear thesis: creative design and modern code should live together seamlessly under one roof.',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      desc: 'Expanded our client roster across Singapore, the UK, and North America, delivering high-performance brand ecosystems.',
    },
    {
      year: '2024',
      title: 'Next.js & Digital Lab',
      desc: 'Pioneered full-stack Next.js production web apps and interactive 3D motion design for high-growth tech companies.',
    },
    {
      year: '2026 & Beyond',
      title: 'The New Standard',
      desc: 'Serving visionary founders worldwide with full brand identities, web applications, and ongoing creative leadership.',
    },
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* ── 1. Split Hero ── */}
      <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 2.5rem)', paddingBottom: 'var(--sp-16)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: '1.25rem' }}>
                About SoSpark Design
              </span>
              <h1
                style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.5rem',
                }}
              >
                We bridge high-end aesthetics with <span style={{ color: 'var(--blue-light)' }}>world-class code.</span>
              </h1>
            </div>

            <div className="glass-strong" style={{ padding: '2.5rem' }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                SoSpark Design was born out of frustration with ordinary, cookie-cutter agency deliverables. We believe that true digital luxury isn’t superficial decoration — it is the seamless harmony of brutalist typography, effortless micro-animations, and instant sub-second page performance.
              </p>
              <div
                style={{
                  borderLeft: '2px solid var(--blue)',
                  paddingLeft: '1rem',
                  fontSize: '0.95rem',
                  color: 'var(--ink-3)',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;If a design does not command your attention in the first three seconds, it has already lost.&rdquo;
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--blue-light)', fontStyle: 'normal', marginTop: '6px' }}>
                  — Soahim Rahman Tasin, Founder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. What We Stand For (Value Cards) ── */}
      <section className="section" style={{ background: 'var(--cream-2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', marginInline: 'auto', marginBottom: 'var(--sp-12)' }}>
            <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
              Core Philosophy
            </span>
            <h2 style={{ fontSize: 'var(--text-3xl)' }}>
              What We Stand For
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <div
                key={i}
                className="glass"
                style={{
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--blue-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--blue-light)',
                    marginBottom: '1.25rem',
                    border: '1px solid rgba(37,99,235,0.3)',
                  }}
                >
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '0.75rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. How We Got Here (Timeline) ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--sp-16)' }}>
            <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '0.75rem' }}>
              Our Journey
            </span>
            <h2 style={{ fontSize: 'var(--text-3xl)' }}>
              How We Got Here
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(37,99,235,0.3)' }}>
            {milestones.map((m, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  marginBottom: idx === milestones.length - 1 ? 0 : '3rem',
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.45rem',
                    top: '4px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: 'var(--blue)',
                    border: '3px solid var(--cream)',
                    boxShadow: '0 0 10px rgba(37,99,235,0.6)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.85rem',
                    color: 'var(--blue-light)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                  }}
                >
                  {m.year}
                </span>
                <h3 style={{ fontSize: '1.3rem', color: '#fff', marginTop: '4px', marginBottom: '8px' }}>
                  {m.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--ink-3)', lineHeight: 1.65 }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Team Preview ── */}
      <section className="section" style={{ background: 'var(--cream-2)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--sp-12)', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>
                The Minds Behind It
              </span>
              <h2 style={{ fontSize: 'var(--text-3xl)' }}>
                Meet the Leadership
              </h2>
            </div>
            <Link href="/team" className="btn-ghost" style={{ padding: '0.6rem 1.4rem' }}>
              View All Team Members →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {DEFAULT_TEAM.slice(0, 3).map((t, idx) => (
              <div key={idx} className="glass" style={{ padding: '2rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.3) 0%, rgba(255,255,255,0.05) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--blue-light)',
                    marginBottom: '1.25rem',
                    border: '1px solid rgba(37,99,235,0.3)',
                  }}
                >
                  {t.name[0]}
                </div>
                <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '4px' }}>{t.name}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--blue-light)', display: 'block', marginBottom: '1rem' }}>
                  {t.role}
                </span>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
