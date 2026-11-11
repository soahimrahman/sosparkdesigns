'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Layers, Activity, TrendingUp, Film, CheckCircle2 } from 'lucide-react';

interface PocketProject {
  id: string;
  num: string;
  tag: string;
  brandName: string;
  industry: string;
  deliverables: string;
  headline: string;
  accentColor: string;
  cardBg: string;
  textColor: string;
  stats: string;
  statLabel: string;
  badge: string;
  link: string;
  previewType: 'chart' | 'pulse' | 'wave';
}

const PROJECTS: PocketProject[] = [
  {
    id: 'proj-1',
    num: '01',
    tag: 'FINTECH • IDENTITY',
    brandName: 'Nova Capital',
    industry: 'Financial Technology / Web3',
    deliverables: 'Brand Architecture • Design System • Next.js App',
    headline: 'High-velocity capital deployment engine for generational ventures.',
    accentColor: '#2563eb',
    cardBg: 'linear-gradient(155deg, #090e1a 0%, #1e293b 100%)',
    textColor: '#ffffff',
    stats: '$4.2B+',
    statLabel: 'Total Asset Flow',
    badge: 'API 99.8ms Latency',
    link: '/portfolio#nova-identity',
    previewType: 'chart',
  },
  {
    id: 'proj-2',
    num: '02',
    tag: 'HEALTH TECH • WEB APP',
    brandName: 'Pulse Clinical AI',
    industry: 'Healthcare / Predictive Analytics',
    deliverables: 'UX Architecture • Sub-second Dashboard • Motion UI',
    headline: 'Real-time physiological insights powered by predictive neural models.',
    accentColor: '#0284c7',
    cardBg: 'linear-gradient(155deg, #ffffff 0%, #f0f9ff 100%)',
    textColor: '#09090b',
    stats: '99.8%',
    statLabel: 'Prediction Accuracy',
    badge: 'HIPAA Compliant',
    link: '/portfolio#pulse-app',
    previewType: 'pulse',
  },
  {
    id: 'proj-3',
    num: '03',
    tag: 'CINEMATIC • 3D MOTION',
    brandName: 'Ember 4K Campaign',
    industry: 'Consumer Audio / Luxury Hardware',
    deliverables: 'Commercial Direction • 3D CGI • Sound Engineering',
    headline: 'Acoustic perfection and 3D visual mastery designed to stop the scroll.',
    accentColor: '#d97706',
    cardBg: 'linear-gradient(155deg, #18181b 0%, #27272a 100%)',
    textColor: '#ffffff',
    stats: '1.8M',
    statLabel: 'Organic Views',
    badge: '4K ProRes 4444',
    link: '/portfolio#ember-campaign',
    previewType: 'wave',
  },
];

export default function FrostedPocketDeck() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const active = PROJECTS[activeIndex];

  return (
    <div className="frosted-pocket-container">
      {/* Tilted Floating Pills (Refined, Zero Lime Green) */}
      <div className="frosted-pocket__tag-pill frosted-pocket__tag-pill--left" aria-hidden="true">
        <Sparkles size={12} className="text-blue-600" />
        <span>FEATURED SHOWCASE</span>
      </div>
      <div className="frosted-pocket__tag-pill frosted-pocket__tag-pill--right" aria-hidden="true">
        <Layers size={12} className="text-blue-600" />
        <span>INTERACTIVE POCKET</span>
      </div>

      <div className="frosted-pocket-frame">
        {/* Dynamic Background Ambient Glow matching active project accent */}
        <div
          className="frosted-pocket__glow"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${active.accentColor}25 0%, rgba(255,255,255,0) 70%)`,
            transition: 'background 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          aria-hidden="true"
        />

        {/* ── Layered 3D Cards Peeking Out from the Pocket ── */}
        <div className="pocket-cards-layer">
          {PROJECTS.map((p, idx) => {
            const isSelected = idx === activeIndex;
            const isCardHovered = hoveredCard === idx;

            // Compute dynamic fan-out transformations
            const offset = idx - 1; // -1, 0, 1
            const baseTranslateX = offset * 115;
            const hoverTranslateX = offset * 145;
            const translateX = isCardHovered || hoveredCard !== null ? hoverTranslateX : baseTranslateX;

            let translateY = 0;
            if (isCardHovered) {
              translateY = -65;
            } else if (isSelected) {
              translateY = -28;
            } else {
              translateY = 0;
            }

            const rotateZ = offset * (isCardHovered ? 6 : 3.5);
            const scale = isCardHovered ? 1.06 : isSelected ? 1.02 : 0.94;
            const zIndex = isCardHovered ? 10 : isSelected ? 5 : 2;

            return (
              <div
                key={p.id}
                className={`pocket-card ${isSelected ? 'pocket-card--active' : ''} ${isCardHovered ? 'pocket-card--hovered' : ''}`}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotateZ}deg) scale(${scale})`,
                  background: p.cardBg,
                  color: p.textColor,
                  zIndex,
                  borderColor: isSelected ? `${p.accentColor}60` : 'rgba(255,255,255,0.2)',
                  boxShadow: isSelected
                    ? `0 24px 60px ${p.accentColor}30, 0 4px 16px rgba(0,0,0,0.08)`
                    : '0 16px 40px rgba(0, 0, 0, 0.1)',
                }}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${p.brandName}`}
              >
                {/* Mini App Chrome Bar */}
                <div className="pocket-card__chrome">
                  <div className="pocket-card__dots">
                    <span className="chrome-dot" />
                    <span className="chrome-dot" />
                    <span className="chrome-dot" />
                  </div>
                  <span
                    className="pocket-card__badge"
                    style={{
                      background: p.textColor === '#ffffff' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
                      color: p.textColor,
                    }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Header Tag & Active Indicator */}
                <div className="pocket-card__header">
                  <span className="pocket-card__tag" style={{ color: p.accentColor }}>
                    {p.tag}
                  </span>
                  <span className="pocket-card__indicator" style={{ color: isSelected ? p.accentColor : 'inherit' }}>
                    {isSelected ? '● ACTIVE' : 'CLICK TO VIEW'}
                  </span>
                </div>

                {/* Title & Headline */}
                <div className="pocket-card__body">
                  <h4 className="pocket-card__title" style={{ color: p.textColor }}>
                    {p.brandName}
                  </h4>
                  <p className="pocket-card__headline" style={{ color: p.textColor, opacity: 0.82 }}>
                    {p.headline}
                  </p>
                </div>

                {/* Visual UI Preview Simulation Mockup */}
                <div className="pocket-card__preview">
                  {p.previewType === 'chart' && (
                    <div className="mini-preview mini-preview--chart">
                      <div className="mini-chart-header">
                        <TrendingUp size={13} style={{ color: p.accentColor }} />
                        <span>Volume Surge</span>
                      </div>
                      <svg viewBox="0 0 200 40" className="mini-chart-svg">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={p.accentColor} stopOpacity="0.4" />
                            <stop offset="100%" stopColor={p.accentColor} stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 35 Q 40 30, 70 20 T 130 15 T 170 5 T 200 2 L 200 40 L 0 40 Z"
                          fill="url(#chartGrad)"
                        />
                        <path
                          d="M 0 35 Q 40 30, 70 20 T 130 15 T 170 5 T 200 2"
                          fill="none"
                          stroke={p.accentColor}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}

                  {p.previewType === 'pulse' && (
                    <div className="mini-preview mini-preview--pulse">
                      <div className="mini-chart-header">
                        <Activity size={13} style={{ color: p.accentColor }} />
                        <span>Neural Vitals</span>
                      </div>
                      <svg viewBox="0 0 200 40" className="mini-chart-svg">
                        <path
                          d="M 0 20 L 50 20 L 60 8 L 72 32 L 84 4 L 96 36 L 108 20 L 200 20"
                          fill="none"
                          stroke={p.accentColor}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}

                  {p.previewType === 'wave' && (
                    <div className="mini-preview mini-preview--wave">
                      <div className="mini-chart-header">
                        <Film size={13} style={{ color: p.accentColor }} />
                        <span>Master Soundstage</span>
                      </div>
                      <div className="mini-equalizer-bars">
                        {[40, 70, 95, 60, 30, 85, 100, 75, 45, 90, 65, 35].map((h, i) => (
                          <span
                            key={i}
                            className="mini-bar"
                            style={{
                              height: `${h}%`,
                              background: p.accentColor,
                              animationDelay: `${(i * 0.08).toFixed(2)}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Metric Pill */}
                <div className="pocket-card__footer">
                  <div className="pocket-card__stat-group">
                    <span className="pocket-card__stat-val" style={{ color: p.accentColor }}>
                      {p.stats}
                    </span>
                    <span className="pocket-card__stat-lbl">{p.statLabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Frosted Glass Pocket Flap & Project Selector ── */}
        <div className="frosted-pocket-flap">
          {/* Top Notch with Interactive Tab Switchers */}
          <div className="frosted-pocket-flap__notch">
            <div className="frosted-pocket-tabs">
              {PROJECTS.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  className={`pocket-tab-pill ${idx === activeIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="pocket-tab-num">{p.num}</span>
                  <span className="pocket-tab-name">{p.brandName}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="frosted-pocket-flap__content">
            <div className="frosted-pocket-flap__info">
              <div className="frosted-pocket-flap__title-row">
                <span className="project-index-pill" style={{ background: `${active.accentColor}18`, color: active.accentColor }}>
                  {active.num}
                </span>
                <h3 className="project-spotlight-title">{active.brandName}</h3>
                <span className="project-spotlight-industry">{active.industry}</span>
              </div>

              <div className="frosted-pocket-flap__meta-row">
                <span className="scope-bullet">
                  <CheckCircle2 size={13} className="text-blue-600" />
                  {active.deliverables}
                </span>
              </div>
            </div>

            <div className="frosted-pocket-flap__actions">
              {/* Highlight Metric Badge */}
              <div className="flap-metric-chip" style={{ borderColor: `${active.accentColor}35` }}>
                <span className="flap-metric-num" style={{ color: active.accentColor }}>
                  {active.stats}
                </span>
                <span className="flap-metric-text">{active.statLabel}</span>
              </div>

              <Link
                href={active.link}
                className="frosted-pocket-flap__action-btn"
                aria-label={`Explore ${active.brandName} case study`}
              >
                <span>Explore Case Study</span>
                <div className="frosted-pocket-flap__action-circle">
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
