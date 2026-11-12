'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Layers, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export function AboutVenturesEcosystem() {
  const ventures = [
    {
      title: 'SparkForge Engine',
      category: 'Email Deliverability Infrastructure',
      badge: 'Flagship Platform',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      desc: 'High-throughput verification engine protecting sender reputation with strict RFC 5321 syntax validation, live DNS MX socket telemetry, and automated honeypot bot trap defense.',
      externalUrl: 'https://sparkfroge.pro.bd',
      caseStudyUrl: '/portfolio/sparkforge',
      specs: ['RFC 5321/5322 Syntax', 'Direct DNS MX Telemetry', 'Next.js 14 App Router'],
    },
    {
      title: 'Subz Empire Marketplace',
      category: 'Creator Subscriptions & Licensing',
      badge: 'Ecosystem Platform',
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      desc: 'Digital software licensing, subscription management, and premium creative assets platform built to streamline transactions and automated license delivery for creators and agencies.',
      externalUrl: 'https://subzempire.com',
      caseStudyUrl: '/portfolio/subz-empire',
      specs: ['Automated Webhook Delivery', 'Frictionless Checkout', 'Multi-Tier Licensing'],
    },
  ];

  return (
    <section
      id="ventures-ecosystem"
      className="py-20 md:py-28 bg-white relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="ventures-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="ventures-heading"
          eyebrow="Proprietary Products"
          title={
            <>
              More than an agency: <br className="hidden sm:inline" />
              <span className="text-blue-600">an active digital venture lab.</span>
            </>
          }
          description="We do not just advise clients on digital products—we engineer, launch, and operate our own software platforms. This real-world operational experience informs everything we build."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ventures.map((v) => (
            <div
              key={v.title}
              className="bg-slate-50/70 rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                    {v.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 border border-blue-200/80 px-2.5 py-0.5 rounded-full">
                    {v.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    {v.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {v.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {v.desc}
                </p>

                {/* Specs */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {v.specs.map((spec) => (
                    <span
                      key={spec}
                      className="px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono font-semibold text-slate-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-6 mt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={v.caseStudyUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={v.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-500 hover:text-blue-600"
                >
                  <span>Visit Platform</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutVenturesEcosystem;
