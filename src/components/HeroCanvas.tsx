'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 760;

    let cleanup = () => {};

    // ── 2D Canvas Sparks & Embers Fallback ──
    const run2DFallback = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const heroEl = canvas.closest('.hero');

      let w = 0, h = 0, dpr = 1;
      function size() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        w = canvas!.clientWidth || (heroEl ? heroEl.clientWidth : window.innerWidth);
        h = canvas!.clientHeight || (heroEl ? heroEl.clientHeight : window.innerHeight);
        canvas!.width = w * dpr;
        canvas!.height = h * dpr;
        ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      size();
      window.addEventListener('resize', size);

      const SPARK_COUNT = isMobile ? 34 : 70;
      const palette = ['#3B82F6', '#60A5FA', '#93C5FD', '#818CF8', '#C7D2FE'];

      function makeSpark(initial: boolean) {
        return {
          x: Math.random() * w,
          y: initial ? Math.random() * h : h + 20 + Math.random() * 60,
          r: 1 + Math.random() * 2.2,
          speed: 0.25 + Math.random() * 0.55,
          sway: 0.4 + Math.random() * 0.8,
          swaySeed: Math.random() * Math.PI * 2,
          color: palette[Math.floor(Math.random() * palette.length)],
          glow: 6 + Math.random() * 10,
        };
      }
      const sparks = Array.from({ length: SPARK_COUNT }, () => makeSpark(true));

      let flares: Array<{ x: number; y: number; t: number; max: number; color: string }> = [];
      let flareTimeout: NodeJS.Timeout | null = null;
      function spawnFlare() {
        if (prefersReducedMotion) return;
        flares.push({
          x: w * (0.15 + Math.random() * 0.7),
          y: h * (0.25 + Math.random() * 0.5),
          t: 0,
          max: 60 + Math.random() * 30,
          color: Math.random() > 0.5 ? '#3B82F6' : '#60A5FA',
        });
        flareTimeout = setTimeout(spawnFlare, 2800 + Math.random() * 3200);
      }
      if (!prefersReducedMotion) flareTimeout = setTimeout(spawnFlare, 1800);

      let px = 0, py = 0, tpx = 0, tpy = 0;
      const onMouseMove = (e: MouseEvent) => {
        tpx = (e.clientX / window.innerWidth - 0.5) * 18;
        tpy = (e.clientY / window.innerHeight - 0.5) * 12;
      };
      if (!prefersReducedMotion) window.addEventListener('mousemove', onMouseMove);

      let scrollFade = 1;
      const onScroll = () => {
        const heroH = heroEl ? (heroEl as HTMLElement).offsetHeight : window.innerHeight;
        scrollFade = Math.max(0, 1 - (window.scrollY / heroH) * 1.3);
      };
      window.addEventListener('scroll', onScroll, { passive: true });

      let visible = true;
      let io: IntersectionObserver | null = null;
      if ('IntersectionObserver' in window) {
        io = new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }, { threshold: 0 });
        io.observe(canvas);
      }

      let animId: number;
      let t = 0;
      function frame() {
        animId = requestAnimationFrame(frame);
        if (!visible) return;
        t += 1;
        px += (tpx - px) * 0.04;
        py += (tpy - py) * 0.04;

        ctx!.clearRect(0, 0, w, h);
        ctx!.globalAlpha = scrollFade;

        sparks.forEach((s) => {
          if (!prefersReducedMotion) {
            s.y -= s.speed;
            s.x += Math.sin(t * 0.01 + s.swaySeed) * s.sway * 0.05;
            if (s.y < -20) Object.assign(s, makeSpark(false));
          }
          const twinkle = 0.55 + 0.45 * Math.sin(t * 0.03 + s.swaySeed);
          ctx!.beginPath();
          ctx!.arc(s.x + px, s.y + py, s.r, 0, Math.PI * 2);
          ctx!.fillStyle = s.color;
          ctx!.shadowColor = s.color;
          ctx!.shadowBlur = s.glow;
          ctx!.globalAlpha = scrollFade * twinkle * 0.85;
          ctx!.fill();
        });
        ctx!.shadowBlur = 0;

        flares = flares.filter((f) => f.t < f.max);
        flares.forEach((f) => {
          f.t += 1;
          const p = f.t / f.max;
          const radius = 4 + p * 70;
          const alpha = (1 - p) * 0.35;
          const grad = ctx!.createRadialGradient(f.x + px, f.y + py, 0, f.x + px, f.y + py, radius);
          grad.addColorStop(0, f.color);
          grad.addColorStop(1, 'transparent');
          ctx!.globalAlpha = scrollFade * alpha;
          ctx!.fillStyle = grad;
          ctx!.beginPath();
          ctx!.arc(f.x + px, f.y + py, radius, 0, Math.PI * 2);
          ctx!.fill();
        });

        ctx!.globalAlpha = 1;
      }
      frame();

      cleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', size);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('scroll', onScroll);
        if (io) io.disconnect();
        if (flareTimeout) clearTimeout(flareTimeout);
      };
    };

    // ── Three.js 3D Scene Initialization ──
    try {
      const scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0xffffff, 8, 22);

      const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / (canvas.clientHeight || 1), 0.1, 100);
      camera.position.set(0, 0, 9);

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const resize = () => {
        if (!canvas) return;
        const w = canvas.clientWidth || canvas.parentElement?.clientWidth || window.innerWidth;
        const h = canvas.clientHeight || canvas.parentElement?.clientHeight || window.innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', resize);
      resize();

      const group = new THREE.Group();
      scene.add(group);

      // Clean ambient particle flow (Subtle, never collides with typography)

      // Ambient particles: cool azure, cobalt and celestial blue points
      const PARTICLE_COUNT = isMobile ? 80 : 160;
      const positions = new Float32Array(PARTICLE_COUNT * 3);
      const colorChoices = [
        [0.145, 0.388, 0.922], // blue
        [0.23, 0.51, 0.96],   // cobalt
        [0.376, 0.647, 0.98], // blue-light
        [0.55, 0.65, 0.98],   // periwinkle
      ];
      const colors = new Float32Array(PARTICLE_COUNT * 3);
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 16;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 9 - 3;
        const c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
        colors[i * 3] = c[0]; colors[i * 3 + 1] = c[1]; colors[i * 3 + 2] = c[2];
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const particleMat = new THREE.PointsMaterial({
        size: 0.038,
        vertexColors: true,
        transparent: true,
        opacity: 0.35,
        sizeAttenuation: true,
      });
      const particles = new THREE.Points(particleGeo, particleMat);
      group.add(particles);

      // Mouse parallax
      let targetX = 0, targetY = 0;
      const onMouseMove = (e: MouseEvent) => {
        if (prefersReducedMotion) return;
        targetX = (e.clientX / window.innerWidth - 0.5) * 0.7;
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.45;
      };
      window.addEventListener('mousemove', onMouseMove);

      // Scroll-linked camera dolly
      let scrollT = 0;
      const onScroll = () => {
        const heroEl = canvas.closest('.hero');
        const heroH = heroEl ? (heroEl as HTMLElement).offsetHeight : window.innerHeight;
        scrollT = Math.min(Math.max(window.scrollY / heroH, 0), 1);
      };
      window.addEventListener('scroll', onScroll, { passive: true });

      const clock = new THREE.Clock();
      let visible = true;
      let io: IntersectionObserver | null = null;
      if ('IntersectionObserver' in window) {
        io = new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }, { threshold: 0 });
        io.observe(canvas);
      }

      let animId: number;
      const rafLoop = () => {
        animId = requestAnimationFrame(rafLoop);
        if (!visible) return;
        const t = clock.getElapsedTime();

        if (!prefersReducedMotion) {
          particles.rotation.y = t * 0.014;
          particleMat.opacity = 0.35 + Math.sin(t * 1.1) * 0.12;

          camera.position.z = 9 - scrollT * 2;
          camera.position.y = -scrollT * 1.2;
          group.rotation.z = scrollT * 0.08;

          group.rotation.y += (targetX - group.rotation.y) * 0.035;
          group.rotation.x += (-targetY - group.rotation.x) * 0.035;
        }
        renderer.render(scene, camera);
      };
      rafLoop();

      cleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('scroll', onScroll);
        if (io) io.disconnect();
        renderer.dispose();
      };
    } catch {
      run2DFallback();
    }

    return () => cleanup();
  }, []);

  return <canvas ref={canvasRef} id="hero-canvas" className="hero__canvas" aria-hidden="true" />;
}
