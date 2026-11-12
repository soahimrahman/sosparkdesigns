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
  ArrowRight,
  ArrowDownRight,
} from 'lucide-react';
import { SERVICES_DISCIPLINES, ServiceDiscipline } from '@/lib/services-data';
import SectionHeader from '@/components/ui/SectionHeader';

export function ServicesOverviewRows() {
  const getIcon = (name: ServiceDiscipline['iconName']) => {
    switch (name) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-600" />;
      case 'Video':
        return <Video className="w-5 h-5 text-blue-600" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-blue-600" />;
      default:
        return <Layout className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section
      id="disciplines"
      className="py-20 md:py-28 bg-slate-50/70 relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="overview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="overview-heading"
          eyebrow="The 6 Core Disciplines"
          title={
            <>
              Engineered for impact. <br className="hidden sm:inline" />
              <span className="text-blue-600">Built for longevity.</span>
            </>
          }
          description="Every discipline operates as an integrated system. Select any discipline below to inspect scope itemizations, technologies, deliverables, and engagement options."
          align="center"
        />

        {/* Cydrix-Inspired Numbered Horizontal Overview Rows */}
        <div className="divide-y divide-slate-200/90 border-y border-slate-200/90 bg-white rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.03)]">
          {SERVICES_DISCIPLINES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-blue-50/40 transition-colors duration-200 relative block"
            >
              {/* Left Zone: Number + Icon + Title + Eyebrow */}
              <div className="flex items-center gap-4 md:w-1/3">
                <span className="text-2xl md:text-3xl font-mono font-extrabold text-slate-400 group-hover:text-blue-600 transition-colors">
                  {s.number}
                </span>
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 transition-transform">
                  {getIcon(s.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 block">
                    {s.eyebrow}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                </div>
              </div>

              {/* Center Zone: Summary & Deliverables Pills */}
              <div className="md:w-5/12 space-y-2">
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  {s.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {s.deliverables.slice(0, 3).map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-slate-100 group-hover:bg-white px-2 py-0.5 rounded-md border border-slate-200/60"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-600" />
                      {item}
                    </span>
                  ))}
                  {s.deliverables.length > 3 && (
                    <span className="text-[11px] text-slate-400 font-mono self-center">
                      +{s.deliverables.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Right Zone: Investment & Action Button */}
              <div className="flex items-center justify-between md:justify-end gap-5 md:w-1/4">
                <div className="text-left md:text-right">
                  <span className="text-xs font-mono font-extrabold text-slate-900 block">
                    {s.startingTier}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {s.turnaround}
                  </span>
                </div>
                <div className="w-11 h-11 rounded-full bg-blue-50 border border-blue-200 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white transition-all shadow-sm">
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOverviewRows;
