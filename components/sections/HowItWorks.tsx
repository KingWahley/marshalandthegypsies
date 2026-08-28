'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

// Reusable Arrow SVG provided in feedback
const ArrowIcon = () => (
  <svg
    className="w-7 h-7 sm:w-9 sm:h-9 lg:w-[46px] lg:h-[46px] shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-200"
    viewBox="0 0 63 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.585 15.5283H15.5286V20.7044H37.7486L14.4563 43.9967L18.1164 47.6567L41.4089 24.3642V46.5847H46.585V15.5283Z"
      fill="currentColor"
    />
  </svg>
);

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start pb-6 sm:pb-16 border-b border-zinc-200/70">
          <div className="w-full md:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:font-normal tracking-tight text-zinc-950 font-sans leading-tight sm:leading-[1.08]">
              How it works
            </h2>
          </div>
          <div className="md:col-span-6 space-y-5 md:pt-2">
            <p className="text-base sm:text-lg lg:text-[20px] text-zinc-800 font-normal leading-relaxed max-w-xl font-sans">
              From initial creative vision to absolute on-the-ground execution we orchestrate every stage, sound, talent lineup, and VIP detail to deliver unforgettable nightlife experiences at scale. We use a three steps process that works every time.
            </p>
            <div className="hidden md:block">
              <Button
                variant="blue"
                size="md"
                className="bg-[#4B6BFB] hover:bg-blue-600 text-white font-medium text-sm px-6 py-2.5 rounded-full"
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>

        {/* Steps Stack */}
        <div className="divide-y divide-zinc-200/70">
          {/* Step 1: Imagine */}
          <div className="py-6 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center group">
            {/* Left Description */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-normal text-zinc-500 tracking-wide">
                Step 1
              </span>
              <h3 className="text-black text-2xl sm:text-3xl lg:text-[45.81px] font-normal lg:leading-[54.66px] tracking-[-1.553px] font-sans flex items-center justify-between lg:justify-start gap-4">
                <span>Imagine</span>
                <ArrowIcon />
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal max-w-sm">
                Bring us your vision. We understand your goals, audience, and creative direction to shape an experience that stands out.
              </p>
            </div>

            {/* Right Stadium Pill Mockup - ONLY IMAGE */}
            <div className="lg:col-span-8">
              <div className="relative h-36 sm:h-40 md:h-[175px] rounded-[21px] md:rounded-full overflow-hidden bg-zinc-900 shadow-md border border-zinc-200/80 group">
                <Image
                  src="/images/NEXGEN-8186.jpg"
                  alt="Nightlife stage preparation and lighting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Curate */}
          <div className="py-6 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center group">
            {/* Left Description */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-normal text-zinc-500 tracking-wide">
                Step 2
              </span>
              <h3 className="text-black text-2xl sm:text-3xl lg:text-[45.81px] font-normal lg:leading-[54.66px] tracking-[-1.553px] font-sans flex items-center justify-between lg:justify-start gap-4">
                <span>Curate</span>
                <ArrowIcon />
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal max-w-sm">
                We carefully assemble the talent, venues, production, logistics, and creative elements needed to bring your vision to life.
              </p>
            </div>

            {/* Right Stadium Pill Mockup - ONLY IMAGE */}
            <div className="lg:col-span-8">
              <div className="relative h-36 sm:h-40 md:h-[175px] rounded-[21px] md:rounded-full overflow-hidden bg-zinc-900 shadow-md border border-zinc-200/80 group">
                <Image
                  src="/images/NEXGEN-8262.jpg"
                  alt="Nightlife talent and creative curation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Deliver */}
          <div className="py-6 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center group">
            {/* Left Description */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-normal text-zinc-500 tracking-wide">
                Step 3
              </span>
              <h3 className="text-black text-2xl sm:text-3xl lg:text-[45.81px] font-normal lg:leading-[54.66px] tracking-[-1.553px] font-sans flex items-center justify-between lg:justify-start gap-4">
                <span>Deliver</span>
                <ArrowIcon />
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal max-w-sm">
                From the first beat to the final moment, we execute seamlessly to create unforgettable experiences that leave a lasting impact.
              </p>
            </div>

            {/* Right Stadium Pill Mockup - ONLY IMAGE */}
            <div className="lg:col-span-8">
              <div className="relative h-36 sm:h-40 md:h-[175px] rounded-[21px] md:rounded-full overflow-hidden bg-zinc-900 shadow-md border border-zinc-200/80 group">
                <Image
                  src="/images/NEXGEN-8270.jpg"
                  alt="Nightlife event delivery and live experience"
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Learn More Button on Mobile */}
        <div className="flex justify-center pt-5 sm:pt-8 md:hidden w-full">
          <Button
            variant="blue"
            size="md"
            className="bg-[#4B6BFB] hover:bg-blue-600 text-white font-medium text-sm px-8 py-3 rounded-[15px] sm:rounded-full w-full h-[52px]"
            onClick={() => {
              const el = document.getElementById('contact');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
};
