'use client';

import React, { useState } from 'react';
import { Star, MessageSquarePlus, X, Check } from 'lucide-react';
import { DEFAULT_TESTIMONIALS } from '@/lib/seedData';

export default function ReviewsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    rating: 5,
    text: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.text) {
      setError('Please fill in your name, role, and feedback.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/testimonials/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Submission failed');

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setModalOpen(false);
        setFormData({ name: '', role: '', company: '', rating: 5, text: '' });
      }, 2500);
    } catch (err: any) {
      setError('Failed to submit review. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 2rem)', paddingBottom: 'var(--sp-12)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.25rem' }}>
            Client Stories
          </span>
          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, marginBottom: '1.25rem' }}>
            What founders and leaders say <br />
            <span style={{ color: 'var(--blue-light)' }}>about SoSpark Design.</span>
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--ink-3)', lineHeight: 1.6, marginBottom: '2rem' }}>
            Unedited reviews from founders, marketing vice presidents, and enterprise executives across the globe.
          </p>

          <button onClick={() => setModalOpen(true)} className="btn-primary">
            <MessageSquarePlus size={16} /> Submit Your Feedback
          </button>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {DEFAULT_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="glass-strong"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '3px', color: 'var(--gold)', marginBottom: '1.25rem' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', color: 'var(--ink-2)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'var(--blue-glass)',
                      border: '1px solid rgba(37,99,235,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--blue-light)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{t.name}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--ink-light)' }}>
                      {t.role} • {t.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Submit Review Modal ── */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="glass-strong"
            style={{
              width: '100%',
              maxWidth: '520px',
              padding: '2.5rem',
              position: 'relative',
              background: 'rgba(16, 16, 16, 0.98)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--ink-light)' }}
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(34,197,94,0.15)',
                    border: '1px solid #22c55e',
                    color: '#22c55e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                  }}
                >
                  <Check size={30} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>
                  Thank You!
                </h3>
                <p style={{ color: 'var(--ink-3)', fontSize: '0.9rem' }}>
                  Your testimonial has been submitted for review.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
                  Share Your Experience
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--ink-3)', marginBottom: '1.5rem' }}>
                  We appreciate your honest feedback on our collaboration.
                </p>

                {error && (
                  <div style={{ padding: '8px 12px', background: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444', borderRadius: '8px', color: '#f87171', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    {error}
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--glass-border-2)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        color: '#fff',
                        fontSize: '0.9rem',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                        Role *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Founder"
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--glass-border-2)',
                          borderRadius: '10px',
                          padding: '10px 14px',
                          color: '#fff',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        style={{
                          width: '100%',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--glass-border-2)',
                          borderRadius: '10px',
                          padding: '10px 14px',
                          color: '#fff',
                          fontSize: '0.9rem',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                      Rating
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setFormData({ ...formData, rating: star })}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            background: formData.rating >= star ? 'rgba(232,184,75,0.15)' : 'rgba(255,255,255,0.05)',
                            color: formData.rating >= star ? 'var(--gold)' : 'var(--ink-light)',
                            border: '1px solid rgba(255,255,255,0.1)',
                          }}
                        >
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                            {star}
                            <Star size={12} fill={formData.rating >= star ? 'currentColor' : 'none'} />
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                      Review Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                      placeholder="Describe the impact SoSpark Design had on your business..."
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--glass-border-2)',
                        borderRadius: '10px',
                        padding: '10px 14px',
                        color: '#fff',
                        fontSize: '0.9rem',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: '0.5rem' }}>
                    {loading ? 'Submitting...' : 'Submit Review'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
