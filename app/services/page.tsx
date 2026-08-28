'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { PillarCard } from '@/components/shared/PillarCard';

// ─── Data ─────────────────────────────────────────────────────────────────────
const PILLARS = [
  {
    number: '01',
    title: 'Nightlife Enthusiasm',
    description:
      'M&G is the curator of premium energy. We design and pilot high-end club activations, themed nightlife concepts, and curated social experiences. As the "Mother of Nightlife", we understand the social dynamics and cultural trends that turn ordinary nights into legendary cultural moments.',
    imageSrc: '/images/NEXGEN-8104.jpg',
    imageAlt: 'Premium nightlife club activation',
    imageRight: false,
    subPrograms: [
      {
        name: 'The Velvet Room',
        description:
          'Our exclusive, signature weekly club activation designed to keep the brand\'s premium nightlife presence active, consistent, and highly sought-after.',
      },
      {
        name: 'The Official M&G Club Tour',
        description:
          'The institutional showcase of Marshall & The Gypsies Entertainment. This traveling showcase projects our identity as the "Mother of Nightlife" across major club venues.',
      },
      {
        name: 'Happy Hour: The Sensory Vault',
        description:
          'Our acclaimed, high-energy Thursday one-night activation hosted at the premium De Flamez Lounge. Sponsored by Jarrow Wine — a curated blend of taste, sound, and atmosphere.',
      },
    ],
  },
  {
    number: '02',
    title: 'Events Management',
    description:
      'From conceptualization to absolute execution, M&G manages the entire lifecycle of major events — including creative design, technical setup, PR, budget architecture, vendor access, and crowd control.',
    imageSrc: '/images/NEXGEN-8118.jpg',
    imageAlt: 'Large-scale event production',
    imageRight: true,
    subPrograms: [
      {
        name: 'Gypsy Night — Our Signature Event',
        description:
          'The Ultimate Nightlife Experience. A premium lifestyle gathering centered around fashion, beauty, lifestyle, and music — always preceded by a strategic Club Tour Phase.',
      },
      {
        name: 'Premium Concerts & Themed Series',
        description:
          'Large-scale productions and curated festival formats, including the highly anticipated Juicy Experience and the England vs. Argentina themed series.',
      },
    ],
  },
  {
    number: '03',
    title: 'Talent Management',
    description:
      'An elite, protective, and commercial engine for top-tier entertainers. M&G represents a highly curated roster of Musical Artists, DJs, Hypemen, Models, Dance Art, and Magicians — under an annual renewal cycle supported by a robust legal framework.',
    imageSrc: '/images/NEXGEN-8158.jpg',
    imageAlt: 'Elite talent curation and management',
    imageRight: false,
    subPrograms: [
      {
        name: 'Intellectual Property Protection',
        description:
          'We protect our talent\'s IP and manage bookings under clear commission models with full administrative and personal career backing.',
      },
      {
        name: 'Curated Roster',
        description:
          'Musical Artists, DJs, Hypemen, Models, Dance Art, and Magicians — each carefully vetted and developed for longevity.',
      },
    ],
  },
  {
    number: '04',
    title: 'Venue & Facility Management',
    description:
      'We offer professional operations management for premium venues, nightclubs, lounges, and event spaces. Our management ensures that facilities maintain high-class standards, optimal layout efficiency, strict security protocols, and maximum revenue generation.',
    imageSrc: '/images/NEXGEN-8243.jpg',
    imageAlt: 'Premium venue and facility management',
    imageRight: true,
    subPrograms: [],
  },
  {
    number: '05',
    title: 'Procurement & Logistics Rentals',
    description:
      'The backbone of our physical operations. M&G owns and leases high-grade technical assets, sound systems, lighting rigs, staging equipment, and backend logistics solutions. This internal division ensures our events and signed talents are always backed by premium gear without relying on third-party limitations.',
    imageSrc: '/images/NEXGEN-8270.jpg',
    imageAlt: 'Professional staging and sound equipment logistics',
    imageRight: false,
    subPrograms: [],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-yellow-300 selection:text-black">
      <Navbar />

      <main>
        {/* ── Hero Banner ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
          {/* Background image — lowest layer */}
          <Image
            src="/images/services-hero.jpg"
            alt="MGE nightlife services hero background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top opacity-50"
          />

          {/* Black tint overlay */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

          {/* Faint grid texture — light grid lines on dark background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)',
            }}
          />

          <div className="relative max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="max-w-3xl space-y-6">
              <Badge variant="yellow" className="text-[10px] tracking-widest">
                Our Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-black tracking-tight text-white leading-[1.06] uppercase">
                Five Pillars.<br />One Empire.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
                Marshall &amp; The Gypsies operates across five seamlessly integrated service pillars — each designed to amplify culture, protect talent, and deliver unforgettable experiences at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
                <button
                  type="button"
                  className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full bg-[#FFFD63] text-black hover:bg-yellow-300 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold shadow-sm w-full sm:w-auto"
                  onClick={() => {
                    const el = document.getElementById('pillar-01');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book a Consultation
                </button>
                <Link
                  href="#pillar-01"
                  className="inline-flex items-center justify-center gap-2 cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full border border-zinc-700 text-white hover:bg-white/10 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold w-full sm:w-auto"
                >
                  <span>Explore Pillars</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom curved edge */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[24px]" />
        </section>

        {/* ── Quick-nav Pill Strip ── */}
        <section className="py-6 bg-white border-b border-zinc-100 sticky top-[64px] z-30 backdrop-blur-sm bg-white/90">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              {PILLARS.map((p) => (
                <Link
                  key={p.number}
                  href={`#pillar-${p.number}`}
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all duration-200"
                >
                  <span className="text-[10px] text-zinc-400 font-mono">{p.number}</span>
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pillars ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px] space-y-10 md:space-y-14">
            {PILLARS.map((pillar) => (
              <div key={pillar.number} id={`pillar-${pillar.number}`} className="scroll-mt-32">
                <PillarCard
                  number={pillar.number}
                  title={pillar.title}
                  description={pillar.description}
                  imageSrc={pillar.imageSrc}
                  imageAlt={pillar.imageAlt}
                  imageRight={pillar.imageRight}
                  subPrograms={pillar.subPrograms}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery Strip ── */}
        <section className="py-0 bg-white overflow-hidden border-t border-zinc-100">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
            {[
              '/images/NEXGEN-8083.jpg',
              '/images/NEXGEN-8096.jpg',
              '/images/NEXGEN-8186.jpg',
              '/images/NEXGEN-8212.jpg',
              '/images/NEXGEN-8225.jpg',
              '/images/NEXGEN-8248.jpg',
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt={`MGE gallery ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 md:py-28 bg-zinc-950 text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px] text-center space-y-6">
            <Badge variant="yellow" className="text-[10px] tracking-widest">
              Ready to work together?
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
              Let&apos;s Build Something<br />Legendary
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
              From a single club night to a multi-city tour — bring us your vision and we&apos;ll handle everything else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#FFFD63] text-black hover:bg-yellow-300 h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold w-full sm:w-auto rounded-[15px] sm:rounded-full"
                onClick={() => {
                  window.location.href = 'mailto:hello@mge-events.com';
                }}
              >
                Get in Touch
              </Button>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full border border-zinc-700 text-base sm:text-[17px] font-semibold text-zinc-300 hover:border-white hover:text-white transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 w-full sm:w-auto"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
