'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ROW1_IMAGES = [
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=800&auto=format&fit=crop',
];

const ROW2_IMAGES = [
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
];

export const VisualMarquee: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
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

  // Top row moves left as progress increases
  const topTranslateX = -scrollProgress * 700;
  // Bottom row moves right as progress increases
  const bottomTranslateX = -700 + scrollProgress * 700;

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-16 bg-white overflow-hidden border-b border-zinc-100"
    >
      <div className="space-y-4 sm:space-y-6">
        {/* Row 1: Scroll-powered slide towards LEFT */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-4 sm:gap-6 transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translate3d(${topTranslateX}px, 0, 0)`,
              width: 'max-content',
            }}
          >
            {[...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES].map((src, index) => (
              <div
                key={`scroll-row1-${index}`}
                className="w-[280px] sm:w-[350px] lg:w-[434.51px] h-[90px] sm:h-[115px] lg:h-[140.57px] rounded-[454.4px] overflow-hidden shrink-0 shadow-sm border border-zinc-300/80 relative bg-zinc-900 group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`Nightlife gallery visual ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 350px, 435px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scroll-powered slide in OPPOSITE direction (towards RIGHT) */}
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-4 sm:gap-6 transition-transform duration-100 ease-out will-change-transform"
            style={{
              transform: `translate3d(${bottomTranslateX}px, 0, 0)`,
              width: 'max-content',
            }}
          >
            {[...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES].map((src, index) => (
              <div
                key={`scroll-row2-${index}`}
                className="w-[280px] sm:w-[350px] lg:w-[434.51px] h-[90px] sm:h-[115px] lg:h-[140.57px] rounded-[454.4px] overflow-hidden shrink-0 shadow-sm border border-zinc-300/80 relative bg-zinc-900 group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={src}
                  alt={`Nightlife gallery visual ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 350px, 435px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
