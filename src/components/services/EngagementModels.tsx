'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Handshake } from 'lucide-react';
import { ENGAGEMENT_MODELS } from '@/lib/services-data';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export function EngagementModels() {
  const getTierIcon = (id: string) => {
    switch (id) {
      case 'fixed-sprint':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'monthly-retainer':
        return <Zap className="w-6 h-6 text-blue-600" />;
      case 'venture-partner':
        return <Handshake className="w-6 h-6 text-blue-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section
      id="models"
      className="py-20 md:py-28 bg-white relative border-b border-slate-200/80 scroll-mt-20"
      aria-labelledby="engagement-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="engagement-heading"
          eyebrow="Commercial Frameworks"
          title={
            <>
              Transparent, flexible <br className="hidden sm:inline" />
              <span className="text-blue-600">partnership models.</span>
            </>
          }
          description="Whether you need a laser-focused single-feature sprint, ongoing dedicated creative engineering, or a strategic co-build partnership, we structure agreements with clear deliverables and zero hidden fees."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {ENGAGEMENT_MODELS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl border p-7 md:p-8 flex flex-col justify-between transition-all duration-200 ${
                tier.isPopular
                  ? 'bg-blue-50/40 border-blue-300 shadow-[0_12px_32px_rgba(0,105,234,0.08)] relative ring-2 ring-blue-600/20'
                  : 'bg-white border-slate-200/90 shadow-sm hover:border-slate-300'
              }`}
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                    {getTierIcon(tier.id)}
                  </div>
                  <span
                    className={`text-xs font-mono font-bold tracking-wider px-3 py-1 rounded-full ${
                      tier.isPopular
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                {/* Model Title & Price Line */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  {tier.name}
                </h3>
                <div className="mt-2 text-sm font-mono font-extrabold text-blue-600">
                  {tier.pricingModel}
                </div>
                <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                  {tier.description}
                </p>

                {/* Ideal For */}
                <div className="mt-5 p-3 rounded-xl bg-white border border-slate-200/80 text-xs">
                  <span className="font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Best Suited For:
                  </span>
                  <span className="text-slate-700 leading-snug">
                    {tier.idealFor}
                  </span>
                </div>

                {/* Deliverables List */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
                    Model Highlights:
                  </span>
                  <ul className="space-y-2">
                    {tier.deliverablesSummary.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button & Invoicing Terms */}
              <div className="pt-8 mt-6 border-t border-slate-200/80">
                <div className="text-[11px] font-mono text-slate-500 mb-3 text-center">
                  {tier.terms}
                </div>
                <Link
                  href={`/contact?model=${encodeURIComponent(tier.name)}`}
                  className="w-full block"
                >
                  <Button
                    size="md"
                    variant={tier.isPopular ? 'primary' : 'outline'}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full justify-center font-semibold"
                  >
                    Select {tier.name.split(' ')[0]}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngagementModels;
