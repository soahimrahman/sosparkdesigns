'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X, ExternalLink } from 'lucide-react';
import { DEFAULT_PORTFOLIO } from '@/lib/seedData';

const CATEGORIES = [
  'All',
  'Branding',
  'Web Design',
  'Web Development',
  'Graphic Design',
  'Video',
  'Page Management',
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? DEFAULT_PORTFOLIO
      : DEFAULT_PORTFOLIO.filter((p) => p.category === activeCategory);

  return (
    <div style={{ position: 'relative' }}>
      {/* ── 1. Hero ── */}
      <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)', paddingBottom: 'var(--sp-10)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            Curated Archive
          </span>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: '1.25rem' }}>
            Selected Works & <span style={{ color: 'var(--blue-light)' }}>Case Studies</span>
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--ink-3)', lineHeight: 1.6 }}>
            A showcase of digital products, visual systems, and motion reels engineered for clients across the globe.
          </p>
        </div>
      </section>

      {/* ── 2. Category Filter Bar ── */}
      <section style={{ paddingBottom: 'var(--sp-10)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  background:
                    activeCategory === cat
                      ? 'var(--blue)'
                      : 'var(--glass-bg)',
                  color: activeCategory === cat ? '#fff' : 'var(--ink-3)',
                  border:
                    activeCategory === cat
                      ? '1px solid var(--blue)'
                      : '1px solid var(--glass-border-2)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Projects Grid ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {filteredProjects.map((p) => (
              <div
                key={p.slug}
                id={p.slug}
                className="glass-strong"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.25s, border-color 0.25s',
                }}
                onClick={() => setSelectedProject(p)}
              >
                <div
                  style={{
                    height: '240px',
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(10,10,10,0.85) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    borderBottom: '1px solid var(--glass-border-2)',
                  }}
                >
                  <div style={{ fontSize: '4rem', color: 'var(--blue-light)', opacity: 0.25, fontWeight: 900 }}>
                    {p.title[0]}
                  </div>
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      background: 'rgba(0,0,0,0.65)',
                      backdropFilter: 'blur(8px)',
                      fontSize: '0.75rem',
                      color: 'var(--blue-light)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--ink-light)' }}>
                        {p.client} • {p.year}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.75rem' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {p.description}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                      {p.tags?.map((t: string, i: number) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.72rem',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            color: 'var(--ink-light)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(p);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: 'var(--blue-light)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                      }}
                    >
                      View Case Study <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study Modal ── */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-strong"
            style={{
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2.5rem',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--cream-4)',
              boxShadow: 'var(--glass-shadow-lg)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                color: 'var(--ink-light)',
                padding: '6px',
              }}
            >
              <X size={22} />
            </button>

            <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>
              {selectedProject.category}
            </span>
            <h2 style={{ fontSize: '2rem', color: 'var(--ink)', marginBottom: '0.5rem', fontWeight: 800 }}>
              {selectedProject.title}
            </h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--ink-light)', marginBottom: '1.5rem' }}>
              Client: <strong style={{ color: 'var(--ink-2)' }}>{selectedProject.client}</strong> | Year: {selectedProject.year}
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--ink-2)', lineHeight: 1.75, marginBottom: '2rem' }}>
              {selectedProject.description}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--ink-light)', marginBottom: '0.75rem' }}>
                Tags & Deliverables
              </h4>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedProject.tags?.map((t: string, i: number) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.8rem',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      background: 'var(--blue-glass)',
                      color: 'var(--blue-light)',
                      border: '1px solid rgba(37,99,235,0.3)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" onClick={() => setSelectedProject(null)}>
                Inquire Similar Project →
              </Link>
              <button className="btn-ghost" onClick={() => setSelectedProject(null)}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
