'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-4 sm:pt-8 md:pt-10 pb-16 md:pb-24 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:pl-[65px] lg:pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-5 space-y-6 lg:pr-12 text-left flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-normal tracking-tight text-zinc-950 font-sans leading-tight">
              About Us
            </h2>
            <div className="space-y-4">
              <p className="text-[rgba(14,16,22,0.95)] text-base sm:text-lg lg:text-[22.35px] font-normal leading-relaxed lg:leading-[33.9px] max-w-xl font-sans">
                Marshall &amp; The Gypsies (M&amp;G) Entertainment is a premier, full-service entertainment powerhouse and lifestyle institution. Renowned as the &ldquo;Mother of Nightlife&rdquo;, the brand has established itself as the beating heart of experiential entertainment, high-energy events, and elite talent curation.
              </p>
            </div>
            <div className="pt-1 w-full sm:w-auto">
              <Button
                variant="dark"
                size="md"
                className="bg-[#231F20] hover:bg-black text-white px-6 py-2.5 text-xs sm:text-sm font-normal rounded-[15px] sm:rounded-full transition-colors w-full sm:w-auto h-[52px] sm:h-auto"
                onClick={() => {
                  const el = document.getElementById('services');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Column Image - Full width on mobile without padding or border radius */}
          <div className="lg:col-span-7 -mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full flex justify-center">
            <div className="relative aspect-16/10 lg:aspect-16/11 w-full max-w-2xl lg:max-w-none rounded-none sm:rounded-[21px] lg:rounded-r-none overflow-hidden shadow-lg bg-zinc-900 border-0 sm:border border-zinc-100 group">
              <Image
                src="/images/NEXGEN-8243.jpg"
                alt="Crowd dancing and celebrating at M&G Entertainment nightlife event"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
