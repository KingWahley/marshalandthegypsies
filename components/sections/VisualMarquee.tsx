'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ROW1_IMAGES = [
  '/images/NEXGEN-8162.jpg',
  '/images/NEXGEN-8165.jpg',
  '/images/NEXGEN-8167.jpg',
  '/images/NEXGEN-8168.jpg',
  '/images/NEXGEN-8172.jpg',
  '/images/NEXGEN-8180.jpg',
  '/images/NEXGEN-8183.jpg',
  '/images/NEXGEN-8184.jpg',
];

const ROW2_IMAGES = [
  '/images/NEXGEN-8186.jpg',
  '/images/NEXGEN-8189.jpg',
  '/images/NEXGEN-8192.jpg',
  '/images/NEXGEN-8193.jpg',
  '/images/NEXGEN-8196.jpg',
  '/images/NEXGEN-8198.jpg',
  '/images/NEXGEN-8221.jpg',
  '/images/NEXGEN-8223.jpg',
];

export const VisualMarquee: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (window.innerWidth < 768 || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress as section scrolls through viewport
      const totalDistance = windowHeight + rect.height;
      const currentProgress = (windowHeight - rect.top) / totalDistance;
      
      setScrollProgress(Math.max(-0.2, Math.min(1.2, currentProgress)));
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Top row moves left as progress increases on desktop
  const topTranslateX = -scrollProgress * 700;
  // Bottom row moves right as progress increases on desktop
  const bottomTranslateX = -700 + scrollProgress * 700;

  return (
    <section
      ref={sectionRef}
      className="py-0 md:py-16 bg-white overflow-hidden border-b border-zinc-100"
    >
      {/* Mobile View: Display ONLY ONE image - Full width with NO border radius */}
      <div className="md:hidden w-full">
        <div className="w-full h-[220px] sm:h-[260px] relative bg-zinc-900 overflow-hidden rounded-none">
          <Image
            src={ROW1_IMAGES[0]}
            alt="Nightlife gallery visual"
            fill
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Desktop View: Dual Scroll-powered marquee rows with stadium radius */}
      <div className="hidden md:block space-y-6">
        {/* Row 1: Scroll-powered slide towards LEFT */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-6 transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translate3d(${topTranslateX}px, 0, 0)`,
              width: 'max-content',
            }}
          >
            {[...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES].map((src, index) => (
              <div
                key={`scroll-row1-${index}`}
                className="w-[434.51px] h-[140.57px] rounded-[454.4px] overflow-hidden shrink-0 shadow-sm border border-zinc-300/80 relative bg-zinc-900 group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`Nightlife gallery visual ${index + 1}`}
                  fill
                  sizes="435px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scroll-powered slide in OPPOSITE direction (towards RIGHT) */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-6 transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translate3d(${bottomTranslateX}px, 0, 0)`,
              width: 'max-content',
            }}
          >
            {[...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES].map((src, index) => (
              <div
                key={`scroll-row2-${index}`}
                className="w-[434.51px] h-[140.57px] rounded-[454.4px] overflow-hidden shrink-0 shadow-sm border border-zinc-300/80 relative bg-zinc-900 group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`Nightlife gallery visual ${index + 1}`}
                  fill
                  sizes="435px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
