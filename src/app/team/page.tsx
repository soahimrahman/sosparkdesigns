import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Globe, ArrowRight } from 'lucide-react';
import { DEFAULT_TEAM } from '@/lib/seedData';

export const metadata = {
  title: 'Team — SoSpark Design',
  description: 'Meet the creative directors, UI/UX designers, and Next.js engineers behind SoSpark Design.',
};

export default function TeamPage() {
  return (
    <div style={{ position: 'relative' }}>
      <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)', paddingBottom: 'var(--sp-12)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            The Collective
          </span>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: '1.25rem' }}>
            Audacious minds behind <span style={{ color: 'var(--blue-light)' }}>extraordinary work.</span>
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--ink-3)', lineHeight: 1.6 }}>
            A multidisciplinary studio of brand directors, full-stack developers, and motion artists united by uncompromising craft.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
            {DEFAULT_TEAM.map((member, i) => (
              <div
                key={i}
                className="glass-strong"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--blue) 0%, rgba(255,255,255,0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#fff',
                      marginBottom: '1.5rem',
                      boxShadow: '0 8px 24px rgba(37,99,235,0.3)',
                    }}
                  >
                    {member.name[0]}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--blue-light)',
                      fontFamily: 'var(--font-ui)',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {member.role}
                  </span>

                  <p style={{ fontSize: '0.9rem', color: 'var(--ink-3)', lineHeight: 1.65, marginBottom: '2rem' }}>
                    {member.bio}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
                  {member.socials?.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-light)', transition: 'color 0.2s' }}>
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.socials?.twitter && (
                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-light)', transition: 'color 0.2s' }}>
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.socials?.behance && (
                    <a href={member.socials.behance} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink-light)', transition: 'color 0.2s' }}>
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
