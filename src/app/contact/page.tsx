'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { validateContactForm } from '@/lib/validations';

const SERVICES = [
  'Brand Identity',
  'Web & UI/UX Design',
  'Web Development (Next.js)',
  'Graphic Design',
  'Video & Motion',
  'Page Management',
];

const BUDGETS = ['<$1,500', '$1,500 - $3,000', '$3,000 - $6,000', '$6,000 - $12,000', '$12,000+'];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Brand Identity',
    budget: '$3,000 - $6,000',
    message: '',
    hp_website: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [error, setError] = useState('');

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
        service: 'Brand Identity',
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

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#f8fafc',
    border: '1.5px solid var(--cream-4)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: 'var(--ink)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <div style={{ position: 'relative' }}>
      <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)', paddingBottom: 'var(--sp-12)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            Initiate Collaboration
          </span>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--ink)' }}>
            Let&apos;s build something <span style={{ color: 'var(--blue)' }}>unforgettable.</span>
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--ink-3)', lineHeight: 1.6 }}>
            Tell us about your brand vision, requirements, and timeline. We review every inquiry and respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            {/* Direct Information */}
            <div>
              <div className="glass-strong" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--ink)', marginBottom: '1.5rem', fontWeight: 800 }}>
                  Direct Contact &amp; Studio
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'var(--blue-glass)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--blue)',
                      }}
                    >
                      <Mail size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.1em', fontWeight: 700 }}>
                        Email
                      </span>
                      <div style={{ color: 'var(--ink)', fontSize: '1rem', fontWeight: 600 }}>
                        hello@sosparkdesign.com
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'var(--blue-glass)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--blue)',
                      }}
                    >
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.1em', fontWeight: 700 }}>
                        Headquarters
                      </span>
                      <div style={{ color: 'var(--ink)', fontSize: '1rem', fontWeight: 600 }}>
                        Dhaka, Bangladesh (Serving Globally)
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'var(--blue-glass)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--blue)',
                      }}
                    >
                      <Clock size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.1em', fontWeight: 700 }}>
                        Response Time
                      </span>
                      <div style={{ color: 'var(--ink)', fontSize: '1rem', fontWeight: 600 }}>
                        Guaranteed within 24 business hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="glass-strong" style={{ padding: '2.5rem' }}>
              {success ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(37,99,235,0.12)',
                      border: '1.5px solid #2563eb',
                      color: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '0.75rem', fontWeight: 800 }}>
                    Inquiry Confirmed
                  </h3>
                  <p style={{ color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Thank you for reaching out. Your project inquiry has been verified and delivered to our team. We review every project and respond within 24–48 business hours.
                  </p>
                  {inquiryId && (
                    <div style={{ display: 'inline-block', padding: '6px 14px', borderRadius: '8px', background: '#f1f5f9', fontSize: '0.8rem', color: '#475569', marginBottom: '2rem', fontFamily: 'monospace' }}>
                      Inquiry ID: {inquiryId}
                    </div>
                  )}
                  <div>
                    <button onClick={() => setSuccess(false)} className="btn-ghost">
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.5rem', fontWeight: 800 }}>
                    Project Inquiry
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ink-3)', marginBottom: '1.5rem' }}>
                    Fill out the parameters below to initiate a collaboration.
                  </p>

                  {/* Honeypot field for bot mitigation */}
                  <input
                    type="text"
                    name="hp_website"
                    value={formData.hp_website}
                    onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ position: 'absolute', opacity: 0, height: 0, width: 0, zIndex: -1, pointerEvents: 'none' }}
                    aria-hidden="true"
                  />

                  {error && (
                    <div
                      style={{
                        padding: '10px 14px',
                        background: 'rgba(239,68,68,0.12)',
                        border: '1px solid #ef4444',
                        borderRadius: '10px',
                        color: '#b91c1c',
                        fontSize: '0.85rem',
                        marginBottom: '1.5rem',
                        fontWeight: 600,
                      }}
                      role="alert"
                    >
                      {error}
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label htmlFor="contact-name" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-2)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jane Doe"
                          style={{
                            ...inputStyle,
                            borderColor: fieldErrors.name ? '#ef4444' : undefined,
                          }}
                          aria-invalid={!!fieldErrors.name}
                        />
                        {fieldErrors.name && (
                          <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px', display: 'block' }}>
                            {fieldErrors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-email" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-2)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. jane@acmestudio.com"
                          style={{
                            ...inputStyle,
                            borderColor: fieldErrors.email ? '#ef4444' : undefined,
                          }}
                          aria-invalid={!!fieldErrors.email}
                        />
                        {fieldErrors.email && (
                          <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px', display: 'block' }}>
                            {fieldErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-company" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-2)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                        Company / Brand Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Studio"
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-2)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                        Primary Discipline Needed
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          ...inputStyle,
                          cursor: 'pointer',
                        }}
                      >
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-2)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                        Estimated Budget
                      </label>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {BUDGETS.map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            style={{
                              padding: '8px 14px',
                              borderRadius: '8px',
                              fontSize: '0.8rem',
                              fontFamily: 'var(--font-ui)',
                              fontWeight: 600,
                              background: formData.budget === b ? 'var(--blue)' : '#f8fafc',
                              color: formData.budget === b ? '#ffffff' : 'var(--ink-2)',
                              border: formData.budget === b ? '1.5px solid var(--blue)' : '1.5px solid var(--cream-4)',
                              transition: 'all 0.2s',
                              cursor: 'pointer',
                            }}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-2)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontWeight: 700 }}>
                        Project Details &amp; Vision *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand vision, requirements, desired timeline, or scope..."
                        style={{
                          ...inputStyle,
                          resize: 'vertical',
                          borderColor: fieldErrors.message ? '#ef4444' : undefined,
                        }}
                        aria-invalid={!!fieldErrors.message}
                      />
                      {fieldErrors.message && (
                        <span style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '4px', display: 'block' }}>
                          {fieldErrors.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary"
                      style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', cursor: loading ? 'not-allowed' : 'pointer' }}
                    >
                      {loading ? 'Submitting Inquiry...' : <><Send size={16} /> Submit Project Inquiry</>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
