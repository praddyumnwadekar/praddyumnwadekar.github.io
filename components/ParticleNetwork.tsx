'use client';
import { useEffect, useRef } from 'react';

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');
    let particles: Particle[] = [];
    let animationFrameId = 0;
    let running = false;
    let visible = true;
    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x = Math.random() * canvas!.width;
      y = Math.random() * canvas!.height;
      vx = (Math.random() - 0.5) * 0.5;
      vy = (Math.random() - 0.5) * 0.5;
      radius = Math.random() * 1.5 + 0.5;
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
        if (finePointer.matches) {
          const dx = mouse.x - this.x, dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 150) { this.x -= dx * 0.02; this.y -= dy * 0.02; }
        }
      }
      draw() { ctx!.beginPath(); ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2); ctx!.fillStyle = 'rgba(56, 189, 248, 0.4)'; ctx!.fill(); }
    }

    const initParticles = () => {
      const count = window.innerWidth < 768 ? 28 : 70;
      particles = Array.from({ length: count }, () => new Particle());
    };
    const resize = () => { const dpr = Math.min(window.devicePixelRatio || 1, 1.5); canvas.width = window.innerWidth * dpr; canvas.height = window.innerHeight * dpr; canvas.style.width = `${window.innerWidth}px`; canvas.style.height = `${window.innerHeight}px`; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); initParticles(); };
    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((p) => { p.update(); p.draw(); });
      for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y, distance = Math.hypot(dx, dy);
        if (distance < 120) { ctx.beginPath(); ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 - (distance / 120) * 0.12})`; ctx.lineWidth = 0.5; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
      }
    };
    const animate = () => { if (!running || !visible) return; draw(); animationFrameId = requestAnimationFrame(animate); };
    const start = () => { if (running || reducedMotion.matches || !visible) return; running = true; animate(); };
    const stop = () => { running = false; cancelAnimationFrame(animationFrameId); };
    const onMouseMove = (e: MouseEvent) => { mouse = { x: e.clientX, y: e.clientY }; };
    const onMouseOut = () => { mouse = { x: -1000, y: -1000 }; };

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); else stop(); }, { threshold: 0.01 });
    observer.observe(canvas);
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseout', onMouseOut);
    resize();
    if (reducedMotion.matches) draw(); else start();

    return () => { stop(); observer.disconnect(); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', onMouseMove); window.removeEventListener('mouseout', onMouseOut); };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 pointer-events-none z-0 opacity-50" />;
}
