'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { validateContactForm } from '@/lib/validations';
import { OFFICIAL_SERVICES, resolveServiceFromQuery } from '@/lib/service-mapping';
import Button from '@/components/ui/Button';

const BUDGET_TIERS = [
  '<$1,500',
  '$1,500 - $3,000',
  '$3,000 - $6,000',
  '$6,000 - $12,000',
  '$12,000+',
  'Flexible / Not Sure',
];

export function ContactFormExperience() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: OFFICIAL_SERVICES[0] as string,
    budget: '$3,000 - $6,000',
    message: '',
    hp_website: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [error, setError] = useState('');

  // Handle URL query parameter pre-selection (?service=... or ?model=...)
  useEffect(() => {
    const rawService = searchParams.get('service');
    const rawModel = searchParams.get('model');
    const rawCaseStudy = searchParams.get('caseStudy');

    if (rawService) {
      const resolved = resolveServiceFromQuery(rawService);
      setFormData((prev) => ({ ...prev, service: resolved }));
    } else if (rawCaseStudy) {
      if (rawCaseStudy.toLowerCase().includes('sparkforge')) {
        setFormData((prev) => ({
          ...prev,
          service: 'Full-Stack Web Development',
          message: 'Inquiring regarding deliverability infrastructure similar to SparkForge.',
        }));
      } else if (rawCaseStudy.toLowerCase().includes('subz')) {
        setFormData((prev) => ({
          ...prev,
          service: 'Full-Stack Web Development',
          message: 'Inquiring regarding creator digital commerce similar to Subz Empire.',
        }));
      }
    } else if (rawModel) {
      setFormData((prev) => ({
        ...prev,
        service: 'Other / Custom Partnership',
        message: `Inquiring regarding partnership model: ${rawModel}.`,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setFieldErrors({});

    // Client-side Zod validation
    const validation = validateContactForm(formData);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      for (const issue of validation.error.issues) {
        const field = issue.path[0] ? String(issue.path[0]) : 'general';
        if (!errors[field]) errors[field] = issue.message;
      }
      setFieldErrors(errors);
      setError('Please review the highlighted fields below.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.fields) setFieldErrors(data.fields);
        throw new Error(data.error || 'Submission failed');
      }

      setSuccess(true);
      if (data.id) setInquiryId(data.id);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: OFFICIAL_SERVICES[0],
        budget: '$3,000 - $6,000',
        message: '',
        hp_website: '',
      });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/90 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all shadow-sm';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* ── Left Column: Direct Studio Contact Card ── */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Direct Studio Inquiries
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Every inquiry is routed directly to studio leadership. We review your requirements and provide an initial
            scope assessment within 24–48 business hours.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Official Administrative Email
                </span>
                <span className="text-sm font-mono font-bold text-slate-900">
                  soahimrahman2024@gmail.com
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Studio Location
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  Dhaka, Bangladesh &bull; Serving Globally
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Proposal Turnaround
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  24–48 business hours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Reassurance Box */}
        <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-2.5">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-800 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Client Commitments
          </span>
          <ul className="space-y-1.5 text-xs text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Direct communication with Founder Soahim Rahman Tasin</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>100% intellectual property &amp; source code ownership</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Milestone-based agreements with fixed transparent scopes</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Right Column: Interactive Inquiry Form ── */}
      <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-7 sm:p-10 shadow-sm">
        {success ? (
          <div className="text-center py-10 px-4 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Inquiry Confirmed
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. Your project inquiry has been verified and stored securely. We will review your
              parameters and respond within 24–48 business hours.
            </p>
            {inquiryId && (
              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs border border-slate-200">
                Reference ID: <span className="font-bold text-slate-900">{inquiryId}</span>
              </div>
            )}
            <div className="pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSuccess(false)}
                className="font-semibold"
              >
                Submit Another Inquiry
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Project Parameters
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the details below to initiate a structured consultation.
              </p>
            </div>

            {/* Spam Honeypot Field */}
            <input
              type="text"
              name="hp_website"
              value={formData.hp_website}
              onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
              className="absolute opacity-0 h-0 w-0 -z-10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Error Banner */}
            {error && (
              <div
                className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold"
                role="alert"
              >
                {error}
              </div>
            )}

            <div className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: '' });
                    }}
                    placeholder="e.g. Alex Mercer"
                    className={`${inputClass} ${fieldErrors.name ? 'border-rose-500 ring-1 ring-rose-500' : ''}`}
                    aria-invalid={!!fieldErrors.name}
                  />
                  {fieldErrors.name && (
                    <span className="text-[11px] text-rose-600 font-semibold mt-1 block">
                      {fieldErrors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: '' });
                    }}
                    placeholder="e.g. alex@company.com"
                    className={`${inputClass} ${fieldErrors.email ? 'border-rose-500 ring-1 ring-rose-500' : ''}`}
                    aria-invalid={!!fieldErrors.email}
                  />
                  {fieldErrors.email && (
                    <span className="text-[11px] text-rose-600 font-semibold mt-1 block">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Company Field */}
              <div>
                <label
                  htmlFor="contact-company"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Company / Organization <span className="text-slate-400 font-normal font-sans">(Optional)</span>
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Acme Tech Labs"
                  className={inputClass}
                />
              </div>

              {/* Service Selection Dropdown (Synchronized with Official Disciplines) */}
              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Primary Discipline Needed <span className="text-rose-500">*</span>
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`${inputClass} cursor-pointer`}
                >
                  {OFFICIAL_SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Tiers */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Estimated Investment Range
                </label>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_TIERS.map((tier) => {
                    const isSelected = formData.budget === tier;
                    return (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setFormData({ ...formData, budget: tier })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-slate-50 text-slate-700 border border-slate-200/90 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        {tier}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                >
                  Project Vision &amp; Requirements <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: '' });
                  }}
                  placeholder="Describe your project goals, desired deliverable scope, target audience, or timelines..."
                  className={`${inputClass} resize-y ${fieldErrors.message ? 'border-rose-500 ring-1 ring-rose-500' : ''}`}
                  aria-invalid={!!fieldErrors.message}
                />
                {fieldErrors.message && (
                  <span className="text-[11px] text-rose-600 font-semibold mt-1 block">
                    {fieldErrors.message}
                  </span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              variant="primary"
              disabled={loading}
              rightIcon={<Send className="w-4 h-4" />}
              className="w-full justify-center font-semibold shadow-md shadow-blue-600/20"
            >
              {loading ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactFormExperience;
