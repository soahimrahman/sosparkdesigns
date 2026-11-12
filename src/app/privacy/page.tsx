import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft, Mail } from 'lucide-react';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Privacy Policy — SoSpark Design',
  description:
    'Our commitment to data privacy, confidentiality, and secure inquiry handling for clients and visitors.',
  alternates: {
    canonical: 'https://sosparkdesigns.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Breadcrumb ── */}
      <div className="pt-28 pb-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <section className="pt-4 pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <Badge variant="brand" dot className="mb-4">
              Legal &amp; Data Protection
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs font-mono text-slate-400">
              Effective Date: November 12, 2026 &bull; Directed by Soahim Rahman Tasin
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 text-xs sm:text-sm text-slate-700 space-y-2">
              <span className="font-bold text-blue-900 flex items-center gap-1.5 font-mono uppercase tracking-wider text-xs">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Executive Privacy Summary
              </span>
              <p>
                SoSparkDesigns does not sell, rent, or monetize your personal or company information. Data collected
                via our contact form is used strictly to evaluate your project scope and communicate directly regarding
                your collaboration.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                1. Information We Collect
              </h2>
              <p>
                When you initiate a project inquiry via our contact form, we collect the following information:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs sm:text-sm">
                <li>Your name and business email address</li>
                <li>Company or organization name (optional)</li>
                <li>Selected creative discipline and estimated budget tier</li>
                <li>Project overview, requirements, and communication notes</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                2. How We Use Your Data
              </h2>
              <p>
                Information provided to SoSparkDesigns is utilized exclusively for:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 text-xs sm:text-sm">
                <li>Evaluating project requirements and generating formal commercial proposals</li>
                <li>Direct asynchronous communication regarding your engagement</li>
                <li>Preventing malicious bot submissions via automated honeypot filters</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                3. Security &amp; Data Confidentiality
              </h2>
              <p>
                We enforce production-grade security standards across all data stores. Submissions are encrypted in transit
                using TLS 1.3 and stored in encrypted database clusters on MongoDB Atlas. Access is restricted to studio
                leadership under multi-factor authentication.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                4. Third-Party Sharing &amp; Disclosures
              </h2>
              <p>
                We do not share your data with advertisers, data brokers, or marketing syndicates. We do not use client
                submissions to train third-party public AI models without explicit written permission.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                5. Your Data Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your contact data at any time by contacting our
                administrative office at{' '}
                <a href="mailto:soahimrahman2024@gmail.com" className="text-blue-600 font-semibold hover:underline">
                  soahimrahman2024@gmail.com
                </a>
                .
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 font-mono">
              Direct inquiries: soahimrahman2024@gmail.com &bull; SoSparkDesigns &bull; Dhaka, Bangladesh
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
