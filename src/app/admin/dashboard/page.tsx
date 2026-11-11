'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Briefcase,
  Layers,
  Users,
  Star,
  HelpCircle,
  Zap,
  Mail,
  BarChart2,
  Settings,
  Shield,
  Key,
  LogOut,
  Plus,
  Trash2,
  CheckCircle,
  AlertCircle,
  Activity,
  Search,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState({ username: 'admin', role: 'super_admin' });
  const [token, setToken] = useState<string | null>(null);

  // Status & Data
  const [dbStatus, setDbStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Module state
  const [overviewStats, setOverviewStats] = useState<any>({});
  const [messages, setMessages] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [team, setTeam] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [offers, setOffers] = useState<any[]>([]);
  const [admins, setAdmins] = useState<any[]>([]);
  const [apiKeys, setApiKeys] = useState<any[]>([]);
  const [settingsList, setSettingsList] = useState<any[]>([]);

  // Simple modal state for adding new items
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newItemData, setNewItemData] = useState<any>({});

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  useEffect(() => {
    const savedToken = localStorage.getItem('sospark_admin_token');
    const savedUser = localStorage.getItem('sospark_admin_user');
    const savedRole = localStorage.getItem('sospark_admin_role');

    if (!savedToken) {
      router.push('/admin');
      return;
    }

    setToken(savedToken);
    if (savedUser) setUser({ username: savedUser, role: savedRole || 'editor' });

    // Check DB status
    fetch('/api/health')
      .then((r) => r.json())
      .then((d) => setDbStatus(d.db === 'connected' ? 'connected' : 'disconnected'))
      .catch(() => setDbStatus('disconnected'));

    // Load initial data
    loadAllData(savedToken);
  }, [router]);

  const loadAllData = async (t: string) => {
    const headers = { Authorization: `Bearer ${t}` };

    // Analytics
    fetch('/api/analytics', { headers })
      .then((r) => (r.ok ? r.json() : {}))
      .then((d) => setOverviewStats(d))
      .catch(() => {});

    // Messages
    fetch('/api/contact', { headers })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setMessages(d))
      .catch(() => {});

    // Portfolio
    fetch('/api/portfolio')
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setProjects(d))
      .catch(() => {});

    // Services
    fetch('/api/services')
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setServices(d))
      .catch(() => {});

    // Team
    fetch('/api/team')
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setTeam(d))
      .catch(() => {});

    // Testimonials
    fetch('/api/testimonials?all=true', { headers })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setTestimonials(d))
      .catch(() => {});

    // FAQ
    fetch('/api/faq')
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setFaqs(d))
      .catch(() => {});

    // Offers
    fetch('/api/offers')
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setOffers(d))
      .catch(() => {});

    // Admins (super_admin)
    fetch('/api/admins', { headers })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setAdmins(d))
      .catch(() => {});

    // API Keys (super_admin)
    fetch('/api/apikeys', { headers })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setApiKeys(d))
      .catch(() => {});

    // Settings
    fetch('/api/settings', { headers })
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setSettingsList(d))
      .catch(() => {});
  };

  const handleLogout = () => {
    localStorage.removeItem('sospark_admin_token');
    localStorage.removeItem('sospark_admin_user');
    localStorage.removeItem('sospark_admin_role');
    router.push('/admin');
  };

  const handleDeleteItem = async (endpoint: string, id: string, refreshFn: () => void) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    try {
      const res = await fetch(`${endpoint}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error('Deletion failed');
      showToast('Item deleted successfully');
      refreshFn();
    } catch (err: any) {
      showToast(err.message, 'error');
    }
  };

  const handleCreateItem = async (endpoint: string, data: any, refreshFn: () => void) => {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Creation failed');
      }
      showToast('Created successfully!');
      setIsAddModalOpen(false);
      setNewItemData({});
      refreshFn();
    } catch (err: any) {
      showToast(err.message, 'error');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard size={17} /> },
    { id: 'messages', label: 'Messages', icon: <Mail size={17} /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Briefcase size={17} /> },
    { id: 'services', label: 'Services', icon: <Layers size={17} /> },
    { id: 'team', label: 'Team', icon: <Users size={17} /> },
    { id: 'testimonials', label: 'Testimonials', icon: <Star size={17} /> },
    { id: 'faq', label: 'FAQ', icon: <HelpCircle size={17} /> },
    { id: 'offers', label: 'Offers', icon: <Zap size={17} /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={17} /> },
    { id: 'admins', label: 'Admins (RBAC)', icon: <Shield size={17} /> },
    { id: 'apikeys', label: 'API Keys', icon: <Key size={17} /> },
    { id: 'settings', label: 'Site Settings', icon: <Settings size={17} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - var(--nav-h))', background: '#0a0a0a' }}>
      {/* Toast Alert */}
      {toast && (
        <div
          style={{
            position: 'fixed',
            top: '84px',
            right: '24px',
            padding: '12px 20px',
            borderRadius: '12px',
            background: toast.type === 'success' ? 'rgba(34,197,94,0.95)' : 'rgba(239,68,68,0.95)',
            color: '#fff',
            fontSize: '0.875rem',
            fontWeight: 600,
            zIndex: 99999,
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
          }}
        >
          {toast.message}
        </div>
      )}

      {/* ── Sidebar ── */}
      <aside
        style={{
          width: '240px',
          background: '#0d0d0d',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
        }}
      >
        <div style={{ padding: '20px 18px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: dbStatus === 'connected' ? '#22c55e' : '#ef4444' }} />
            <span style={{ fontSize: '0.75rem', color: dbStatus === 'connected' ? '#22c55e' : '#f87171' }}>
              DB: {dbStatus}
            </span>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
            {user.username}
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--blue-light)', textTransform: 'uppercase' }}>
            {user.role}
          </div>
        </div>

        <nav style={{ padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: '2px', flex: 1, overflowY: 'auto' }}>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '9px 12px',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: isActive ? '#fff' : 'var(--ink-3)',
                  background: isActive ? 'var(--blue-glass)' : 'transparent',
                  border: isActive ? '1px solid rgba(37,99,235,0.3)' : '1px solid transparent',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                }}
              >
                <span style={{ color: isActive ? 'var(--blue-light)' : 'inherit' }}>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '8px',
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '8px',
              color: '#fca5a5',
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
          >
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </aside>

      {/* ── Main Panel ── */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        {/* Top title */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', color: '#fff', textTransform: 'capitalize' }}>
              {activeTab.replace('-', ' ')}
            </h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--ink-light)' }}>
              Manage system records and live site data
            </p>
          </div>

          {['portfolio', 'services', 'team', 'faq', 'offers'].includes(activeTab) && (
            <button
              onClick={() => {
                setNewItemData({});
                setIsAddModalOpen(true);
              }}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              <Plus size={15} /> Add New
            </button>
          )}
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              <div className="glass" style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-light)', textTransform: 'uppercase' }}>Total Inquiries</span>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>
                  {overviewStats.totalMessages ?? messages.length}
                </div>
              </div>

              <div className="glass" style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-light)', textTransform: 'uppercase' }}>Portfolio Projects</span>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>
                  {overviewStats.totalProjects ?? projects.length}
                </div>
              </div>

              <div className="glass" style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-light)', textTransform: 'uppercase' }}>Client Testimonials</span>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginTop: '4px' }}>
                  {overviewStats.totalReviews ?? testimonials.length}
                </div>
              </div>

              <div className="glass" style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-light)', textTransform: 'uppercase' }}>Page Views Logged</span>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--blue-light)', marginTop: '4px' }}>
                  {overviewStats.totalPageViews ?? 0}
                </div>
              </div>
            </div>

            <div className="glass-strong" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '1rem' }}>
                Recent Inquiries (Inbox)
              </h3>
              {messages.length === 0 ? (
                <div style={{ color: 'var(--ink-light)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  No messages submitted yet.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {messages.slice(0, 5).map((m) => (
                    <div
                      key={m._id}
                      style={{
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <strong style={{ color: '#fff', fontSize: '0.9rem' }}>{m.name}</strong> ({m.email})
                        <div style={{ fontSize: '0.8rem', color: 'var(--ink-3)', marginTop: '2px' }}>
                          Service: {m.service || 'N/A'} • Budget: {m.budget || 'N/A'}
                        </div>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: m.read ? '#22c55e' : '#f59e0b' }}>
                        {m.read ? 'Read' : 'New'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: MESSAGES */}
        {activeTab === 'messages' && (
          <div className="glass-strong" style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: 'var(--ink-light)' }}>
                  <th style={{ padding: '12px' }}>Name</th>
                  <th style={{ padding: '12px' }}>Email</th>
                  <th style={{ padding: '12px' }}>Service</th>
                  <th style={{ padding: '12px' }}>Message</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((m) => (
                  <tr key={m._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px', color: '#fff', fontWeight: 600 }}>{m.name}</td>
                    <td style={{ padding: '12px', color: 'var(--ink-3)' }}>{m.email}</td>
                    <td style={{ padding: '12px', color: 'var(--blue-light)' }}>{m.service}</td>
                    <td style={{ padding: '12px', color: 'var(--ink-2)', maxWidth: '300px' }}>{m.message}</td>
                    <td style={{ padding: '12px' }}>
                      <button
                        onClick={() => handleDeleteItem('/api/contact', m._id, () => loadAllData(token!))}
                        style={{ color: '#ef4444' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 3: PORTFOLIO */}
        {activeTab === 'portfolio' && (
          <div className="glass-strong" style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: 'var(--ink-light)' }}>
                  <th style={{ padding: '12px' }}>Title</th>
                  <th style={{ padding: '12px' }}>Category</th>
                  <th style={{ padding: '12px' }}>Client</th>
                  <th style={{ padding: '12px' }}>Year</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p) => (
                  <tr key={p._id || p.slug} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px', color: '#fff', fontWeight: 600 }}>{p.title}</td>
                    <td style={{ padding: '12px', color: 'var(--blue-light)' }}>{p.category}</td>
                    <td style={{ padding: '12px', color: 'var(--ink-3)' }}>{p.client}</td>
                    <td style={{ padding: '12px', color: 'var(--ink-3)' }}>{p.year}</td>
                    <td style={{ padding: '12px' }}>
                      {p._id && (
                        <button
                          onClick={() => handleDeleteItem('/api/portfolio', p._id, () => loadAllData(token!))}
                          style={{ color: '#ef4444' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 4: SERVICES */}
        {activeTab === 'services' && (
          <div className="glass-strong" style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: 'var(--ink-light)' }}>
                  <th style={{ padding: '12px' }}>Title</th>
                  <th style={{ padding: '12px' }}>Starting Price</th>
                  <th style={{ padding: '12px' }}>Short Description</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s._id || s.slug} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px', color: '#fff', fontWeight: 600 }}>{s.title}</td>
                    <td style={{ padding: '12px', color: 'var(--blue-light)' }}>{s.startingAt}</td>
                    <td style={{ padding: '12px', color: 'var(--ink-3)', maxWidth: '400px' }}>{s.shortDesc}</td>
                    <td style={{ padding: '12px' }}>
                      {s._id && (
                        <button
                          onClick={() => handleDeleteItem('/api/services', s._id, () => loadAllData(token!))}
                          style={{ color: '#ef4444' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 5: TESTIMONIALS */}
        {activeTab === 'testimonials' && (
          <div className="glass-strong" style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: 'var(--ink-light)' }}>
                  <th style={{ padding: '12px' }}>Client</th>
                  <th style={{ padding: '12px' }}>Company</th>
                  <th style={{ padding: '12px' }}>Rating</th>
                  <th style={{ padding: '12px' }}>Approved</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((t) => (
                  <tr key={t._id || t.name} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px', color: '#fff', fontWeight: 600 }}>{t.name}</td>
                    <td style={{ padding: '12px', color: 'var(--ink-3)' }}>{t.company}</td>
                    <td style={{ padding: '12px', color: 'var(--gold)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        {t.rating}
                        <Star size={13} fill="currentColor" />
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ color: t.approved ? '#22c55e' : '#f59e0b' }}>
                        {t.approved ? 'Live' : 'Pending'}
                      </span>
                    </td>
                    <td style={{ padding: '12px' }}>
                      {t._id && (
                        <button
                          onClick={() => handleDeleteItem('/api/testimonials', t._id, () => loadAllData(token!))}
                          style={{ color: '#ef4444' }}
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 6: ADMINS (RBAC) */}
        {activeTab === 'admins' && (
          <div className="glass-strong" style={{ padding: '1.5rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.15rem' }}>System Administrators</h3>
              <p style={{ color: 'var(--ink-light)', fontSize: '0.85rem' }}>
                Role hierarchy: super_admin (full access) • editor (content only) • support (messages) • viewer (read-only)
              </p>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: 'var(--ink-light)' }}>
                  <th style={{ padding: '12px' }}>Username</th>
                  <th style={{ padding: '12px' }}>Role</th>
                  <th style={{ padding: '12px' }}>Status</th>
                  <th style={{ padding: '12px' }}>Created</th>
                </tr>
              </thead>
              <tbody>
                {admins.map((a) => (
                  <tr key={a._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px', color: '#fff', fontWeight: 600 }}>{a.username}</td>
                    <td style={{ padding: '12px', color: 'var(--blue-light)' }}>{a.role}</td>
                    <td style={{ padding: '12px', color: a.active ? '#22c55e' : '#ef4444' }}>
                      {a.active ? 'Active' : 'Deactivated'}
                    </td>
                    <td style={{ padding: '12px', color: 'var(--ink-light)' }}>
                      {new Date(a.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 7: API KEYS */}
        {activeTab === 'apikeys' && (
          <div className="glass-strong" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '4px' }}>AI Key Pool</h3>
            <p style={{ color: 'var(--ink-light)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
              AES-256-GCM encrypted provider keys with automatic rotation and failover.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await handleCreateItem('/api/apikeys', newItemData, () => loadAllData(token!));
              }}
              style={{ marginBottom: '2rem', padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}
            >
              <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '10px' }}>Bulk Import API Keys</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 140px', gap: '10px' }}>
                <select
                  value={newItemData.provider || 'groq'}
                  onChange={(e) => setNewItemData({ ...newItemData, provider: e.target.value })}
                  style={{ background: '#111', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px' }}
                >
                  <option value="groq">Groq</option>
                  <option value="openai">OpenAI</option>
                  <option value="anthropic">Anthropic</option>
                  <option value="openrouter">OpenRouter</option>
                </select>
                <input
                  type="text"
                  placeholder="Paste keys separated by commas or newlines..."
                  value={newItemData.keys || ''}
                  onChange={(e) => setNewItemData({ ...newItemData, keys: e.target.value })}
                  style={{ background: '#111', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 12px' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '8px' }}>
                  Import Keys
                </button>
              </div>
            </form>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', textAlign: 'left', color: 'var(--ink-light)' }}>
                  <th style={{ padding: '12px' }}>Provider</th>
                  <th style={{ padding: '12px' }}>Masked Key</th>
                  <th style={{ padding: '12px' }}>Fails</th>
                  <th style={{ padding: '12px' }}>Active</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {apiKeys.map((k) => (
                  <tr key={k._id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px', color: '#fff', textTransform: 'uppercase', fontWeight: 600 }}>{k.provider}</td>
                    <td style={{ padding: '12px', color: 'var(--blue-light)' }}>••••••••{k.last4}</td>
                    <td style={{ padding: '12px', color: 'var(--ink-3)' }}>{k.failCount}</td>
                    <td style={{ padding: '12px', color: k.active ? '#22c55e' : '#ef4444' }}>
                      {k.active ? 'Active' : 'Disabled'}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <button
                        onClick={() => handleDeleteItem('/api/apikeys', k._id, () => loadAllData(token!))}
                        style={{ color: '#ef4444' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
