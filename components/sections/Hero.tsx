'use client';

import React, { useRef, useEffect } from 'react';

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

  return (
    <section className="relative bg-white pt-24 sm:pt-32 pb-0 overflow-hidden">
      {/* Yellow split background */}
      <div className="absolute top-0 left-0 right-0 h-[68%] sm:h-[66%] md:h-[64%] bg-[#FFFD63] pointer-events-none" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
        {/* Header Text */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10 md:mb-12">
          <h1 className="text-center font-black tracking-tight text-[#0A0B1E] uppercase text-[32px] sm:text-[48px] lg:text-[63.11px] leading-[38px] sm:leading-[54px] lg:leading-[71.11px] font-sans">
            THE MOTHER OF NIGHTLIFE
          </h1>
          <p className="text-center text-[#0A0B1E] text-sm sm:text-base font-light leading-relaxed sm:leading-[24.89px] max-w-2xl mx-auto px-4">
            Where culture, talent, and premium experiences converge. We create, curate, and execute unforgettable moments that set the tempo for modern nightlife.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 w-full mx-auto">
            <button
              type="button"
              className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-full bg-black text-white hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-medium gap-3 shadow-sm w-full sm:w-auto"
              onClick={() => {
                const el = document.getElementById('contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <svg className="w-[30px] h-[30px] fill-[#FFFD63] shrink-0" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Get Started</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-full bg-white text-[#0A0B1E] border border-zinc-200 hover:bg-zinc-50 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-medium shadow-sm w-full sm:w-auto"
              onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>How It Works</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE: full-bleed video, no frame, no radius ── */}
      <div className="block sm:hidden w-full relative aspect-video bg-zinc-950">
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
      <div className="hidden sm:block relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
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
