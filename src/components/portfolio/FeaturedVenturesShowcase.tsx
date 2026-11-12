'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, ShieldCheck, Layers, CheckCircle2, Terminal, ExternalLink } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio-data';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export function FeaturedVenturesShowcase() {
  const ventures = PORTFOLIO_PROJECTS.filter((p) => p.classification === 'venture');

  return (
    <section
      id="featured-ventures"
      className="py-20 md:py-28 bg-slate-50/70 relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="ventures-showcase-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="ventures-showcase-heading"
          eyebrow="Proprietary Digital Ventures"
          title={
            <>
              Platforms we build, scale, <br className="hidden sm:inline" />
              <span className="text-blue-600">and operate ourselves.</span>
            </>
          }
          description="True technical capability is demonstrated by building proprietary software. Below are the operational digital platforms conceived, architected, and maintained by SoSparkDesigns."
          align="center"
        />

        <div className="space-y-16 md:space-y-24">
          {ventures.map((venture, idx) => {
            const isSparkForge = venture.slug === 'sparkforge';
            const isReverse = idx % 2 === 1;

            return (
              <div
                key={venture.id}
                id={venture.slug}
                className="bg-white rounded-3xl border border-slate-200/90 p-7 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-blue-300 transition-colors scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Narrative & Technical Specs */}
                  <div className={`lg:col-span-7 ${isReverse ? 'lg:order-2' : ''} space-y-6`}>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                        {isSparkForge ? <ShieldCheck className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 px-3 py-1 rounded-full">
                        {venture.classificationBadge}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        {venture.category} • {venture.year}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        {venture.title}
                      </h3>
                      <p className="mt-2 text-base md:text-lg font-medium text-blue-600">
                        {venture.tagline}
                      </p>
                    </div>

                    <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                      {venture.shortDescription}
                    </p>

                    {/* Verified Production Deliverables */}
                    <div className="space-y-2.5 pt-1">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                        Verified Studio Deliverables:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-slate-700">
                        {venture.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Verified Technology Stack Pills */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                        Production Technology Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {venture.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-xs font-mono font-semibold text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {venture.internalCaseStudyUrl && (
                        <Link href={venture.internalCaseStudyUrl}>
                          <Button
                            size="md"
                            variant="primary"
                            rightIcon={<ArrowRight className="w-4 h-4" />}
                            className="font-semibold shadow-sm"
                          >
                            Read Full Case Study
                          </Button>
                        </Link>
                      )}

                      {venture.externalUrl && (
                        <a
                          href={venture.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline px-3 py-2"
                        >
                          <span>Visit Live Platform</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Visual Telemetry Frame */}
                  <div
                    className={`lg:col-span-5 ${isReverse ? 'lg:order-1' : ''} bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden`}
                  >
                    {/* Window Controls */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {isSparkForge ? 'telemetry.rfc5321.ts' : 'checkout.gateway.ts'}
                      </span>
                    </div>

                    {/* Telemetry Mockup */}
                    {isSparkForge ? (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                          <span className="text-slate-400 text-[11px] block mb-1">
                            {'// Verification Pipeline Telemetry'}
                          </span>
                          <span className="text-blue-400 font-bold">RFC 5321</span> &bull;{' '}
                          <span className="text-emerald-400">DNS MX Validated</span>
                        </div>

                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="flex justify-between border-b border-slate-800 pb-1">
                            <span className="text-slate-400">Syntax Grammar:</span>
                            <span className="text-emerald-400 font-bold">RFC 5322 STRICT</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-800 pb-1">
                            <span className="text-slate-400">MX Priority Scoring:</span>
                            <span className="text-blue-400">Direct Socket Probe</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-800 pb-1">
                            <span className="text-slate-400">Catch-All Heuristics:</span>
                            <span className="text-amber-400">Active Detection</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Bot Shield:</span>
                            <span className="text-emerald-400 font-bold">Honeypot Active</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/80 text-[11px] text-blue-300">
                          Live Endpoint: <code className="text-white">POST /api/verify/batch</code>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                          <span className="text-slate-400 text-[11px] block mb-1">
                            {'// Marketplace License Fulfillment'}
                          </span>
                          <span className="text-blue-400 font-bold">Instant License Engine</span> &bull;{' '}
                          <span className="text-emerald-400">Webhook Active</span>
                        </div>

                        <div className="space-y-1.5 text-[11px] text-slate-300">
                          <div className="flex justify-between border-b border-slate-800 pb-1">
                            <span className="text-slate-400">Checkout Flow:</span>
                            <span className="text-emerald-400 font-bold">2-Step Frictionless</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-800 pb-1">
                            <span className="text-slate-400">License Delivery:</span>
                            <span className="text-blue-400">Automated Webhook</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-800 pb-1">
                            <span className="text-slate-400">Asset Distribution:</span>
                            <span className="text-amber-400">Encrypted Cloud CDN</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Platform Status:</span>
                            <span className="text-emerald-400 font-bold">Live Operational</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-blue-950/60 border border-blue-800/80 text-[11px] text-blue-300">
                          Live Storefront: <code className="text-white">https://subzempire.com</code>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedVenturesShowcase;
