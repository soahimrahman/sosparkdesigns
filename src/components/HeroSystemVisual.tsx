'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, Code2, ShieldCheck, Sparkles, ArrowUpRight, Cpu } from 'lucide-react';

export default function HeroSystemVisual() {
  const [activeTab, setActiveTab] = useState<'design' | 'code' | 'ventures'>('code');

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 md:mt-14 relative" aria-label="Interactive Agency Capability Matrix">
      {/* Ambient Radial Sky Backdrop */}
      <div
        className="absolute inset-0 -top-12 bg-radial from-blue-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Control Switcher Pills */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-6 flex-wrap" role="tablist" aria-label="Capability facets">
        <button
          role="tab"
          aria-selected={activeTab === 'design'}
          onClick={() => setActiveTab('design')}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all ${
            activeTab === 'design'
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
              : 'bg-white/80 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            01. Brand &amp; Design
          </span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'code'}
          onClick={() => setActiveTab('code')}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all ${
            activeTab === 'code'
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
              : 'bg-white/80 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" />
            02. Next.js Engineering
          </span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'ventures'}
          onClick={() => setActiveTab('ventures')}
          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all ${
            activeTab === 'ventures'
              ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
              : 'bg-white/80 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
          }`}
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            03. Digital Ventures
          </span>
        </button>
      </div>

      {/* Main Terminal / Architecture Card */}
      <div className="bg-white/95 rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] backdrop-blur-md overflow-hidden transition-all">
        {/* Window Topbar */}
        <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300" />
            <span className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300" />
            <span className="w-3 h-3 rounded-full bg-slate-200 border border-slate-300" />
            <span className="ml-2 text-xs font-mono text-slate-500">
              sospark-engine://{activeTab}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Architecture v3.0</span>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="p-6 md:p-8 min-h-[260px] flex flex-col justify-between">
          {activeTab === 'design' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Disciplined Visual Systems
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Design engineered to endure for decades, not trend cycles
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We architect comprehensive brand identities: vector logo geometry, custom typography pairings,
                  strict contrast tokens, and interactive Figma systems that eliminate developer friction.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-700">
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg font-medium">Design Tokens</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg font-medium">Figma Masters</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg font-medium">WCAG 2.1 AA</span>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs font-mono space-y-2 text-slate-700">
                <div className="text-blue-600 font-bold">{'//'} Design Token Matrix</div>
                <div>--brand-primary: #2563EB;</div>
                <div>--brand-navy: #1E40AF;</div>
                <div>--contrast-ratio: 4.6:1 (AA);</div>
                <div>--typography-display: Plus Jakarta;</div>
                <div>--typography-body: Inter;</div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Next.js App Router & TypeScript
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  Sub-second server rendering with strict type safety
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every view is authored with Server Components for zero-bundle HTML and immediate First Contentful Paint.
                  Interactive islands are isolated with verified runtime validation and automated quality gates.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-700">
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg font-medium">App Router</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg font-medium">TypeScript Strict</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg font-medium">Zod Runtime Guard</span>
                  <span className="px-2.5 py-1 bg-slate-100 rounded-lg font-medium">Vitest Validated</span>
                </div>
              </div>
              <div className="bg-slate-900 text-slate-200 rounded-xl p-4 text-xs font-mono space-y-2 border border-slate-800">
                <div className="text-blue-400 font-bold">{'//'} Production Verification</div>
                <div className="text-emerald-400">✓ Compiled successfully</div>
                <div className="text-emerald-400">✓ 0 Lint errors (ESLint 8)</div>
                <div className="text-emerald-400">✓ 6 Tests passed (Vitest)</div>
                <div className="text-slate-400">First Load JS: 87.3 kB shared</div>
              </div>
            </div>
          )}

          {activeTab === 'ventures' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Dual-Engine Operation
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  We incubate and operate real digital platforms
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our client engineering is grounded in the operational reality of running our own products. We build
                  flagship platforms like SparkForge (email deliverability) and Subz Empire (digital commerce).
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-700">
                  <a
                    href="https://sparkfroge.pro.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg font-medium hover:underline"
                  >
                    SparkForge <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://subzempire.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg font-medium hover:underline"
                  >
                    Subz Empire <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 text-xs font-mono space-y-2 text-slate-700">
                <div className="text-blue-600 font-bold">{'//'} Venture Telemetry</div>
                <div>SparkForge: RFC 5321 Active</div>
                <div>Subz Empire: Instant Licensing</div>
                <div>Architecture: Edge & Cloudflare</div>
                <div>Direct MX: Verified handshake</div>
              </div>
            </div>
          )}

          {/* Bottom Bar Details */}
          <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              Engineered with clean React 18, Next.js 14, and Tailwind tokens
            </span>
            <Link
              href="/services"
              className="font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              Explore Full Capabilities <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
