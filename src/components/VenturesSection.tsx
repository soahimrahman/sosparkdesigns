import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Layers, ExternalLink, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export interface VentureItem {
  id: string;
  name: string;
  badge: string;
  category: string;
  headline: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  highlights: string[];
}

export const VENTURES: VentureItem[] = [
  {
    id: 'sparkforge',
    name: 'SparkForge',
    badge: 'Flagship Platform',
    category: 'Email Verification & Deliverability',
    headline: 'High-throughput verification engine protecting sender reputation',
    description:
      'Engineered to clean marketing and transactional lists with RFC-compliant syntax checking, live DNS MX lookup, disposable domain detection, and SMTP handshake telemetry without message delivery.',
    url: 'https://sparkfroge.pro.bd',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    highlights: [
      'RFC 5321/5322 syntax validation',
      'Direct MX records & DNS handshake',
      'Disposable & catch-all domain detection',
      'High-speed batch processing API',
    ],
  },
  {
    id: 'subz-empire',
    name: 'Subz Empire',
    badge: 'Digital Ecosystem',
    category: 'Digital Assets & Subscriptions',
    headline: 'All-in-one digital marketplace and subscription gateway',
    description:
      'Curated digital software licensing, subscription management, and premium creative assets platform built to streamline transactions and service access for digital creators and businesses.',
    url: 'https://subzempire.com',
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    highlights: [
      'Instant digital license delivery',
      'Verified software subscriptions',
      'Multi-currency checkout support',
      'Dedicated direct support channels',
    ],
  },
];

export function VenturesSection() {
  return (
    <section
      id="ventures"
      className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-200/80 relative"
      aria-labelledby="ventures-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <Badge variant="brand" dot className="mb-3.5">
            Parent Company Ecosystem
          </Badge>
          <h2
            id="ventures-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Our Digital Brands & <span className="text-blue-600">Ventures</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Beyond client agency services, SoSparkDesigns builds, scales, and operates proprietary
            digital platforms that solve high-friction operational challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {VENTURES.map((venture) => (
            <Card
              key={venture.id}
              className="flex flex-col justify-between hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      {venture.icon}
                    </div>
                    <Badge variant="brand">{venture.badge}</Badge>
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                    {venture.category}
                  </div>
                  <CardTitle className="text-2xl">{venture.name}</CardTitle>
                  <CardDescription className="text-base text-slate-800 font-medium mt-2">
                    {venture.headline}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {venture.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Key Capabilities:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {venture.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </div>

              <CardFooter>
                <span className="text-xs text-slate-500 font-medium">
                  Direct venture platform
                </span>
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline py-2"
                  aria-label={`Visit ${venture.name} website`}
                >
                  <span>Explore {venture.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VenturesSection;
