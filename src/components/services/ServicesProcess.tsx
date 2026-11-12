'use client';

import React from 'react';
import {
  Compass,
  FileCheck,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  PackageCheck,
} from 'lucide-react';
import { SERVICES_PROCESS_STAGES } from '@/lib/services-data';
import SectionHeader from '@/components/ui/SectionHeader';

export function ServicesProcess() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-slate-50/70 relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="process-heading"
          eyebrow="5-Stage Methodology"
          title={
            <>
              How we execute <br className="hidden sm:inline" />
              <span className="text-blue-600">predictable excellence.</span>
            </>
          }
          description="A battle-tested engineering and creative pipeline designed to eliminate ambiguity, enforce strict quality gates, and deliver production results on schedule."
          align="center"
        />

        {/* 5-Step Process Timeline Grid */}
        <div className="space-y-8">
          {SERVICES_PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-blue-300 transition-colors duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Step Marker & Title */}
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-mono font-extrabold flex items-center justify-center text-sm shadow-sm shadow-blue-600/20">
                      {stage.step}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                      {stage.eyebrow}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight pt-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal pt-1">
                    {stage.summary}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/70">
                      <span>Next Phase:</span>
                      <span className="font-bold">{stage.nextMilestone}</span>
                    </span>
                  </div>
                </div>

                {/* What Client Contributes */}
                <div className="lg:col-span-4 p-4 md:p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-slate-500" />
                    Client Input &amp; Approvals
                  </span>
                  <ul className="space-y-2">
                    {stage.clientContributes.map((item, cIdx) => (
                      <li key={cIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What SoSparkDesigns Delivers */}
                <div className="lg:col-span-4 p-4 md:p-5 rounded-xl bg-blue-50/50 border border-blue-200/70 space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800 flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-blue-600" />
                    Verified Deliverables
                  </span>
                  <ul className="space-y-2">
                    {stage.agencyDelivers.map((item, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesProcess;
