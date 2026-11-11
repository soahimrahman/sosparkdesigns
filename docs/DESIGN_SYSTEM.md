# Design System Specification — SoSparkDesigns (2026–2027)

## 1. Visual Philosophy & Identity Principles
- **Core Aesthetic**: Editorial precision, clean architectural typography, purposeful whitespace, and restrained royal blue accents.
- **Brand Blue**: Royal Electric Blue (`#2563EB`) is the sole primary accent.
- **Strict Brand Rule**: **Never introduce green or neon lime.** All previous neon-lime artifacts from third-party templates are purged.
- **Antislop Design Guardrails**:
  - Max 2–3 core colors plus 1 primary accent.
  - No continuous blue-purple gradient washes.
  - No gratuitous glassmorphism on every container; reserve subtle backdrops exclusively for floating overlays (e.g. navbar).
  - Consistent border radii (`8px` small, `12px` default, `16px` large, `999px` pills).
  - High-contrast readability meeting WCAG 2.1 AA standards.

---

## 2. Color Palette & Semantic Tokens

### Brand Blue Hierarchy
| Token | Hex | Role | Contrast vs White |
|---|---|---|---|
| `brand-600` (Primary) | `#2563eb` | Primary buttons, active tabs, key highlights | 4.6:1 (AA Compliant) |
| `brand-700` (Deep Blue) | `#1d4ed8` | Button hover, active link state | 6.8:1 (AAA Compliant) |
| `brand-800` (Navy) | `#1e40af` | Dark container accents, deep gradients | 9.4:1 |
| `brand-50` (Subtle Tint) | `#eff6ff` | Badge backgrounds, highlighted surface fills | — |
| `brand-100` (Light Border) | `#dbeafe` | Highlighted borders and selected card outlines | — |

### Neutral & Obsidian Canvas
| Token | Hex | Role |
|---|---|---|
| `obsidian-black` | `#09090b` | High-impact headings, dark card fills |
| `slate-900` | `#0f172a` | Primary body headings, dark backgrounds |
| `slate-700` | `#334155` | Secondary text, subheadings |
| `slate-500` | `#64748b` | Muted labels, metadata, captions |
| `slate-200` | `#e2e8f0` | Standard hairline dividers, card borders |
| `slate-50` | `#f8fafc` | Subtle section backgrounds, alternate rows |
| `white` | `#ffffff` | Primary canvas, card surfaces |

---

## 3. Typography Scale
Typography is served via Google Fonts (`Plus Jakarta Sans` for display/headings, `Inter` for body and UI controls).

| Level | Size (Desktop / Mobile) | Weight | Line Height | Usage |
|---|---|---|---|---|
| **Display / H1** | `3.5rem` (56px) / `2.25rem` (36px) | 800 | 1.1 | Homepage Hero Headline |
| **Section / H2** | `2.25rem` (36px) / `1.75rem` (28px) | 700 | 1.2 | Major Section Headings |
| **Subsection / H3** | `1.5rem` (24px) / `1.25rem` (20px) | 600 | 1.3 | Card Titles, Venture Names |
| **Lead / Subtitle** | `1.125rem` (18px) / `1rem` (16px) | 400 | 1.6 | Introductory descriptions |
| **Body** | `1rem` (16px) / `0.9375rem` (15px) | 400 / 500 | 1.5 | Standard copy, list items |
| **Small / Eyebrow** | `0.75rem` (12px) / `0.75rem` (12px) | 700 | 1.4 | Category chips, tags, uppercase labels |

---

## 4. Spacing & Layout Architecture
- **Grid System**: 4px base increment (`0.25rem`, `0.5rem`, `0.75rem`, `1rem`, `1.5rem`, `2rem`, `3rem`, `4rem`, `5rem`).
- **Container Max Width**: `1280px` (`max-w-7xl`) for standard layouts; `780px` (`max-w-3xl`) for editorial content.
- **Section Padding**: `clamp(4rem, 8vw, 6.5rem)` vertical spacing between sections to eliminate visual crowding.
- **Responsive Breakpoints**:
  - `sm`: 640px (large phone / small tablet)
  - `md`: 768px (tablet portrait)
  - `lg`: 1024px (laptop / desktop)
  - `xl`: 1280px (wide desktop)

---

## 5. Component Standards

### Buttons (`Button.tsx`)
- **Primary**: Solid Royal Blue (`bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all`).
- **Secondary**: Light Slate Surface (`bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium px-5 py-2.5 rounded-xl transition-all`).
- **Ghost / Outline**: Subtle hairline border (`border border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl px-5 py-2.5`).
- **Accessibility**: Explicit `:focus-visible` ring (`ring-2 ring-blue-600 ring-offset-2`). Touch target minimum 44px on mobile devices.

### Cards & Surfaces
- Clean white card with `1px solid rgba(0, 0, 0, 0.08)` border.
- Elevation: Subtle shadow `0 4px 14px rgba(0, 0, 0, 0.04)`.
- Hover transition: Subtle translate-y (`-2px`) and border tint (`border-blue-200`).

### Form Controls
- Explicit HTML `<label>` elements connected via `htmlFor`.
- High contrast placeholder text (`placeholder:text-slate-400`).
- Dedicated validation error text with red accent (`text-red-600`) and ARIA live feedback.

---

## 6. Motion & Animation Principles
1. **Purpose-Driven**: Motion is used solely for visual hierarchy, page transitions, and immediate interaction feedback.
2. **Performance First**: Animate only `transform` and `opacity` properties to prevent CPU reflows.
3. **Accessibility**: All animations respect `@media (prefers-reduced-motion: reduce)`. When reduced motion is requested, all transitions are instant or dissolved without spatial movement.
