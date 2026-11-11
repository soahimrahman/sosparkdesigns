'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', badge: 'NEW' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Team', href: '/team' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header role="banner" className="floating-header">
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav__inner">
          <Link href="/" className="nav__logo" aria-label="SoSpark Design — Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-dark.svg"
              alt="SoSpark Design"
              className="nav__logo-img"
            />
            <span className="nav__logo-text">
              SoSpark<span style={{ color: 'var(--blue)' }}>.</span>
            </span>
          </Link>

          <ul className="nav__links" role="list">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav__link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        style={{
                          fontSize: '9px',
                          fontWeight: 700,
                          padding: '1px 5px',
                          borderRadius: '4px',
                          background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                          color: '#ffffff',
                          letterSpacing: '0.04em',
                          lineHeight: 1.2,
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link href="/contact" className="nav__cta">
              Let&apos;s Talk <ArrowUpRight size={14} />
            </Link>

            <button
              className={`nav__hamburger ${mobileOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav__mobile ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((item, idx) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav__mobile-link ${pathname === item.href ? 'active' : ''}`}
          >
            <span style={{ fontSize: '0.9rem', color: 'var(--blue-light)', fontFamily: 'var(--font-ui)' }}>
              0{idx + 1}
            </span>
            {item.label}
          </Link>
        ))}
        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>
            Let&apos;s Talk →
          </Link>
        </div>
      </div>
    </header>
  );
}
