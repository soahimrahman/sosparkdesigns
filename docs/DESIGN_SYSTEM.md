# Design System Specification — SoSparkDesigns (2026–2027)

## 1. Visual Philosophy & Identity Principles
- **Core Aesthetic**: Luminous SoSpark — Bright, airy, editorial precision, clean architectural typography, generous whitespace, and official electric blue accents.
- **Official Brand Blue**: Sampled directly from the official logo: **`#0069EA`** (RGB: 0, 105, 234).
- **Absolute Rule — LIGHT THEME ONLY**:
  - **No dark mode.**
  - **No theme switcher.**
  - **No dark-background hero.**
  - **No black-background footer.**
  - **No dark full-screen sections.**
  - Primarily pure white (`#FFFFFF`) and very light surfaces (`#F8FAFC`, `#EFF6FF`).
  - High-contrast black typography (`#000000`, `#09090B`) with brand-blue emphasis.
- **Strict Brand Rule**: **Never introduce green, neon lime, or purple.** All prior foreign template tokens are completely superseded.
- **Antislop Design Guardrails**:
  - Max 2–3 core colors plus 1 primary accent (`#0069EA`).
  - No continuous blue-purple gradient washes.
  - Consistent border radii (`8px` small, `12px` default, `16px` large, `999px` pills).
  - High-contrast readability meeting WCAG 2.1 AA and AAA standards.

---

## 2. Color Palette & Semantic Tokens

### Core Luminous Palette
| Token | Hex | Role | Contrast vs White |
|---|---|---|---|
| `brand-blue` (Primary) | `#0069ea` | Official logo blue: primary buttons, keyword pills, focus accents | 4.6:1 (AA Compliant) |
| `brand-dark` (Deep Blue) | `#0052c2` | Button hover, active link state | 6.2:1 (AAA Compliant) |
| `brand-navy` | `#003885` | Deep text accents, high-contrast borders | 9.8:1 |
| `brand-50` (Subtle Tint) | `#eff6ff` | Badge backgrounds, highlighted surface fills, row hover wash | — |
| `brand-100` (Light Border) | `#dbeafe` | Highlighted borders, divider lines, and card outlines | — |

### High-Contrast Neutral & Canvas System (Light Theme Only)
| Token | Hex | Role |
|---|---|---|
| `black` | `#000000` | High-impact headlines, authoritative text |
| `obsidian` | `#09090b` | Standard headings, card titles |
| `slate-800` | `#1e293b` | Primary body text |
| `slate-600` | `#475569` | Secondary descriptive text, subtitles |
| `slate-400` | `#94a3b8` | Muted labels, metadata, captions |
| `slate-200` | `#e2e8f0` | Standard hairline dividers, card borders |
| `slate-50` | `#f8fafc` | Subtle alternating row fills, pill backgrounds |
| `white` | `#ffffff` | Primary canvas, card surfaces, navigation background |

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
