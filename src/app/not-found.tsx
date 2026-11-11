import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export const metadata = {
  title: '404 — Page Not Found | SoSpark Design',
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        padding: '6px 14px',
        borderRadius: '999px',
        background: 'rgba(37, 99, 235, 0.08)',
        color: '#2563eb',
        border: '1.5px solid rgba(37, 99, 235, 0.2)',
        fontFamily: 'var(--font-ui)',
        fontSize: '0.8rem',
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginBottom: '1.5rem',
      }}>
        Error 404
      </div>

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 800,
        color: 'var(--ink)',
        lineHeight: 1.1,
        marginBottom: '1rem',
        letterSpacing: '-0.03em',
      }}>
        Page Not Found
      </h1>

      <p style={{
        fontSize: '1.1rem',
        color: 'var(--ink-3)',
        maxWidth: '48ch',
        lineHeight: 1.6,
        marginBottom: '2.5rem',
      }}>
        The page you are looking for doesn’t exist or has moved. Head back to the homepage to explore our creative work.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn-primary">
          <Home size={16} /> Return Home
        </Link>
        <Link href="/portfolio" className="btn-ghost">
          Explore Portfolio
        </Link>
      </div>
    </div>
  );
}
