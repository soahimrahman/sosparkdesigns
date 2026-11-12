'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export interface FannedCardItem {
  id: string;
  rotation: number;
  badge: string;
  tag: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  icon: React.ReactNode;
  externalUrl?: string;
  internalUrl: string;
}

export const FANNED_CARDS: FannedCardItem[] = [
  {
    id: 'sparkforge',
    rotation: -8,
    badge: 'Flagship Platform',
    tag: 'Next.js SaaS • Deliverability',
    title: 'SparkForge Engine',
    description: 'High-throughput RFC-compliant email verification with direct DNS MX handshake telemetry.',
    metric: 'RFC 5321',
    metricLabel: 'Syntax Validation',
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    externalUrl: 'https://sparkfroge.pro.bd',
    internalUrl: '/portfolio#sparkforge',
  },
  {
    id: 'subz-empire',
    rotation: 0,
    badge: 'Digital Ecosystem',
    tag: 'Creator Commerce • Subscriptions',
    title: 'Subz Empire',
    description: 'Curated digital licensing, subscription gateway, and automated creative asset distribution.',
    metric: 'Instant',
    metricLabel: 'License Delivery',
    icon: <Layers className="w-5 h-5 text-blue-600" />,
    externalUrl: 'https://subzempire.com',
    internalUrl: '/portfolio#subz-empire',
  },
  {
    id: 'sospark-tokens',
    rotation: 8,
    badge: 'Studio Architecture',
    tag: 'Design System • #0069EA',
    title: 'SoSpark Design Tokens',
    description: 'Bespoke editorial agency design tokens, strict WCAG 2.1 AA/AAA contrast, and Next.js primitives.',
    metric: '7.2:1',
    metricLabel: 'Contrast Ratio',
    icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    internalUrl: '/about',
  },
];

export function SpatialFannedDeck() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 md:mt-16 pt-4 pb-8 relative" aria-label="Interactive Showcase Gallery">
      {/* Ambient Radial Sky Aura */}
      <div
        className="absolute inset-0 bg-radial from-blue-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Floating Category Indicator */}
      <div className="text-center mb-8">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 bg-white/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
          Interactive Platform Gallery • Hover or Tap to Inspect
        </span>
      </div>

      {/* Desktop Fanned Deck / Mobile Carousel Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative px-4">
        {FANNED_CARDS.map((card, idx) => {
          const isHovered = hoveredIndex === idx;
          const isOtherHovered = hoveredIndex !== null && !isHovered;

          // Parabolic rotation offset on desktop
          const baseRotation = card.rotation;
          const currentRotation = isHovered ? 0 : baseRotation;
          const currentY = isHovered ? -16 : 0;
          const currentScale = isHovered ? 1.04 : isOtherHovered ? 0.98 : 1;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: `perspective(1000px) translateY(${currentY}px) rotate(${currentRotation}deg) scale(${currentScale})`,
                transition: 'transform 320ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 320ms ease',
                zIndex: isHovered ? 30 : idx === 1 ? 20 : 10,
              }}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 md:p-7 shadow-[0_12px_32px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:border-blue-400 hover:shadow-[0_24px_50px_rgba(0,105,234,0.14)] flex flex-col justify-between text-left cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 px-2.5 py-0.5 rounded-full">
                    {card.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
                  {card.tag}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-extrabold text-slate-900 font-mono">
                    {card.metric}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    {card.metricLabel}
                  </div>
                </div>

                {card.externalUrl ? (
                  <a
                    href={card.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700 group-hover:underline"
                    aria-label={`Visit ${card.title} external platform`}
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link
                    href={card.internalUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700 group-hover:underline"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SpatialFannedDeck;
