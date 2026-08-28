'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// 20 Tiles matching the 4 rows x 5 columns grid exactly
type TileType =
  | { type: 'photo'; id: number; src: string; alt: string }
  | {
      type: 'avatar';
      id: number;
      name: string;
      bg: string;
      skin: string;
      hair: string;
      accessory?: 'glasses' | 'turban' | 'cap' | 'hat' | 'beret' | 'headphones' | 'glasses-beard';
    };

const GRID_TILES: TileType[] = [
  // Row 1
  {
    type: 'photo',
    id: 1,
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    alt: 'Woman presenting in meeting',
  },
  {
    type: 'photo',
    id: 2,
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop',
    alt: 'Professional woman in white blazer',
  },
  {
    type: 'avatar',
    id: 3,
    name: 'Marcus',
    bg: 'bg-[#22C55E]',
    skin: '#D97706',
    hair: '#1F2937',
    accessory: 'glasses-beard',
  },
  {
    type: 'photo',
    id: 4,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    alt: 'Man with short beard smiling',
  },
  {
    type: 'avatar',
    id: 5,
    name: 'Maya',
    bg: 'bg-[#3B82F6]',
    skin: '#92400E',
    hair: '#111827',
  },

  // Row 2
  {
    type: 'avatar',
    id: 6,
    name: 'Raj',
    bg: 'bg-[#60A5FA]',
    skin: '#B45309',
    hair: '#1E293B',
    accessory: 'turban',
  },
  {
    type: 'avatar',
    id: 7,
    name: 'Chloe',
    bg: 'bg-[#F472B6]',
    skin: '#FCD34D',
    hair: '#18181B',
    accessory: 'cap',
  },
  {
    type: 'avatar',
    id: 8,
    name: 'Julian',
    bg: 'bg-[#E5E7EB]',
    skin: '#9A3412',
    hair: '#475569',
    accessory: 'hat',
  },
  {
    type: 'avatar',
    id: 9,
    name: 'Elena',
    bg: 'bg-[#FED7AA]',
    skin: '#78350F',
    hair: '#1C1917',
  },
  {
    type: 'photo',
    id: 10,
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    alt: 'Smiling woman with curly hair in warm light',
  },

  // Row 3
  {
    type: 'photo',
    id: 11,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    alt: 'Man with headphones around neck',
  },
  {
    type: 'avatar',
    id: 12,
    name: 'Sophie',
    bg: 'bg-[#FB7185]',
    skin: '#FBBF24',
    hair: '#7C2D12',
    accessory: 'beret',
  },
  {
    type: 'photo',
    id: 13,
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    alt: 'Senior man with headset smiling',
  },
  {
    type: 'photo',
    id: 14,
    src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop',
    alt: 'Man in blue shirt smiling at camera',
  },
  {
    type: 'avatar',
    id: 15,
    name: 'Zoe',
    bg: 'bg-[#F472B6]',
    skin: '#FCD34D',
    hair: '#06B6D4',
  },

  // Row 4
  {
    type: 'avatar',
    id: 16,
    name: 'Martha',
    bg: 'bg-[#FBCFE8]',
    skin: '#FDE68A',
    hair: '#9CA3AF',
    accessory: 'glasses',
  },
  {
    type: 'photo',
    id: 17,
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    alt: 'Woman with wavy blonde hair smiling',
  },
  {
    type: 'avatar',
    id: 18,
    name: 'Leo',
    bg: 'bg-[#FACC15]',
    skin: '#F59E0B',
    hair: '#D97706',
  },
  {
    type: 'avatar',
    id: 19,
    name: 'Sam',
    bg: 'bg-[#60A5FA]',
    skin: '#D97706',
    hair: '#92400E',
    accessory: 'headphones',
  },
  {
    type: 'avatar',
    id: 20,
    name: 'David',
    bg: 'bg-[#34D399]',
    skin: '#B45309',
    hair: '#1F2937',
    accessory: 'glasses-beard',
  },
];

// Helper to render stylized 3D avatar characters
const renderAvatarGraphic = (tile: Extract<TileType, { type: 'avatar' }>) => {
  return (
    <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 drop-shadow-sm" viewBox="0 0 100 100" fill="none">
      {/* Neck & Shoulders */}
      <path
        d="M26 88C26 72 38 70 50 70C62 70 74 72 74 88"
        fill={tile.hair === '#06B6D4' ? '#EC4899' : '#1E293B'}
      />

      {/* Head */}
      <ellipse cx="50" cy="48" rx="20" ry="24" fill={tile.skin} />

      {/* Accessories / Specific Hair */}
      {tile.accessory === 'turban' && (
        <path
          d="M26 38C26 22 36 14 50 14C64 14 74 22 74 38C74 44 68 46 50 46C32 46 26 44 26 38Z"
          fill="#3B82F6"
        />
      )}

      {tile.accessory === 'cap' && (
        <>
          <path d="M26 32C26 22 36 16 50 16C64 16 74 22 74 32Z" fill="#1E293B" />
          <path d="M22 32C32 30 68 30 78 36L72 40L24 36Z" fill="#3B82F6" />
        </>
      )}

      {tile.accessory === 'hat' && (
        <>
          <ellipse cx="50" cy="30" rx="34" ry="8" fill="#78350F" />
          <path d="M34 30C34 18 40 14 50 14C60 14 66 18 66 30Z" fill="#92400E" />
        </>
      )}

      {tile.accessory === 'beret' && (
        <path
          d="M24 32C24 16 42 12 60 16C78 20 78 34 68 36C52 38 28 38 24 32Z"
          fill="#E11D48"
        />
      )}

      {/* Standard Hair if no covering hat */}
      {!['turban', 'cap', 'hat', 'beret'].includes(tile.accessory || '') && (
        <path
          d="M30 38C30 24 38 18 50 18C62 18 70 24 70 38C70 42 66 40 62 34C54 26 46 26 38 34C34 40 30 42 30 38Z"
          fill={tile.hair}
        />
      )}

      {/* Eyes */}
      <circle cx="43" cy="46" r="2.5" fill="#18181B" />
      <circle cx="57" cy="46" r="2.5" fill="#18181B" />

      {/* Glasses */}
      {(tile.accessory === 'glasses' || tile.accessory === 'glasses-beard') && (
        <>
          <circle cx="43" cy="46" r="6" stroke="#18181B" strokeWidth="2" fill="none" />
          <circle cx="57" cy="46" r="6" stroke="#18181B" strokeWidth="2" fill="none" />
          <line x1="49" y1="46" x2="51" y2="46" stroke="#18181B" strokeWidth="2" />
        </>
      )}

      {/* Beard */}
      {tile.accessory === 'glasses-beard' && (
        <path
          d="M36 54C36 68 44 72 50 72C56 72 64 68 64 54C60 56 40 56 36 54Z"
          fill="#18181B"
        />
      )}

      {/* Nose */}
      <ellipse cx="50" cy="51" rx="1.5" ry="2" fill="#78350F" />

      {/* Smile */}
      <path d="M45 58C47 61 53 61 55 58" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />

      {/* Headphones */}
      {tile.accessory === 'headphones' && (
        <>
          <path d="M26 48C26 30 36 22 50 22C64 22 74 30 74 48" stroke="#EF4444" strokeWidth="4" fill="none" />
          <rect x="23" y="44" width="6" height="12" rx="3" fill="#DC2626" />
          <rect x="71" y="44" width="6" height="12" rx="3" fill="#DC2626" />
        </>
      )}
    </svg>
  );
};

export const Hero: React.FC = () => {
  const [activeSidebarIndex, setActiveSidebarIndex] = useState(0);

  const sidebarButtons = [
    {
      name: 'Play',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      ),
      active: true,
    },
    {
      name: 'Video',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Share',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      name: 'React',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
    {
      name: 'Queue',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      ),
    },
    {
      name: 'Chat',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      name: 'Notes',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: 'Record',
      icon: <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />,
    },
  ];

  return (
    <section className="relative bg-white pt-24 sm:pt-32 pb-0 overflow-hidden">
      {/* Top Main Hero Yellow Background stopping at ~50% of the mockup */}
      <div className="absolute top-0 left-0 right-0 h-[68%] sm:h-[66%] md:h-[64%] bg-[#FFFD63] pointer-events-none" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
        {/* Header Text */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10 md:mb-12">
          <h1 className="text-center font-black tracking-tight text-[#0A0B1E] uppercase text-[34px] sm:text-[48px] lg:text-[63.11px] lg:leading-[71.11px] font-sans">
            THE MOTHER OF NIGHTLIFE
          </h1>
          <div className="text-center text-[#0A0B1E] text-[15px] sm:text-[16px] font-light leading-[24.89px] max-w-2xl mx-auto space-y-1">
            <p>Where culture, talent, and premium experiences converge.</p>
            <p>
              We create, curate, and execute unforgettable moments that set the tempo for modern nightlife.
            </p>
          </div>

          {/* Buttons: Get Started & How It Works */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-full bg-black text-white hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-medium gap-3 shadow-sm"
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
              className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-full bg-white text-[#0A0B1E] border border-zinc-200 hover:bg-zinc-50 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-medium shadow-sm"
              onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>How It Works</span>
            </button>
          </div>
        </div>

        {/* Large Rounded Yellow Frame Container */}
        <div className="relative bg-[#FFFD6A] rounded-[21px] p-3.5 sm:p-6 md:p-8 pb-0 sm:pb-0 md:pb-0 shadow-2xl border border-yellow-300/40 overflow-hidden">
          {/* Inner White Dashboard App Mockup */}
          <div className="bg-white rounded-t-[21px] rounded-b-none shadow-xl border-t border-l border-r border-black/5 overflow-hidden flex flex-col">
            {/* Main Application Area (Sidebar + Content Grid) */}
            <div className="flex flex-1 min-h-[460px] sm:min-h-[520px]">
              {/* Left Vertical App Sidebar */}
              <div className="w-12 sm:w-16 border-r border-zinc-100 p-2 sm:p-2.5 flex flex-col items-center justify-between shrink-0 bg-white">
                {/* Brand Shape */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFFD63] border border-black/15 flex items-center justify-center shadow-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-900" />
                </div>

                {/* Sidebar Navigation Icons */}
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 my-auto">
                  {sidebarButtons.map((btn, index) => {
                    const isSelected = index === activeSidebarIndex;
                    return (
                      <button
                        key={btn.name}
                        onClick={() => setActiveSidebarIndex(index)}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#10B981] text-white shadow-xs'
                            : 'text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100'
                        }`}
                        title={btn.name}
                        aria-label={btn.name}
                      >
                        {btn.icon}
                        <span className="text-[8px] font-semibold mt-0.5 leading-none hidden sm:block">
                          {btn.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Dot */}
                <div className="w-2 h-2 rounded-full bg-zinc-300" />
              </div>

              {/* Center Dashboard Workspace */}
              <div className="flex-1 p-3 sm:p-5 md:p-6 pb-2.5 sm:pb-3 flex flex-col justify-between bg-white">
                {/* Top Control Bar */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-3 border-b border-zinc-100">
                  {/* Left Pill: Welcome & Check-in */}
                  <div className="inline-flex items-center bg-zinc-100/90 rounded-full pl-3 pr-3.5 py-1 text-xs border border-zinc-200/60 shadow-xs">
                    <span className="font-semibold text-zinc-900 mr-2.5 text-[11px] sm:text-xs">
                      Welcome &amp; check-in
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-500 font-mono">
                      01:20 / 5 min
                    </span>
                  </div>

                  {/* Right Header Controls */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {/* Layout switch icons */}
                    <div className="hidden sm:flex items-center bg-zinc-100 rounded-full p-1 border border-zinc-200/60">
                      <button className="w-5 h-5 rounded-full bg-white shadow-xs flex items-center justify-center text-zinc-700">
                        <span className="w-2 h-2 rounded-xs bg-zinc-700" />
                      </button>
                      <button className="w-5 h-5 rounded-full flex items-center justify-center text-zinc-400">
                        <span className="w-2 h-2 rounded-xs border border-zinc-400" />
                      </button>
                    </div>

                    {/* Attendees Pill */}
                    <div className="inline-flex items-center gap-1 bg-zinc-100 rounded-full px-2.5 py-1 text-[11px] font-semibold text-zinc-700 border border-zinc-200/60">
                      <svg className="w-3 h-3 text-zinc-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span>12/10</span>
                    </div>

                    {/* Pink End/Action Pill */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FB7185] flex items-center justify-center text-white shadow-xs cursor-pointer hover:bg-rose-500 transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* 4 Rows x 5 Columns Video & Avatar Tiles Grid */}
                <div className="grid grid-cols-5 gap-2 sm:gap-2.5 md:gap-3 flex-1 items-stretch">
                  {GRID_TILES.map((tile) => (
                    <div
                      key={tile.id}
                      className="group relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      {tile.type === 'photo' ? (
                        <Image
                          src={tile.src}
                          alt={tile.alt}
                          fill
                          sizes="(max-width: 768px) 18vw, 120px"
                          className="object-cover"
                        />
                      ) : (
                        <div className={`w-full h-full ${tile.bg} flex items-center justify-center p-1 sm:p-2`}>
                          {renderAvatarGraphic(tile)}
                        </div>
                      )}

                      {/* Subtle hover mic / status indicator */}
                      <div className="absolute bottom-1.5 right-1.5 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Carousel / Pagination Navigation */}
                <div className="flex items-center justify-center gap-2 pt-3 pb-1">
                  <button
                    className="w-5 h-5 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-700 text-xs font-bold transition-colors"
                    aria-label="Previous page"
                  >
                    ‹
                  </button>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  </div>
                  <button
                    className="w-5 h-5 rounded-full flex items-center justify-center text-zinc-700 hover:text-black text-xs font-bold transition-colors"
                    aria-label="Next page"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
