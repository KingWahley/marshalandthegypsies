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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pb-12 sm:pb-16 border-b border-zinc-200/70">
          <div className="md:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-zinc-950 font-sans leading-[1.08]">
              How it<br />works
            </h2>
          </div>
          <div className="md:col-span-6 space-y-5 md:pt-2">
            <p className="text-base sm:text-lg lg:text-[20px] text-zinc-800 font-normal leading-relaxed max-w-xl font-sans">
              Manage your experience from start to finish, from integrations to registration and from interactive stage elements to post-event data, it&apos;s all here.
            </p>
            <div>
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
          <div className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
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

            {/* Right Stadium Pill Mockup (Reduced height) */}
            <div className="lg:col-span-8">
              <div className="relative h-36 sm:h-40 md:h-[175px] rounded-full overflow-hidden bg-gradient-to-r from-[#D8B4E2] via-[#F8C0C8] to-[#93C5FD] p-2 sm:p-2.5 shadow-md border border-zinc-200/60 flex items-center justify-between">
                {/* Left Side: Dark Production Control Panel UI */}
                <div className="w-1/2 h-full bg-[#18181B] rounded-l-full sm:rounded-l-3xl rounded-r-xl p-2.5 sm:p-3 text-white flex flex-col justify-between shadow-xl relative overflow-hidden border border-zinc-800">
                  {/* Top reminder */}
                  <p className="text-[8px] sm:text-[9px] text-zinc-400 leading-tight truncate">
                    Remember to open doors, press record, and invite speakers to the green room
                  </p>

                  {/* Video Tile Box */}
                  <div className="bg-zinc-900 rounded-md p-1.5 flex items-center justify-between border border-zinc-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-5 bg-amber-700/80 rounded relative overflow-hidden shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-800 to-amber-500 opacity-90" />
                      </div>
                      <div className="text-[9px]">
                        <p className="font-semibold text-zinc-100 leading-none truncate">Hype video</p>
                        <p className="text-[8px] text-zinc-400">Video • 00:40</p>
                      </div>
                    </div>
                    <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                      <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>

                  {/* Countdown Timer Row */}
                  <div className="flex items-center justify-between text-[9px] text-zinc-300 px-1">
                    <span className="font-mono text-zinc-400">1:30</span>
                    <span className="text-[8px] text-zinc-400">Countdown timer</span>
                    <span className="text-zinc-500">+</span>
                  </div>

                  {/* Tag Pill */}
                  <div className="absolute top-1/2 right-2 -translate-y-1/2 px-2 py-0.5 rounded-full bg-orange-400 text-black text-[9px] font-bold shadow-md">
                    Producer
                  </div>
                </div>

                {/* Right Side: Big 1:30 Backdrop */}
                <div className="w-1/2 h-full relative flex items-center justify-center overflow-hidden rounded-r-full">
                  <Image
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop"
                    alt="Desert dunes background"
                    fill
                    className="object-cover opacity-75"
                  />
                  <div className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-bold text-[#FFEDD5] tracking-tight font-serif drop-shadow-md">
                    1:30
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Curate */}
          <div className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
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

            {/* Right Stadium Pill Mockup (Reduced height) */}
            <div className="lg:col-span-8">
              <div className="relative h-36 sm:h-40 md:h-[175px] rounded-full overflow-hidden bg-gradient-to-r from-[#F87171] via-[#C084FC] to-[#818CF8] p-2 sm:p-2.5 shadow-md border border-zinc-200/60 flex items-center justify-between">
                {/* Video Call Frame on Laptop */}
                <div className="w-full h-full bg-[#18181B] rounded-full p-2 text-white flex items-center shadow-xl relative overflow-hidden border border-zinc-700/50">
                  {/* Photo of Speaker / Curator */}
                  <div className="relative w-1/2 h-full rounded-l-full overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
                      alt="Curator"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Interactive Poll Component on the right */}
                  <div className="w-1/2 h-full bg-zinc-900/90 backdrop-blur-md rounded-r-full p-2.5 sm:p-3 flex flex-col justify-center space-y-1 border-l border-zinc-800">
                    <p className="text-[10px] sm:text-[11px] font-semibold text-zinc-200 truncate">
                      How are you feeling?
                    </p>
                    <div className="space-y-0.5 text-[8px] sm:text-[9px]">
                      <div className="flex items-center justify-between bg-zinc-800/80 px-1.5 py-0.5 rounded text-zinc-300">
                        <span>Meh</span>
                        <span className="text-zinc-500">2%</span>
                      </div>
                      <div className="flex items-center justify-between bg-zinc-800/80 px-1.5 py-0.5 rounded text-zinc-300">
                        <span>Okay</span>
                        <span className="text-zinc-500">8%</span>
                      </div>
                      <div className="flex items-center justify-between bg-zinc-800/80 px-1.5 py-0.5 rounded text-zinc-300">
                        <span>Pretty good</span>
                        <span className="text-zinc-500">21%</span>
                      </div>
                      <div className="flex items-center justify-between bg-pink-500 text-white font-bold px-1.5 py-0.5 rounded shadow-xs">
                        <span>Great</span>
                        <span>69%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Deliver */}
          <div className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group">
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

            {/* Right Stadium Pill Mockup (Reduced height) */}
            <div className="lg:col-span-8">
              <div className="relative h-36 sm:h-40 md:h-[175px] rounded-full overflow-hidden bg-gradient-to-r from-[#F87171] via-[#991B1B] to-[#1E1B4B] p-2 sm:p-2.5 shadow-md border border-zinc-200/60 flex items-center justify-center">
                {/* Sleek Analytics UI Card */}
                <div className="w-full h-full bg-[#18181B] rounded-full p-3 sm:p-3.5 text-white flex items-center justify-between shadow-xl border border-zinc-800">
                  {/* Left Mini Sidebar */}
                  <div className="w-1/3 border-r border-zinc-800 pr-2.5 space-y-0.5 hidden sm:block">
                    <p className="text-[8px] text-zinc-400">← All events</p>
                    <p className="text-[11px] font-bold text-zinc-100 truncate">Feature Launch</p>
                    <div className="space-y-0.5 text-[7px] text-zinc-500">
                      <p className="text-zinc-300 font-medium">Overview</p>
                      <p>Media</p>
                      <p>Templates</p>
                    </div>
                  </div>

                  {/* Main Analytics Content */}
                  <div className="flex-1 sm:pl-3 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[11px] sm:text-xs font-bold text-white">Analytics</h4>
                      <span className="text-[8px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">Export</span>
                    </div>

                    {/* Engagement Banner */}
                    <div className="bg-zinc-900 rounded p-1 flex items-center justify-between border border-zinc-800 text-[8px]">
                      <span className="text-zinc-400 truncate mr-1">
                        <strong className="text-indigo-400">Engage</strong> Try running a poll
                      </span>
                      <span className="px-1 py-0.5 rounded bg-indigo-600 text-white text-[7px] shrink-0">
                        Add poll
                      </span>
                    </div>

                    {/* 3 Metric Cards */}
                    <div className="grid grid-cols-3 gap-1.5 text-center">
                      <div className="bg-zinc-900/90 rounded p-1 border border-zinc-800">
                        <p className="text-[7px] text-zinc-400 truncate">Avg time</p>
                        <p className="text-[11px] sm:text-xs font-bold text-white font-mono">93m</p>
                      </div>
                      <div className="bg-zinc-900/90 rounded p-1 border border-zinc-800">
                        <p className="text-[7px] text-zinc-400 truncate">Engagements</p>
                        <p className="text-[11px] sm:text-xs font-bold text-white font-mono">1.9</p>
                      </div>
                      <div className="bg-zinc-900/90 rounded p-1 border border-zinc-800">
                        <p className="text-[7px] text-zinc-400 truncate">Attendance</p>
                        <p className="text-[11px] sm:text-xs font-bold text-emerald-400 font-mono">21.3%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
