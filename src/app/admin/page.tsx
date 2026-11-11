'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFillDefaults = () => {
    setUsername('admin');
    setPassword('soaspark2024');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Invalid credentials');
      }

      // Save token and info
      localStorage.setItem('sospark_admin_token', data.token);
      localStorage.setItem('sospark_admin_user', data.username);
      localStorage.setItem('sospark_admin_role', data.role);

      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
      }}
    >
      <div
        className="glass-strong"
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '2.5rem',
          borderRadius: '24px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--blue-glass)',
              border: '1px solid rgba(37,99,235,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              color: 'var(--blue-light)',
            }}
          >
            <Lock size={22} />
          </div>
          <h1 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '4px' }}>
            Admin Portal
          </h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-light)' }}>
            SoSpark Design Content & Operations System
          </p>
        </div>

        {/* Default credentials notice */}
        <div
          style={{
            background: 'rgba(37,99,235,0.08)',
            border: '1px solid rgba(37,99,235,0.2)',
            borderRadius: '12px',
            padding: '12px 16px',
            marginBottom: '1.5rem',
            fontSize: '0.8rem',
            color: 'var(--ink-2)',
            lineHeight: 1.5,
          }}
        >
          <div style={{ fontWeight: 600, color: '#fff', marginBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Default Master Admin:</span>
            <button
              type="button"
              onClick={handleFillDefaults}
              style={{
                color: 'var(--blue-light)',
                fontSize: '0.75rem',
                textDecoration: 'underline',
              }}
            >
              Autofill credentials
            </button>
          </div>
          <div>User: <code style={{ color: 'var(--blue-light)' }}>admin</code></div>
          <div>Pass: <code style={{ color: 'var(--blue-light)' }}>soaspark2024</code></div>
        </div>

        {error && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 14px',
              background: 'rgba(239,68,68,0.12)',
              border: '1px solid #ef4444',
              borderRadius: '10px',
              color: '#fca5a5',
              fontSize: '0.85rem',
              marginBottom: '1.25rem',
            }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border-2)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--ink-light)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border-2)',
                borderRadius: '12px',
                padding: '12px 16px',
                color: '#fff',
                fontSize: '0.95rem',
                outline: 'none',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', padding: '12px', marginTop: '0.5rem' }}
          >
            {loading ? 'Authenticating...' : <><ArrowRight size={16} /> Sign In to Dashboard</>}
          </button>
        </form>
      </div>
    </div>
  );
}
