'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { globalLenis } from '@/components/providers/SmoothScrollProvider';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // IntersectionObserver: play only when visible, pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Smooth GSAP / Lenis animated scroll
  const scrollToHowItWorks = () => {
    const target = document.getElementById('how-it-works');
    if (!target) return;

    if (globalLenis) {
      globalLenis.scrollTo(target, { offset: -70, duration: 1.2 });
      return;
    }

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 900;
    let start: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <section
      className="relative bg-white pb-0 overflow-hidden"
      style={{ paddingTop: 'calc(5rem + env(safe-area-inset-top, 0px))' }}
    >
      {/* Yellow split background — bleeds upward behind the Dynamic Island */}
      <div
        className="absolute left-0 right-0 h-[68%] sm:h-[66%] md:h-[64%] bg-[#FFFD63] pointer-events-none"
        style={{
          top: 'calc(-1 * env(safe-area-inset-top, 0px))',
          paddingTop: 'env(safe-area-inset-top, 0px)',
        }}
      />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
        {/* Header Text */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10 md:mb-12">
          <h1
            style={{ animationDelay: '100ms' }}
            className="hero-fade-up text-center font-black tracking-tight text-[#0A0B1E] uppercase text-[32px] sm:text-[48px] lg:text-[63.11px] leading-[38px] sm:leading-[54px] lg:leading-[71.11px] font-sans"
          >
            THE MOTHER OF NIGHTLIFE
          </h1>
          <p
            style={{ animationDelay: '250ms' }}
            className="hero-fade-up text-center text-[#0A0B1E] text-sm sm:text-base font-light leading-relaxed sm:leading-[24.89px] max-w-2xl mx-auto px-4"
          >
            Where culture, talent, and premium experiences converge. We create, curate, and execute unforgettable moments that set the tempo for modern nightlife.
          </p>

          {/* CTA Buttons */}
          <div
            style={{ animationDelay: '400ms' }}
            className="hero-fade-up flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full mx-auto"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <button
                type="button"
                className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full bg-black text-white hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-medium gap-3 shadow-sm w-full sm:w-auto"
              >
                <svg className="w-[30px] h-[30px] fill-[#FFFD63] shrink-0" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Get Started</span>
              </button>
            </Link>
            <button
              type="button"
              onClick={scrollToHowItWorks}
              className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full bg-white text-[#0A0B1E] border border-zinc-200 hover:bg-zinc-50 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-medium shadow-sm w-full sm:w-auto"
            >
              <span>How It Works</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE: full-bleed video, no frame, no radius ── */}
      <div
        style={{ animationDelay: '550ms' }}
        className="hero-image-scale block sm:hidden w-full relative aspect-video bg-zinc-950"
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          poster="/images/NEXGEN-8083.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── DESKTOP: yellow framed container ── */}
      <div
        style={{ animationDelay: '550ms' }}
        className="hero-image-scale hidden sm:block relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]"
      >
        <div className="relative bg-[#FFFD6A] rounded-[21px] p-3.5 sm:p-6 md:p-8 pb-0 sm:pb-0 md:pb-0 shadow-2xl border border-yellow-300/40 overflow-hidden">
          <div className="bg-zinc-950 rounded-t-[21px] rounded-b-none overflow-hidden relative aspect-video w-full">
            <video
              loop
              muted
              playsInline
              preload="none"
              poster="/images/NEXGEN-8083.jpg"
              className="w-full h-full object-cover"
              ref={(el) => {
                if (!el) return;
                const obs = new IntersectionObserver(
                  (entries) => {
                    if (entries[0].isIntersecting) el.play().catch(() => {});
                    else el.pause();
                  },
                  { threshold: 0.1 }
                );
                obs.observe(el);
              }}
            >
              <source src="/video/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
