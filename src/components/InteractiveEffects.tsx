'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function InteractiveEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const noHover = window.matchMedia('(hover: none)').matches;

    // ── 1. Custom Trailing Cursor ──
    let cursorRing: HTMLDivElement | null = null;
    let cursorDot: HTMLDivElement | null = null;
    let cursorRaf: number | null = null;

    if (!noHover && !reduced) {
      cursorRing = document.createElement('div');
      cursorDot = document.createElement('div');
      cursorRing.id = 'ss-cursor-ring';
      cursorDot.id = 'ss-cursor-dot';

      Object.assign(cursorRing.style, {
        position: 'fixed', top: '0', left: '0',
        width: '32px', height: '32px',
        borderRadius: '50%',
        border: '1.5px solid rgba(15, 23, 42, 0.45)',
        background: 'rgba(15, 23, 42, 0.04)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        pointerEvents: 'none', zIndex: '99999',
        transform: 'translate(-50%,-50%)',
        transition: 'width 280ms cubic-bezier(0.16,1,0.3,1), height 280ms cubic-bezier(0.16,1,0.3,1), border-color 220ms ease, background 220ms ease, opacity 300ms ease',
        opacity: '0', willChange: 'transform',
      });

      Object.assign(cursorDot.style, {
        position: 'fixed', top: '0', left: '0',
        width: '5px', height: '5px',
        borderRadius: '50%',
        background: '#2563EB',
        boxShadow: '0 0 6px rgba(37,99,235,0.7)',
        pointerEvents: 'none', zIndex: '100000',
        transform: 'translate(-50%,-50%)',
        opacity: '0', willChange: 'transform',
        transition: 'opacity 300ms ease, transform 150ms ease',
      });

      document.body.appendChild(cursorRing);
      document.body.appendChild(cursorDot);

      let mx = -100, my = -100, cx = -100, cy = -100;
      const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

      const tickCursor = () => {
        cx = lerp(cx, mx, 0.11);
        cy = lerp(cy, my, 0.11);
        if (cursorRing) {
          cursorRing.style.left = cx + 'px';
          cursorRing.style.top = cy + 'px';
        }
        if (cursorDot) {
          cursorDot.style.left = mx + 'px';
          cursorDot.style.top = my + 'px';
        }
        cursorRaf = requestAnimationFrame(tickCursor);
      };
      cursorRaf = requestAnimationFrame(tickCursor);

      const onMouseMove = (e: MouseEvent) => {
        mx = e.clientX;
        my = e.clientY;
        if (cursorRing && cursorRing.style.opacity === '0') {
          cursorRing.style.opacity = '1';
          if (cursorDot) cursorDot.style.opacity = '1';
          cx = mx; cy = my;
        }
      };

      const onMouseLeave = () => {
        if (cursorRing) cursorRing.style.opacity = '0';
        if (cursorDot) cursorDot.style.opacity = '0';
      };

      const targetSelectors = 'a, button, [role="button"], input, textarea, select, label, .service-card, .work-item, .review-card, .value-card, .faq-card, .bento-card';

      const onMouseOver = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest(targetSelectors) && cursorRing) {
          Object.assign(cursorRing.style, {
            width: '52px', height: '52px',
            borderColor: 'rgba(37,99,235,0.85)',
            background: 'rgba(37,99,235,0.08)',
          });
        }
      };

      const onMouseOut = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest(targetSelectors) && cursorRing) {
          Object.assign(cursorRing.style, {
            width: '32px', height: '32px',
            borderColor: 'rgba(15, 23, 42, 0.45)',
            background: 'rgba(15, 23, 42, 0.04)',
          });
        }
      };

      const onMouseDown = () => {
        if (cursorRing) cursorRing.style.transform = 'translate(-50%,-50%) scale(0.8)';
        if (cursorDot) cursorDot.style.transform = 'translate(-50%,-50%) scale(1.5)';
      };

      const onMouseUp = () => {
        if (cursorRing) cursorRing.style.transform = 'translate(-50%,-50%) scale(1)';
        if (cursorDot) cursorDot.style.transform = 'translate(-50%,-50%) scale(1)';
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mouseover', onMouseOver);
      document.addEventListener('mouseout', onMouseOut);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    }

    // ── 2. Scroll Progress Bar ──
    let progressBar = document.getElementById('ss-scroll-progress') as HTMLDivElement | null;
    if (!progressBar && !reduced) {
      progressBar = document.createElement('div');
      progressBar.id = 'ss-scroll-progress';
      Object.assign(progressBar.style, {
        position: 'fixed', top: '0', left: '0', height: '3px', width: '0%',
        background: 'linear-gradient(90deg, #2563EB, #3B82F6, #bef264)',
        boxShadow: '0 0 12px rgba(37,99,235,0.5)', zIndex: '10000',
        transition: 'width 80ms linear', pointerEvents: 'none',
      });
      document.body.appendChild(progressBar);
    }

    const onScrollProgress = () => {
      if (!progressBar) return;
      const h = document.documentElement;
      const scrollTotal = h.scrollHeight - h.clientHeight;
      const pct = scrollTotal > 0 ? (h.scrollTop / scrollTotal) * 100 : 0;
      progressBar.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScrollProgress, { passive: true });

    // ── 3. Click Particle Bursts & Ripples ──
    const burstColors = ['#2563EB', '#3B82F6', '#bef264', '#09090b', '#f59e0b'];
    function spawnBurst(x: number, y: number) {
      if (reduced) return;
      for (let i = 0; i < 16; i++) {
        const p = document.createElement('span');
        const angle = Math.random() * Math.PI * 2;
        const dist = 32 + Math.random() * 55;
        const size = 3 + Math.random() * 4;
        Object.assign(p.style, {
          position: 'fixed', left: x + 'px', top: y + 'px',
          width: size + 'px', height: size + 'px', borderRadius: '50%',
          background: burstColors[Math.floor(Math.random() * burstColors.length)],
          pointerEvents: 'none', zIndex: '999999',
          transform: 'translate(-50%,-50%)',
          transition: 'transform 650ms cubic-bezier(0.2,0.8,0.3,1), opacity 650ms ease',
          opacity: '1',
          boxShadow: '0 0 6px rgba(37,99,235,0.5)',
        });
        document.body.appendChild(p);
        requestAnimationFrame(() => {
          p.style.transform = `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px))`;
          p.style.opacity = '0';
        });
        setTimeout(() => p.remove(), 700);
      }
    }

    const onGlobalClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest('.btn-primary, .btn-ghost, .nav__cta, .cta-btn');
      if (btn) {
        spawnBurst(e.clientX, e.clientY);

        // Ripple effect
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height) * 2;
        Object.assign(ripple.style, {
          position: 'absolute',
          width: size + 'px',
          height: size + 'px',
          left: (e.clientX - rect.left - size / 2) + 'px',
          top: (e.clientY - rect.top - size / 2) + 'px',
          background: 'rgba(255,255,255,0.25)',
          borderRadius: '50%',
          transform: 'scale(0)',
          animation: 'rippleOut 0.5s ease-out forwards',
          pointerEvents: 'none',
        });
        const htmlBtn = btn as HTMLElement;
        if (!htmlBtn.style.position || htmlBtn.style.position === 'static') htmlBtn.style.position = 'relative';
        htmlBtn.style.overflow = 'hidden';
        htmlBtn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 500);
      }
    };
    document.addEventListener('click', onGlobalClick);

    // ── 4. Magnetic Buttons ──
    const magneticBtns = document.querySelectorAll('.btn-primary, .btn-ghost, .nav__cta');
    const magneticCleanups: Array<() => void> = [];

    if (!reduced && !noHover) {
      magneticBtns.forEach((btn) => {
        const el = btn as HTMLElement;
        let raf: number | null = null;
        const onMM = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
          if (raf) cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            el.style.transform = `translate(${x}px, ${y}px)`;
          });
        };
        const onML = () => {
          if (raf) cancelAnimationFrame(raf);
          el.style.transform = '';
        };
        el.addEventListener('mousemove', onMM);
        el.addEventListener('mouseleave', onML);
        magneticCleanups.push(() => {
          el.removeEventListener('mousemove', onMM);
          el.removeEventListener('mouseleave', onML);
        });
      });
    }

    // ── 5. 3D Card Tilt & Mouse Spotlight ──
    const tiltCards = document.querySelectorAll('.service-card, .work-item, .review-card, .value-card');
    const tiltCleanups: Array<() => void> = [];

    if (!reduced && !noHover) {
      tiltCards.forEach((c) => {
        const el = c as HTMLElement;
        el.style.transformStyle = 'preserve-3d';
        el.style.willChange = 'transform';

        const onMM = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          const rotX = (-py * 10).toFixed(2);
          const rotY = (px * 12).toFixed(2);
          el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.015)`;

          // Spotlight tracking
          el.style.setProperty('--mx', `${(e.clientX - r.left).toFixed(1)}px`);
          el.style.setProperty('--my', `${(e.clientY - r.top).toFixed(1)}px`);
        };

        const onML = () => {
          el.style.transform = '';
        };

        el.addEventListener('mousemove', onMM);
        el.addEventListener('mouseleave', onML);
        tiltCleanups.push(() => {
          el.removeEventListener('mousemove', onMM);
          el.removeEventListener('mouseleave', onML);
        });
      });
    }

    // ── 6. Work Item Cursor-Follow Label ──
    const workItems = document.querySelectorAll('.work-item');
    const workCleanups: Array<() => void> = [];

    if (!reduced && !noHover) {
      workItems.forEach((w) => {
        const el = w as HTMLElement;
        const label = el.querySelector('.work-item__cursor-label') as HTMLElement | null;
        if (!label) return;

        const onMM = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          label.style.left = (e.clientX - r.left) + 'px';
          label.style.top = (e.clientY - r.top) + 'px';
        };
        el.addEventListener('mousemove', onMM);
        workCleanups.push(() => el.removeEventListener('mousemove', onMM));
      });
    }

    // ── 7. Service Card Flip Buttons ──
    const flipBtns = document.querySelectorAll('.service-card__flip-btn');
    const flipCleanups: Array<() => void> = [];

    flipBtns.forEach((btn) => {
      const onFlip = (e: Event) => {
        e.stopPropagation();
        const card = (btn as HTMLElement).closest('.service-card');
        if (card) card.classList.toggle('is-flipped');
      };
      btn.addEventListener('click', onFlip);
      flipCleanups.push(() => btn.removeEventListener('click', onFlip));
    });

    // ── 8. Scroll-SCRUB Engine ([data-scrollfx]) ──
    const fxEls = Array.from(document.querySelectorAll('[data-scrollfx]')) as HTMLElement[];
    const FX_CONFIG: Record<string, { y: number; x: number; scale: number; blur: number; rotate: number; spring: boolean }> = {
      rise:         { y: 90, x: 0, scale: 0.90, blur: 8, rotate: -2, spring: true },
      'blur-up':    { y: 50, x: 0, scale: 0.96, blur: 12, rotate: 0, spring: false },
      'slide-left': { y: 0, x: 80, scale: 1, blur: 5, rotate: 0, spring: true },
      'slide-right':{ y: 0, x: -80, scale: 1, blur: 5, rotate: 0, spring: true },
      fade:         { y: 24, x: 0, scale: 1, blur: 6, rotate: 0, spring: false },
      word:         { y: 100, x: 0, scale: 1, blur: 10, rotate: 45, spring: false },
    };

    function easeOutCubic(p: number) { return 1 - Math.pow(1 - p, 3); }
    function easeOutBack(p: number) {
      const c1 = 1.4, c3 = c1 + 1;
      return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
    }
    function fxProgress(el: HTMLElement) {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.92, end = vh * 0.5;
      const p = (start - r.top) / (start - end);
      return Math.min(Math.max(p, 0), 1);
    }

    let fxTicking = false;
    function updateScrollFx() {
      if (reduced) return;
      fxEls.forEach((el) => {
        const type = el.dataset.scrollfx || 'rise';
        const cfg = FX_CONFIG[type] || FX_CONFIG.rise;
        const i = parseFloat(el.style.getPropertyValue('--fx-i')) || 0;
        const localStart = Math.min(0.85, i * 0.06);
        const raw = fxProgress(el);
        const staggered = Math.min(Math.max((raw - localStart) / (1 - localStart), 0), 1);
        const eased = cfg.spring ? easeOutBack(staggered) : easeOutCubic(staggered);
        const clamped = Math.min(Math.max(eased, 0), 1);

        const y = cfg.y * (1 - eased);
        const x = cfg.x * (1 - eased);
        const s = cfg.scale + (1 - cfg.scale) * eased;
        const b = cfg.blur * (1 - clamped);
        const rot = cfg.rotate * (1 - eased);
        const op = 0.08 + 0.92 * clamped;

        el.style.opacity = `${op}`;
        el.style.filter = b > 0.3 ? `blur(${b.toFixed(1)}px)` : 'none';
        el.style.transform = type === 'word'
          ? `translateY(${y}%) rotateX(${rot}deg)`
          : `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${s.toFixed(3)}) rotateZ(${(cfg.rotate ? rot * 0.3 : 0).toFixed(2)}deg)`;
      });
      fxTicking = false;
    }

    if (fxEls.length && !reduced) {
      fxEls.forEach((el) => { el.style.willChange = 'transform, opacity, filter'; });
      const onScrollFx = () => {
        if (!fxTicking) {
          requestAnimationFrame(updateScrollFx);
          fxTicking = true;
        }
      };
      window.addEventListener('scroll', onScrollFx, { passive: true });
      window.addEventListener('resize', updateScrollFx);
      updateScrollFx();
    }

    // ── 9. Directional Cinematic Observers ([data-cinematic]) ──
    const cinematicEls = document.querySelectorAll('[data-cinematic]');
    let cinematicIo: IntersectionObserver | null = null;

    if (cinematicEls.length && 'IntersectionObserver' in window) {
      cinematicIo = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          const dir = el.dataset.cinematic;
          if (e.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'none';
          } else {
            const rect = el.getBoundingClientRect();
            const offset = rect.top > window.innerHeight ? 60 : -60;
            if (dir === 'left') el.style.transform = `translateX(${rect.top > window.innerHeight ? -60 : 60}px)`;
            else if (dir === 'right') el.style.transform = `translateX(${rect.top > window.innerHeight ? 60 : -60}px)`;
            else if (dir === 'scale') el.style.transform = 'scale(0.92)';
            else if (dir === 'up') el.style.transform = `translateY(${offset}px)`;
            el.style.opacity = '0';
          }
        });
      }, { threshold: 0.15 });

      cinematicEls.forEach((el) => {
        const html = el as HTMLElement;
        html.style.opacity = '0';
        html.style.transition = 'transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.9s ease';
        cinematicIo?.observe(html);
      });
    }

    // ── 10. Live Animated Counters ([data-counter]) with Persistent Glow ──
    const counterEls = document.querySelectorAll('[data-counter]');
    let counterIo: IntersectionObserver | null = null;

    function animateCounter(el: HTMLElement, target: number, dur: number) {
      const start = performance.now();
      const update = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = `${Math.round(target * eased)}`;
        if (t < 1) requestAnimationFrame(update);
        else {
          el.textContent = `${target}`;
          // Add subtle persistent glow after finishing
          el.style.transition = 'text-shadow 1.6s ease-in-out';
          el.animate?.(
            [
              { textShadow: '0 0 0px rgba(37,99,235,0)' },
              { textShadow: '0 0 16px rgba(37,99,235,0.6)' },
              { textShadow: '0 0 0px rgba(37,99,235,0)' },
            ],
            { duration: 2600, iterations: Infinity }
          );
        }
      };
      requestAnimationFrame(update);
    }

    if (counterEls.length && 'IntersectionObserver' in window) {
      counterIo = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const targetVal = parseInt(el.dataset.counter || '0', 10);
            animateCounter(el, targetVal, 1600);
            counterIo?.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      counterEls.forEach((el) => counterIo?.observe(el));
    }

    // ── 11. CTA Orbit Cursor Parallax ──
    const ctaFinal = document.querySelector('.cta-band--final');
    const ctaOrbit = document.querySelector('.cta-band__orbit') as HTMLElement | null;
    let ctaRaf: number | null = null;
    let ctaCleanup = () => {};

    if (ctaFinal && ctaOrbit && !reduced && !noHover) {
      const onMM = (e: MouseEvent) => {
        const r = ctaFinal.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        if (ctaRaf) cancelAnimationFrame(ctaRaf);
        ctaRaf = requestAnimationFrame(() => {
          ctaOrbit.style.transform = `rotateX(${(-py * 18).toFixed(2)}deg) rotateY(${(px * 22).toFixed(2)}deg) translate(${(px * 16).toFixed(1)}px, ${(py * 12).toFixed(1)}px)`;
        });
      };
      const onML = () => {
        if (ctaRaf) cancelAnimationFrame(ctaRaf);
        ctaOrbit.style.transform = '';
      };
      ctaFinal.addEventListener('mousemove', onMM as EventListener);
      ctaFinal.addEventListener('mouseleave', onML);
      ctaCleanup = () => {
        ctaFinal.removeEventListener('mousemove', onMM as EventListener);
        ctaFinal.removeEventListener('mouseleave', onML);
      };
    }

    // ── Global Cleanup ──
    return () => {
      if (cursorRing) cursorRing.remove();
      if (cursorDot) cursorDot.remove();
      if (cursorRaf) cancelAnimationFrame(cursorRaf);
      if (progressBar) progressBar.remove();
      window.removeEventListener('scroll', onScrollProgress);
      document.removeEventListener('click', onGlobalClick);
      magneticCleanups.forEach((fn) => fn());
      tiltCleanups.forEach((fn) => fn());
      workCleanups.forEach((fn) => fn());
      flipCleanups.forEach((fn) => fn());
      if (cinematicIo) cinematicIo.disconnect();
      if (counterIo) counterIo.disconnect();
      ctaCleanup();
    };
  }, [pathname]);

  return null;
}
