'use client';

import React from 'react';
import Link from 'next/link';
import { Palette, Layout, Code2, Sparkles, Video, Share2, ArrowRight } from 'lucide-react';
import { SERVICES_DISCIPLINES, ServiceDiscipline } from '@/lib/services-data';
import SectionHeader from '@/components/ui/SectionHeader';

export function AboutDisciplinesSummary() {
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
      id="capabilities"
      className="py-20 md:py-28 bg-slate-50/70 relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="capabilities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16">
          <SectionHeader
            id="capabilities-heading"
            eyebrow="What We Do"
            title={
              <>
                The 6 core disciplines <br className="hidden sm:inline" />
                <span className="text-blue-600">we engineer for clients.</span>
              </>
            }
            description="Our service offerings reflect real production disciplines executed with architectural precision."
            align="left"
            className="mb-0"
          />

          <Link
            href="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            <span>Explore Full Scope &amp; Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DISCIPLINES.map((s) => (
            <Link
              key={s.id}
              href={`/services#${s.id}`}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    {getIcon(s.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {s.number}
                  </span>
                </div>

                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 mb-1">
                  {s.eyebrow}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {s.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-mono text-slate-500 font-semibold">{s.startingTier}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                  <span>Scope Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutDisciplinesSummary;
