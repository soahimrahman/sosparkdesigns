'use client';

import React from 'react';
import Link from 'next/link';
import { Lock, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface FooterProps {
  hideCtaBand?: boolean;
}

export default function Footer({ hideCtaBand = false }: FooterProps) {
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
                  <span>2 Project Slots Open for Q4/Q1 • 24h Response</span>
                </div>

                <h2 id="cta-band-heading" className="cta-band__title" data-scrollfx="blur-up">
                  Ready to build a brand that <span className="cta-title-gradient">refuses to fade?</span>
                </h2>

                <p className="cta-band__sub" data-scrollfx="fade">
                  Let&apos;s talk about your vision, define your aesthetic, and launch an unforgettable digital presence engineered for hyper-growth.
                </p>

                {/* Kinetic Action Buttons */}
                <div className="cta-band__actions" data-scrollfx="fade">
                  <Link href="/contact" className="cta-master-btn">
                    <span>Start a Conversation</span>
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/portfolio" className="cta-ghost-btn">
                    <span>View Selected Work</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>

                {/* Trust Metrics Bar */}
                <div className="cta-band__trust" data-scrollfx="fade">
                  <span className="cta-trust-pill">
                    <CheckCircle2 size={14} className="text-blue-600" /> 140+ projects delivered
                  </span>
                  <span className="cta-trust-pill">
                    <CheckCircle2 size={14} className="text-blue-600" /> 48+ happy founders
                  </span>
                  <span className="cta-trust-pill">
                    <CheckCircle2 size={14} className="text-blue-600" /> Sub-second Next.js speed
                  </span>
                </div>
              </div>

              {/* 3D Kinetic Orbiting Sphere with Particle Satellites */}
              <div className="cta-band__visual" aria-hidden="true">
                <div className="cta-band__orbit">
                  <div className="cta-band__orbit-core">
                    <Sparkles size={24} className="text-blue-600" />
                  </div>
                  <div className="cta-band__orbit-ring cta-band__orbit-ring--1" />
                  <div className="cta-band__orbit-ring cta-band__orbit-ring--2" />
                  <div className="cta-band__orbit-ring cta-band__orbit-ring--3" />
                  <span className="cta-band__orbit-dot cta-band__orbit-dot--1" />
                  <span className="cta-band__orbit-dot cta-band__orbit-dot--2" />
                  <span className="cta-band__orbit-dot cta-band__orbit-dot--3" />
                  <div className="cta-orbit-halo" />
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
                SoSpark Design is a bespoke creative agency engineering bold brand identities, high-impact web design, full-stack digital products, and motion graphics.
              </p>
            </div>

            <div>
              <h4 className="footer__col-title">Navigation</h4>
              <ul className="footer__nav">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__nav">
                <li><Link href="/services#branding">Brand Identity</Link></li>
                <li><Link href="/services#web-design">Web & UI/UX Design</Link></li>
                <li><Link href="/services#web-dev">Web Development</Link></li>
                <li><Link href="/services#graphic-design">Graphic Design</Link></li>
                <li><Link href="/services#video">Video Production</Link></li>
                <li><Link href="/services#page-mgmt">Page Management</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer__col-title">Direct Contact</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--ink-light)', marginBottom: 'var(--sp-2)' }}>
                hello@sosparkdesign.com
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--ink-light)', marginBottom: 'var(--sp-4)' }}>
                Dhaka, Bangladesh — Serving Clients Globally
              </p>
              <div style={{ marginTop: 'var(--sp-4)' }}>
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
