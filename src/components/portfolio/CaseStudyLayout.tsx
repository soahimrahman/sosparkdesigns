'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Code2,
  Layers,
  CheckCircle2,
  Clock,
  Terminal,
  ExternalLink,
  Laptop,
} from 'lucide-react';
import { CaseStudyFullContent } from '@/lib/portfolio-data';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Reveal from '@/components/motion/Reveal';

export interface CaseStudyLayoutProps {
  caseStudy: CaseStudyFullContent;
}

export function CaseStudyLayout({ caseStudy }: CaseStudyLayoutProps) {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  const isSparkForge = caseStudy.slug === 'sparkforge';

  return (
    <article className="min-h-screen bg-white">
      {/* ── 1. Breadcrumbs & Back Navigation ── */}
      <div className="pt-28 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio Directory</span>
        </Link>
      </div>

      {/* ── 2. Hero Section ── */}
      <section className="pt-6 pb-16 md:pt-10 md:pb-24 border-b border-slate-200/80 relative overflow-hidden">
        {/* Ambient Radial Blue Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 px-3 py-1 rounded-full">
                {caseStudy.classificationBadge}
              </span>
              <span className="text-xs font-mono text-slate-500 font-semibold">
                {caseStudy.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {caseStudy.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 font-medium leading-snug">
              {caseStudy.subtitle}
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-2">
              {caseStudy.heroHeadline}
            </p>

            {/* Quick Metadata Matrix */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px]">
                  Entity / Ownership
                </span>
                <span className="font-bold text-slate-900 mt-0.5 block">
                  {caseStudy.clientOrOwner}
                </span>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px]">
                  Studio Role
                </span>
                <span className="font-bold text-slate-900 mt-0.5 block">
                  {caseStudy.role.split(',')[0]}
                </span>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px]">
                  Status &amp; Timeline
                </span>
                <span className="font-bold text-emerald-600 mt-0.5 block">
                  {caseStudy.timeline}
                </span>
              </div>
              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px]">
                  Live Destination
                </span>
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:underline mt-0.5 inline-flex items-center gap-1"
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Visual Telemetry Mockup Showcase ── */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Browser Header Bar */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80" />
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-4 py-1 rounded-full bg-slate-900 text-slate-400 font-mono text-xs border border-slate-800 overflow-hidden text-ellipsis whitespace-nowrap max-w-[280px] sm:max-w-none">
                {caseStudy.liveUrl}
              </div>
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ONLINE 200 OK</span>
              </div>
            </div>

            {/* Simulated Live Architectural Dashboard */}
            {isSparkForge ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Protocol Validator
                  </span>
                  <div className="text-2xl font-extrabold text-blue-400">RFC 5321</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Direct TCP MX socket handshake telemetry without dispatching synthetic test emails.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Grammar Analysis
                  </span>
                  <div className="text-2xl font-extrabold text-emerald-400">RFC 5322</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Grammar parsing of domain labels, local-parts, internationalized domains, and catch-all traps.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Batch Throughput
                  </span>
                  <div className="text-2xl font-extrabold text-indigo-400">API Pipeline</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Parallel asynchronous list inspection with live percentage completion telemetry.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Checkout Architecture
                  </span>
                  <div className="text-2xl font-extrabold text-blue-400">2-Step Funnel</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    High-conversion streamlined checkout flow reducing drop-off across creator customer tiers.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    License Fulfillment
                  </span>
                  <div className="text-2xl font-extrabold text-emerald-400">Automated Webhooks</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Cryptographic key generation and immediate digital asset delivery upon payment clearance.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">
                    Multi-Device UX
                  </span>
                  <div className="text-2xl font-extrabold text-indigo-400">WCAG 2.1 AA</div>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Tactile touch targets and crisp typography optimized across all smartphone and desktop viewports.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 4. Project Overview & The Challenge ── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Executive Overview */}
          <div className="space-y-4">
            <Badge variant="brand" dot>
              Strategic Scope
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Project Overview &amp; Market Need
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              {caseStudy.overview}
            </p>
          </div>

          {/* The Technical Challenge */}
          <div className="p-7 md:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
              The Engineering Challenge
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Solving Friction and Algorithmic Reliability
            </h3>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed font-normal">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Solution & Architecture Pillars ── */}
      <section className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <Badge variant="brand" dot className="mb-3.5">
              Architectural Blueprint
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineering Pillars &amp; Core Workflows
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {caseStudy.solutionArchitecture.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.solutionArchitecture.pillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Technical Highlights & Deep-Dives ── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <Badge variant="brand" dot className="mb-3.5">
              Technical Verification
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Verified Technical Highlights
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Specific architectural decisions executed in the codebase to guarantee performance, deliverability, and
              security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.technicalHighlights.map((hl, hIdx) => (
              <div
                key={hIdx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    {hl.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                    {hl.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {hl.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Deliverables & Demonstrable Outcomes ── */}
      <section className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Verified Deliverables */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-7 md:p-8 shadow-sm space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Deliverables Produced
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Production-Ready Assets
              </h3>
              <ul className="space-y-3">
                {caseStudy.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Demonstrable Outcomes */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-7 md:p-8 shadow-sm space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 block">
                Empirical Outcomes
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Demonstrated Results
              </h3>
              <ul className="space-y-3">
                {caseStudy.outcomes.map((item, oIdx) => (
                  <li key={oIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Closing Actions & Next Case Study ── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to engineer your own platform?
            </h2>
            <p className="text-base text-slate-600 max-w-xl mx-auto">
              We apply the same architectural rigor, security standards, and design craft to all client partnerships.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="primary"
                rightIcon={<ExternalLink className="w-4 h-4" />}
                className="shadow-md shadow-blue-600/25 font-semibold"
              >
                Visit Live Platform
              </Button>
            </a>

            <Link href={`/contact?caseStudy=${encodeURIComponent(caseStudy.title)}`}>
              <Button
                size="lg"
                variant="outline"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-white hover:bg-slate-50 text-slate-800 border-slate-300 font-semibold"
              >
                Discuss a Similar Project
              </Button>
            </Link>
          </div>

          {/* Next Case Study Teaser */}
          <div className="pt-12 mt-12 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Next Case Study:</span>
            <Link
              href={`/portfolio/${caseStudy.nextCaseStudy.slug}`}
              className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <span>{caseStudy.nextCaseStudy.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export default CaseStudyLayout;
