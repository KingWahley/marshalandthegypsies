'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Filter } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: 'gypsy' | 'activations' | 'production' | 'talent';
  categoryLabel: string;
  location: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: '/images/NEXGEN-8083.jpg',
    title: 'Gypsy Night Headline Arena',
    category: 'gypsy',
    categoryLabel: 'Gypsy Night',
    location: 'Port Harcourt',
  },
  {
    id: 2,
    src: '/images/NEXGEN-8104.jpg',
    title: 'VIP Lounge & Midnight Social',
    category: 'activations',
    categoryLabel: 'Club Activations',
    location: 'De Flamez Lounge',
  },
  {
    id: 3,
    src: '/images/NEXGEN-8118.jpg',
    title: 'Atmospheric Stage Lighting & Lasers',
    category: 'production',
    categoryLabel: 'Stage & Production',
    location: 'Main Stage Arena',
  },
  {
    id: 4,
    src: '/images/NEXGEN-8158.jpg',
    title: 'Roster DJ Live Showcase',
    category: 'talent',
    categoryLabel: 'Talent & Performers',
    location: 'The Velvet Room',
  },
  {
    id: 5,
    src: '/images/NEXGEN-8186.jpg',
    title: 'Soundcheck & Technical Staging',
    category: 'production',
    categoryLabel: 'Stage & Production',
    location: 'Festival Grounds',
  },
  {
    id: 6,
    src: '/images/NEXGEN-8198.jpg',
    title: 'Crowd Energy at Peak Hour',
    category: 'talent',
    categoryLabel: 'Talent & Performers',
    location: 'Club Tour Stage',
  },
  {
    id: 7,
    src: '/images/NEXGEN-8202.jpg',
    title: 'The Sensory Vault Activation',
    category: 'activations',
    categoryLabel: 'Club Activations',
    location: 'De Flamez Lounge',
  },
  {
    id: 8,
    src: '/images/NEXGEN-8205.jpg',
    title: 'Laser Arrays & Kinetic Trussing',
    category: 'production',
    categoryLabel: 'Stage & Production',
    location: 'Arena Hall',
  },
  {
    id: 9,
    src: '/images/NEXGEN-8210.jpg',
    title: 'Gypsy Night Red Carpet & Arrivals',
    category: 'gypsy',
    categoryLabel: 'Gypsy Night',
    location: 'VIP Boulevard',
  },
  {
    id: 10,
    src: '/images/NEXGEN-8212.jpg',
    title: 'Midnight Beats & Sound Flow',
    category: 'talent',
    categoryLabel: 'Talent & Performers',
    location: 'Club Tour Edition',
  },
  {
    id: 11,
    src: '/images/NEXGEN-8225.jpg',
    title: 'De Flamez Lounge Sensory Activation',
    category: 'activations',
    categoryLabel: 'Club Activations',
    location: 'Sensory Vault',
  },
  {
    id: 12,
    src: '/images/NEXGEN-8243.jpg',
    title: 'Electric Crowd Synergy',
    category: 'gypsy',
    categoryLabel: 'Gypsy Night',
    location: 'Main Arena',
  },
  {
    id: 13,
    src: '/images/NEXGEN-8244.jpg',
    title: 'Stage Production & Backend Logistics',
    category: 'production',
    categoryLabel: 'Stage & Production',
    location: 'Festival Pavilion',
  },
  {
    id: 14,
    src: '/images/NEXGEN-8248.jpg',
    title: 'Hypeman & Artist Sync',
    category: 'talent',
    categoryLabel: 'Talent & Performers',
    location: 'Tour Stage',
  },
  {
    id: 15,
    src: '/images/NEXGEN-8262.jpg',
    title: 'MGE Curated DJ Set',
    category: 'talent',
    categoryLabel: 'Talent & Performers',
    location: 'The Velvet Room',
  },
  {
    id: 16,
    src: '/images/NEXGEN-8270.jpg',
    title: 'Grand Finale Staging & Confetti Blast',
    category: 'production',
    categoryLabel: 'Stage & Production',
    location: 'Gypsy Night Arena',
  },
  {
    id: 17,
    src: '/images/NEXGEN-8096.jpg',
    title: 'Nightlife Fashion & Culture',
    category: 'gypsy',
    categoryLabel: 'Gypsy Night',
    location: 'Lifestyle Lounge',
  },
  {
    id: 18,
    src: '/images/NEXGEN-8164.jpg',
    title: 'Exclusive Booth VIP Experience',
    category: 'activations',
    categoryLabel: 'Club Activations',
    location: 'The Velvet Room',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  }, [activeLightboxIndex, filteredItems.length]);

  const prevLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, nextLightbox, prevLightbox]);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-yellow-300 selection:text-black">
      <Navbar />

      <main>
        {/* ── Hero Banner ── */}
        <section
          className="relative pb-20 md:pb-28 overflow-hidden bg-black text-white"
          style={{ paddingTop: 'calc(8rem + env(safe-area-inset-top, 0px))' }}
        >
          {/* Background image */}
          <Image
            src="/images/NEXGEN-8210.jpg"
            alt="MGE Visual Gallery Archive"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top opacity-35"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />

          {/* Faint grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)',
            }}
          />

          <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="max-w-4xl space-y-6">
              <Badge variant="yellow" className="text-[10px] tracking-widest uppercase">
                Visual Archive
              </Badge>
              <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-[68px] font-black tracking-tight text-white leading-[1.12] sm:leading-[1.05] uppercase">
                The Living Pulse of Nightlife.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
                Explore moments from Gypsy Night, our official Club Tours, live activations, backstage production, and the electric energy of Marshall &amp; The Gypsies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full bg-[#FFFD63] text-black hover:bg-yellow-300 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold shadow-sm w-full sm:w-auto"
                >
                  Book an Activation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full border border-zinc-700 text-white hover:bg-white/10 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold w-full sm:w-auto"
                >
                  <span>Explore 5 Pillars</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom curved edge */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[24px]" />
        </section>

        {/* ── Category Filter Bar ── */}
        <section className="py-6 bg-white border-b border-zinc-100 sticky top-[64px] z-30 backdrop-blur-sm bg-white/90">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 w-full sm:w-auto">
                {[
                  { id: 'all', label: 'All Moments' },
                  { id: 'gypsy', label: 'Gypsy Night' },
                  { id: 'activations', label: 'Club Activations' },
                  { id: 'production', label: 'Stage & Production' },
                  { id: 'talent', label: 'Talent & Performers' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      activeCategory === cat.id
                        ? 'bg-black text-white shadow-xs'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200/60'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              <div className="hidden lg:flex items-center gap-2 text-xs text-zinc-500 font-medium shrink-0">
                <Filter className="w-3.5 h-3.5" />
                <span>Showing {filteredItems.length} moments</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery Grid ── */}
        <section className="py-12 sm:py-16 md:py-20 bg-zinc-50/50">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-4/3 rounded-[21px] overflow-hidden bg-zinc-900 border border-zinc-200/80 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Impact Stats Strip ── */}
        <section className="py-14 sm:py-16 bg-black text-white border-y border-zinc-800">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFFD63] tracking-tight">
                  50+
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 font-light">Major Activations &amp; Tours</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  100k+
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 font-light">Nightlife Attendees Reached</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFFD63] tracking-tight">
                  5
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 font-light">Integrated Service Pillars</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-zinc-400 font-light">In-House Turnkey Operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="py-20 md:py-28 bg-[#FFFD63] text-zinc-950 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
            <Badge variant="outline" className="text-[10px] tracking-widest border-zinc-900 text-zinc-950 font-bold uppercase">
              Host Your Next Legendary Event
            </Badge>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-tight font-sans text-zinc-950">
              Ready to Light Up the Night?
            </h2>
            <p className="text-base sm:text-lg text-zinc-800 max-w-2xl mx-auto leading-relaxed font-normal">
              Book our staging, sound equipment, DJ talent, or partner with us on an official M&amp;G Club Activation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="dark"
                  size="lg"
                  className="bg-black text-white hover:bg-zinc-800 h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold w-full sm:w-auto rounded-[15px] sm:rounded-full"
                >
                  Start a Project
                </Button>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full border border-zinc-900 text-base sm:text-[17px] font-semibold text-zinc-950 hover:bg-black/5 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 w-full sm:w-auto"
              >
                <span>View All Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Interactive Lightbox Modal ── */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Content */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl border border-white/10">
              <Image
                src={filteredItems[activeLightboxIndex].src}
                alt={filteredItems[activeLightboxIndex].title}
                fill
                sizes="(max-width: 1280px) 95vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox caption bar */}
            <div className="w-full pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white text-center sm:text-left">
              <div>
                <p className="text-base sm:text-lg font-bold">
                  {filteredItems[activeLightboxIndex].title}
                </p>
                <p className="text-xs text-zinc-400">
                  {filteredItems[activeLightboxIndex].location} • {filteredItems[activeLightboxIndex].categoryLabel}
                </p>
              </div>
              <p className="text-xs text-zinc-500 font-mono">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
