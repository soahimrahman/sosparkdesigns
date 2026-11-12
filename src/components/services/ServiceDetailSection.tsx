'use client';

import React from 'react';
import Link from 'next/link';
import {
  Palette,
  Layout,
  Code2,
  Sparkles,
  Video,
  Share2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Layers,
  Wrench,
} from 'lucide-react';
import { SERVICES_DISCIPLINES, ServiceDiscipline } from '@/lib/services-data';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export function ServiceDetailSection() {
  const getIcon = (name: ServiceDiscipline['iconName']) => {
    switch (name) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-blue-600" />;
      case 'Video':
        return <Video className="w-6 h-6 text-blue-600" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-blue-600" />;
      default:
        return <Layout className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
        {SERVICES_DISCIPLINES.map((s, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={s.id}
              id={s.id}
              className="scroll-mt-28 relative"
            >
              {/* Backwards compatibility anchor for web-development */}
              {s.altId && <span id={s.altId} className="block -mt-28 pt-28" aria-hidden="true" />}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
                {/* ── Left Column: Identity, Description & Scope ── */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : ''} space-y-6`}>
                  {/* Discipline Badge & Number */}
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center font-mono font-extrabold text-blue-700 text-sm">
                      {s.number}
                    </span>
                    <Badge variant="brand" dot className="text-xs">
                      {s.eyebrow}
                    </Badge>
                    <span className="text-xs font-mono text-slate-600 font-semibold uppercase tracking-wider">
                      {s.engagementType}
                    </span>
                  </div>

                  {/* Main Title & Tagline */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-base md:text-lg font-medium text-blue-600">
                      {s.tagline}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                    {s.longDesc}
                  </p>

                  {/* Business Problems Addressed */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-blue-600" />
                      Critical Challenges Solved:
                    </span>
                    <ul className="space-y-2">
                      {s.businessProblems.map((problem, pIdx) => (
                        <li key={pIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Verified Toolchain / Technology Stack */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 block mb-2.5 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-slate-600" />
                      Verified Production Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {s.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/90 text-xs font-mono font-semibold text-slate-700 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Authentic Case Study Reference (if applicable) */}
                  {s.caseStudyRef && (
                    <div className="pt-2">
                      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 flex items-center justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded">
                              {s.caseStudyRef.badge}
                            </span>
                            <span className="text-xs font-bold text-slate-900">
                              {s.caseStudyRef.name}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600">
                            {s.caseStudyRef.desc}
                          </p>
                        </div>
                        {s.caseStudyRef.url.startsWith('http') ? (
                          <a
                            href={s.caseStudyRef.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link
                            href={s.caseStudyRef.url}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
                          >
                            <span>Inspect</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Right Column: Deliverables Card & Inquiry Box ── */}
                <div
                  className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''} bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between`}
                >
                  <div>
                    {/* Header: Icon + Pricing Tier */}
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shadow-sm">
                        {getIcon(s.iconName)}
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] font-mono text-slate-600 uppercase tracking-wider block">
                          Investment
                        </span>
                        <span className="text-xl md:text-2xl font-extrabold text-slate-900 font-mono">
                          {s.startingTier}
                        </span>
                      </div>
                    </div>

                    {/* Timeline & Delivery Commitment */}
                    <div className="flex items-center justify-between p-3.5 mb-6 rounded-xl bg-white border border-slate-200/80 text-xs">
                      <span className="flex items-center gap-2 text-slate-600 font-medium">
                        <Clock className="w-4 h-4 text-blue-600" />
                        Estimated Turnaround
                      </span>
                      <span className="font-mono font-bold text-slate-900">
                        {s.turnaround}
                      </span>
                    </div>

                    {/* Verified Deliverables List */}
                    <div className="space-y-3 mb-8">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2.5">
                        {s.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Direct Inquiry Action CTA */}
                  <div className="pt-6 border-t border-slate-200/80">
                    <Link
                      href={`/contact?service=${encodeURIComponent(s.title)}`}
                      className="w-full block"
                    >
                      <Button
                        size="md"
                        variant="primary"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                        className="w-full shadow-sm font-semibold justify-center"
                      >
                        Inquire About {s.title.split('&')[0].trim()}
                      </Button>
                    </Link>
                    <p className="text-[11px] text-center text-slate-600 mt-2.5 font-medium">
                      Direct consultation • 24–48h proposal response
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServiceDetailSection;
