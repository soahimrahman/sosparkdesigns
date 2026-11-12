'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface FooterProps {
  hideCtaBand?: boolean;
}

export default function Footer({ hideCtaBand = true }: FooterProps) {
  return (
    <>
      {!hideCtaBand && (
        <section
          className="cta-band cta-band--final"
          id="rail-cta"
          aria-labelledby="cta-band-heading"
        >
          {/* Ambient Cosmic Background Canvas & Auras */}
          <div className="cta-band__canvas" aria-hidden="true">
            <div className="cta-band__ambient" />
            <div className="cta-band__ambient cta-band__ambient--warm" />
            <div className="cta-band__grid" />
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 3 }}>
            <div className="cta-band__layout">
              <div className="cta-band__inner">
                {/* Live Availability Badge */}
                <div className="cta-live-badge" data-scrollfx="fade">
                  <span className="live-pulse-dot" />
                  <span>Accepting Select New Projects • 24–48h Response</span>
                </div>

                <h2 id="cta-band-heading" className="cta-band__title" data-scrollfx="blur-up">
                  Ready to build a brand that <span className="cta-title-gradient">refuses to fade?</span>
                </h2>

                <p className="cta-band__sub" data-scrollfx="fade">
                  Let&apos;s talk about your vision, define your aesthetic, and launch an unforgettable digital presence engineered for performance.
                </p>

                {/* Kinetic Action Buttons */}
                <div className="cta-band__actions" data-scrollfx="fade">
                  <Link href="/contact" className="cta-master-btn">
                    <span>Start a Project</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/portfolio" className="cta-ghost-btn">
                    <span>View Built Platforms</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo-dark.svg"
                alt="SoSpark Design"
                className="footer__logo-img"
              />
              <p className="footer__desc">
                SoSpark Design is a creative digital agency and parent company engineering bold brand identities, high-impact web design, full-stack Next.js products, and digital ventures.
              </p>
            </div>

            <div>
              <h4 className="footer__col-title">Navigation</h4>
              <ul className="footer__nav">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/#ventures">Ventures</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__nav">
                <li><Link href="/services#brand-identity">Brand Identity</Link></li>
                <li><Link href="/services#web-design">Web & UI/UX Design</Link></li>
                <li><Link href="/services#web-dev">Web Development</Link></li>
                <li><Link href="/services#graphic-design">Graphic Design</Link></li>
                <li><Link href="/services#video-editing">Video Production</Link></li>
                <li><Link href="/services#page-management">Page Management</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer__col-title">Ventures & Contact</h4>
              <div style={{ marginBottom: 'var(--sp-3)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.08em', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  Owned Platforms
                </span>
                <ul className="footer__nav">
                  <li>
                    <a href="https://sparkfroge.pro.bd" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      SparkForge <ArrowUpRight size={12} />
                    </a>
                  </li>
                  <li>
                    <a href="https://subzempire.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Subz Empire <ArrowUpRight size={12} />
                    </a>
                  </li>
                </ul>
              </div>

              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.08em', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                Direct Inquiry
              </span>
              <p style={{ fontSize: '0.92rem', color: 'var(--ink-2)', marginBottom: 'var(--sp-2)' }}>
                hello@sosparkdesign.com
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--ink-light)', marginBottom: 'var(--sp-4)' }}>
                Dhaka, Bangladesh — Serving Clients Globally
              </p>
              <div>
                <Link
                  href="/admin"
                  style={{
                    fontSize: '0.78rem',
                    color: '#94a3b8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Admin Portal <Lock size={11} />
                </Link>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              &copy; {new Date().getFullYear()} SoSpark Design. All rights reserved. Directed by Soahim Rahman Tasin.
            </p>
            <div className="footer__legal">
              <Link href="/terms" className="footer__legal-link">Terms</Link>
              <Link href="/privacy" className="footer__legal-link">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
