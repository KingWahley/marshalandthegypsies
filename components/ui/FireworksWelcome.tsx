'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  color: string;
  size: number;
  flicker: boolean;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  particles: number;
}

const PALETTE = [
  '#FFFD63', // Signature MGE Yellow / Gold
  '#833AB4', // Instagram Purple
  '#E1306C', // Electric Hot Pink
  '#F77737', // Sunset Orange
  '#C13584', // Magenta
  '#38BDF8', // Electric Cyan
  '#F59E0B', // Amber Gold
  '#FFFFFF', // Sparkling White
];

export const FireworksWelcome: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const rockets: Rocket[] = [];
    const particles: Particle[] = [];

    const createExplosion = (x: number, y: number, color: string, count = 70) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5.5 + 1.5;
        const particleColor =
          Math.random() > 0.35
            ? color
            : PALETTE[Math.floor(Math.random() * PALETTE.length)];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed * (Math.random() * 0.8 + 0.6),
          vy: Math.sin(angle) * speed * (Math.random() * 0.8 + 0.6),
          alpha: 1,
          decay: Math.random() * 0.015 + 0.012,
          color: particleColor,
          size: Math.random() * 2.5 + 1.5,
          flicker: Math.random() > 0.5,
        });
      }
    };

    const launchRocket = () => {
      const startX = width * 0.15 + Math.random() * (width * 0.7);
      const targetY = height * 0.12 + Math.random() * (height * 0.38);
      const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];

      rockets.push({
        x: startX,
        y: height,
        targetY,
        vy: -(Math.random() * 4 + 9),
        color,
        particles: Math.floor(Math.random() * 30 + 60),
      });
    };

    // Sequence launch bursts on load: immediate volley + continuous staggered bursts
    const launchSchedule = [
      50, 150, 300, 500, 750, 1050, 1400, 1750, 2100, 2400, 2750, 3100,
    ];

    const timeouts: NodeJS.Timeout[] = [];
    launchSchedule.forEach((delay) => {
      const t = setTimeout(() => {
        launchRocket();
        if (Math.random() > 0.4) {
          setTimeout(launchRocket, 80);
        }
      }, delay);
      timeouts.push(t);
    });

    // Auto terminate after 4.8 seconds to free all resources
    const endTimeout = setTimeout(() => {
      setIsActive(false);
    }, 4800);
    timeouts.push(endTimeout);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.y += r.vy;

        // Rocket spark trail
        ctx.save();
        ctx.fillStyle = r.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = r.color;
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Trail sparks
        for (let j = 0; j < 2; j++) {
          particles.push({
            x: r.x + (Math.random() - 0.5) * 4,
            y: r.y + Math.random() * 6,
            vx: (Math.random() - 0.5) * 1.5,
            vy: Math.random() * 2 + 1,
            alpha: 0.8,
            decay: 0.06,
            color: '#FFFFFF',
            size: 1.2,
            flicker: false,
          });
        }

        // Reached apex -> explode
        if (r.y <= r.targetY || r.vy >= 0) {
          createExplosion(r.x, r.y, r.color, r.particles);
          rockets.splice(i, 1);
        }
      }

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // Gravity
        p.vx *= 0.985; // Air drag
        p.vy *= 0.985;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(
          0,
          p.flicker && Math.random() > 0.4 ? p.alpha * 0.4 : p.alpha
        );
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (rockets.length > 0 || particles.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      aria-hidden="true"
    />
  );
};
