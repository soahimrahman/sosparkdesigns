# Homepage Motion Storyboard — SoSparkDesigns (2026–2027)

## 1. Motion Principles & Token System

All animations follow centralized motion tokens to maintain cadence, predictability, and performance:

- **Eases**:
  - `--ease-out`: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration)
  - `--ease-spring`: `cubic-bezier(0.34, 1.56, 0.64, 1)` (tactile overshoot)
  - `--ease-standard`: `cubic-bezier(0.2, 0, 0, 1)` (linear deceleration)
- **Durations**:
  - `--dur-micro`: `150ms` (button active, hover highlights, pips)
  - `--dur-quick`: `250ms` (tab switches, chip fades, menu drawer)
  - `--dur-standard`: `400ms` (card reveals, section fades)
  - `--dur-cinematic`: `700ms` (hero entrance, fanned card layout)
- **Hardware Acceleration**: Only `transform` and `opacity` are animated. `will-change` is applied conditionally during active transitions.

---

## 2. Section-by-Section Motion Storyboard

### Section A: Floating Navigation Header
- **Initial Visual State**: `opacity: 0`, `translateY(-16px)`.
- **Entrance Sequence**: Fires on page load after 100ms delay. Smoothly settles into place via `--ease-out` over 350ms.
- **Motion Trigger**: Page mount / initial render.
- **Animation Behavior**:
  - Scrolled state: When `window.scrollY > 20px`, header scales down slightly (`scale(0.98)`), background blur increases (`backdrop-filter: blur(16px)`), and a subtle border shadow activates.
- **Exit / Transition**: Stays pinned. Mobile menu expands from top/right with staggered link reveals.
- **Mobile Behavior**: Hamburger drawer slides in over 250ms; items stagger with 40ms delays. Escape key or backdrop click triggers instant reverse dismiss.
- **Reduced-Motion Behavior**: Instant appearance (`opacity: 1`, `translateY(0)`), no spatial movement.

---

### Section B: Signature Hero & Kinetic Headline Ticker
- **Initial Visual State**:
  - Eyebrow Badge: `opacity: 0`, `scale(0.95)`.
  - Static Headline: `opacity: 0`, `translateY(24px)`.
  - Kinetic Keyword Pill: `opacity: 0`, `scale(0.9)`.
  - Subtitle: `opacity: 0`, `translateY(16px)`.
  - CTAs: `opacity: 0`, `translateY(12px)`.
  - Fanned Artwork Deck: Cards stacked in center at $0^\circ$ tilt, `scale(0.9)`, `opacity: 0`.
- **Entrance Sequence (Staggered Choreography)**:
  1. $t = 0\text{ms}$: Navigation enters.
  2. $t = 150\text{ms}$: Eyebrow badge fades and scales in.
  3. $t = 250\text{ms}$: Static headline unmasks: *"We imagine. We design. We build."*
  4. $t = 350\text{ms}$: Kinetic keyword pill flips into view in vibrant `#0069EA`.
  5. $t = 450\text{ms}$: Subtitle fades in.
  6. $t = 550\text{ms}$: Action CTAs settle in.
  7. $t = 650\text{ms}$: Fanned artwork cards splay outward along their parabolic arc ($-12^\circ$ to $+12^\circ$).
- **Motion Trigger**: Page load.
- **Continuous Kinetic Animation**:
  - **Inline Keyword Ticker**: Every 3.5 seconds, the highlighted keyword smoothly translates up and fades out (`translateY(-20px)`, `opacity: 0`), and the next phrase slides in from below (`translateY(20px)` $\rightarrow$ `translateY(0)`):
    `[ Brand Systems ]` $\rightarrow$ `[ Next.js Platforms ]` $\rightarrow$ `[ Digital Ventures ]` $\rightarrow$ `[ Enduring Experiences ]`.
- **Artwork Deck Hover Interaction**:
  - Hovering a card translates it `translateY(-24px)`, resets its rotation to $0^\circ$, scales it to `scale(1.06)`, and boosts its elevation shadow. Sibling cards gently shift $\pm 12\text{px}$ to provide clearance.
- **Mobile Behavior (<768px)**:
  - Headline font size fluidly scales down via `clamp(1.85rem, 7vw, 3.5rem)` so text breaks into balanced lines.
  - The fanned deck transitions into an accessible horizontal swipe carousel or compact stacked layout.
- **Reduced-Motion Behavior**:
  - All elements render at full opacity instantly. The keyword changes with a gentle opacity dissolve without vertical movement.

---

### Section C: Agency Introduction (Editorial Layout)
- **Initial Visual State**: `opacity: 0`, `translateY(32px)`.
- **Entrance Sequence**: Uses an Intersection Observer with `threshold: 0.15`.
- **Motion Trigger**: Element enters viewport during scroll.
- **Animation Behavior**:
  - Header text and quote unmask with a smooth upward slide.
  - The 3 editorial pillars (*01. Identity That Endures*, *02. Next.js Engineering*, *03. Operational Reality*) stagger with 100ms intervals.
- **Mobile Behavior**: Single-column vertical flow; cards reveal progressively as scrolled into view.
- **Reduced-Motion Behavior**: Instant opacity transition on intersection without vertical translation.

---

### Section D: Services (Horizontal Numbered Rows)
- **Initial Visual State**: 6 horizontal rows with hairline dividers, `opacity: 0`, `translateX(-16px)`.
- **Entrance Sequence**: Triggered on scroll. Rows fade in sequentially from top to bottom with an 80ms stagger.
- **Motion Trigger**: Scroll position reaching `services` section.
- **Hover / Focus Behavior**:
  - Background tints to subtle blue surface (`#EFF6FF` / 60% opacity).
  - Large numerical index (`01`, `02`, etc.) transitions to `#0069EA`.
  - Circular action button (`w-12 h-12 rounded-full`) translates rightwards (`translateX(6px)`) with spring ease.
- **Mobile Behavior**: The 3-zone layout reflows into a compact 2-tier card: Number + Title on top, description and deliverables in middle, and circular button at bottom right.
- **Reduced-Motion Behavior**: Hover states trigger instant color shifts without translation.

---

### Section E: Featured Work (Authentic Built Platforms)
- **Initial Visual State**: 3 large platform cards, `opacity: 0`, `translateY(40px)`.
- **Entrance Sequence**: Cards reveal with subtle spatial elevation as they cross the 20% scroll viewport mark.
- **Motion Trigger**: Scroll intersection.
- **Hover / Interactive Behavior**:
  - Hover triggers subtle 3D perspective tilt ($\pm 3^\circ$) tracking pointer coordinates.
  - External link icon smoothly shifts `translate(3px, -3px)` to indicate outbound navigation.
- **Mobile Behavior**: Cards render flat with standard shadow; 3D gyroscope/mouse tracking is disabled to save battery.
- **Reduced-Motion Behavior**: Standard static elevation, zero tilt.

---

### Section F: Ventures Showcase (Subz Empire & SparkForge)
- **Initial Visual State**: Two wide ecosystem cards side-by-side, `opacity: 0`, `scale(0.97)`.
- **Entrance Sequence**: Dual spring expansion over 500ms when scrolled into view.
- **Motion Trigger**: Scroll intersection at `#ventures`.
- **Animation Behavior**:
  - Live pulse indicators on badges (`animate-pulse`).
  - Feature checklist items stagger into view.
- **Mobile Behavior**: Stacks cleanly as two full-width cards.

---

### Section G: 5-Stage Process Timeline
- **Initial Visual State**: 5 step cards connected by a subtle horizontal guide track. Step cards at `opacity: 0`, `translateY(24px)`.
- **Entrance Sequence**: Steps animate from left to right (`01` $\rightarrow$ `05`) with 75ms stagger.
- **Active Scroll Indicator**: As user scrolls down the section, an active blue indicator dot progresses along the connection track.
- **Mobile Behavior**: Guide track shifts from horizontal to vertical left rail; steps cascade downward.

---

### Section H: Closing Conversion CTA
- **Initial Visual State**: Radiant light-blue radial glow backdrop, bold black headline, `opacity: 0`, `translateY(20px)`.
- **Entrance Sequence**: Unmasks cleanly upon scroll entry.
- **Hover Behavior**: Primary `Start a Project` button scales slightly (`scale(1.02)`) on hover with an illuminated electric blue shadow (`0 10px 30px rgba(0, 105, 234, 0.25)`).
- **Reduced-Motion Behavior**: Instant display without motion.
