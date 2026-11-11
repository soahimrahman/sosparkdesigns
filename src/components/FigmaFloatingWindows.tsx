'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Layers,
  Code2,
  Check,
  TrendingUp,
  Search,
  SlidersHorizontal,
} from 'lucide-react';

export default function FigmaFloatingWindows() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'tokens' | 'typography' | 'components'>('tokens');

  // Subtle 3D mouse tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setTilt({ x: -dy * 5, y: dx * 6 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="figma-windows-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1080px',
        marginInline: 'auto',
        marginTop: '2.5rem',
        marginBottom: '2rem',
        perspective: '1400px',
        transformStyle: 'preserve-3d',
        paddingBlock: '1rem',
      }}
    >
      {/* Central Cyan & Sky Blue Ambient Halo */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '680px',
          height: '280px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(56, 189, 248, 0.18) 0%, rgba(37, 99, 235, 0.1) 45%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          height: '380px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `rotateX(${tilt.x + 4}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ── WINDOW 1: Left (Batch Styler / Typography Architecture) ── */}
        <div
          className="figma-window figma-window--left"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '340px',
            height: '280px',
            marginLeft: '-360px',
            marginTop: '-120px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.07), 0 2px 8px rgba(0, 0, 0, 0.02)',
            transform: 'rotateY(12deg) translateZ(-40px) rotateZ(-3deg)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            zIndex: 10,
            overflow: 'hidden',
            padding: '1rem',
          }}
        >
          {/* macOS Titlebar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', paddingBottom: '0.65rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
            </div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink-2)', marginLeft: '4px' }}>
              Batch Styler • Typography
            </div>
          </div>

          {/* Typography Spec Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: '#f8fafc', borderRadius: '8px', fontSize: '11px' }}>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Display Headline</span>
              <span style={{ color: 'var(--blue)', fontWeight: 500 }}>Plus Jakarta Sans / 600</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: '#f8fafc', borderRadius: '8px', fontSize: '11px' }}>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Body Copy</span>
              <span style={{ color: 'var(--ink-3)', fontWeight: 500 }}>Inter UI / 400</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: '#f8fafc', borderRadius: '8px', fontSize: '11px' }}>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Letter Spacing</span>
              <span style={{ color: '#10b981', fontWeight: 600 }}>-0.03em (Editorial)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: '#f8fafc', borderRadius: '8px', fontSize: '11px' }}>
              <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Performance</span>
              <span style={{ color: '#10b981', fontWeight: 700 }}>100/100 Core Web Vitals</span>
            </div>
          </div>
        </div>

        {/* ── WINDOW 2: Center (Kigen / Design System Studio — Primary Hero Window) ── */}
        <div
          className="figma-window figma-window--center"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '440px',
            height: '330px',
            marginLeft: '-220px',
            marginTop: '-165px',
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.09)',
            boxShadow: '0 30px 70px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.04)',
            transform: 'translateZ(60px)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            zIndex: 30,
            overflow: 'hidden',
            padding: '1.25rem',
          }}
        >
          {/* macOS Titlebar & Branding */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: '6px' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'linear-gradient(135deg, #2563eb, #38bdf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Sparkles size={10} />
                </div>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>
                  Kigen Design Studio
                </span>
              </div>
            </div>

            {/* Pill Tabs */}
            <div style={{ display: 'flex', gap: '4px', background: '#f1f5f9', padding: '2px', borderRadius: '999px' }}>
              <button
                type="button"
                onClick={() => setActiveTab('tokens')}
                style={{
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  border: 'none',
                  background: activeTab === 'tokens' ? '#ffffff' : 'transparent',
                  color: activeTab === 'tokens' ? 'var(--ink)' : 'var(--ink-light)',
                  boxShadow: activeTab === 'tokens' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  cursor: 'pointer',
                }}
              >
                Tokens
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('typography')}
                style={{
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  border: 'none',
                  background: activeTab === 'typography' ? '#ffffff' : 'transparent',
                  color: activeTab === 'typography' ? 'var(--ink)' : 'var(--ink-light)',
                  boxShadow: activeTab === 'typography' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                  cursor: 'pointer',
                }}
              >
                Components
              </button>
            </div>
          </div>

          {/* Color Tokens Swatches */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              Master Color System (10X Tokens)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              <div style={{ padding: '8px', borderRadius: '12px', background: '#f8fafc', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ height: '36px', borderRadius: '8px', background: '#2563eb', marginBottom: '6px' }} />
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)' }}>Royal Blue</div>
                <div style={{ fontSize: '9px', color: 'var(--ink-light)' }}>#2563eb</div>
              </div>
              <div style={{ padding: '8px', borderRadius: '12px', background: '#f8fafc', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ height: '36px', borderRadius: '8px', background: '#09090b', marginBottom: '6px' }} />
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)' }}>Obsidian</div>
                <div style={{ fontSize: '9px', color: 'var(--ink-light)' }}>#09090b</div>
              </div>
              <div style={{ padding: '8px', borderRadius: '12px', background: '#f8fafc', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ height: '36px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '6px' }} />
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)' }}>Canvas 50</div>
                <div style={{ fontSize: '9px', color: 'var(--ink-light)' }}>#f8fafc</div>
              </div>
              <div style={{ padding: '8px', borderRadius: '12px', background: '#f8fafc', border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                <div style={{ height: '36px', borderRadius: '8px', background: '#10b981', marginBottom: '6px' }} />
                <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--ink)' }}>Emerald</div>
                <div style={{ fontSize: '9px', color: 'var(--ink-light)' }}>#10b981</div>
              </div>
            </div>
          </div>

          {/* Active Synced System Footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.06)', border: '1px solid rgba(37, 99, 235, 0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }} />
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#1d4ed8' }}>
                Next.js 14 &amp; Figma Tokens Live Synced
              </span>
            </div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb' }}>v3.4.0</span>
          </div>
        </div>

        {/* ── WINDOW 3: Right (Nova Interface / Live Metric Engine) ── */}
        <div
          className="figma-window figma-window--right"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '340px',
            height: '280px',
            marginLeft: '20px',
            marginTop: '-120px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.07), 0 2px 8px rgba(0, 0, 0, 0.02)',
            transform: 'rotateY(-12deg) translateZ(-40px) rotateZ(3deg)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            zIndex: 10,
            overflow: 'hidden',
            padding: '1rem',
          }}
        >
          {/* macOS Titlebar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', paddingBottom: '0.65rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
            </div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink-2)', marginLeft: '4px' }}>
              Nova Fintech Interface • Live
            </div>
          </div>

          {/* Metric Showcase */}
          <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '12px', marginBottom: '10px' }}>
            <div style={{ fontSize: '10px', color: 'var(--ink-light)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
              Client Valuation Lift
            </div>
            <div style={{ fontSize: '26px', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.2, marginTop: '2px' }}>
              $2,670 MRR <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 600 }}>+140%</span>
            </div>
          </div>

          {/* Sparkline & Trust Badge */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', background: 'rgba(16, 185, 129, 0.08)', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: '#047857' }}>
              High-Converting Architecture
            </span>
            <Check size={14} className="text-emerald-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
