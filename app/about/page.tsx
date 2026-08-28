'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, Zap, Layers, Sparkles, Target, Compass, Users, Crown } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-yellow-300 selection:text-black">
      <Navbar />

      <main>
        {/* ── Hero Section ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
          {/* Background image */}
          <Image
            src="/images/NEXGEN-8168.jpg"
            alt="MGE nightlife crowd and stage atmosphere"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top opacity-40"
          />

          {/* Dark gradient & tint overlay */}
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
              <Badge variant="yellow" className="text-[10px] tracking-widest">
                The Mother of Nightlife
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-black tracking-tight text-white leading-[1.05] uppercase">
                Where Culture, Talent, &amp; Premium Experience Converge.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
                Marshall &amp; The Gypsies (M&amp;G) Entertainment is a premier, full-service entertainment powerhouse and lifestyle institution setting the tempo for modern nightlife.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full sm:w-auto">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full bg-[#FFFD63] text-black hover:bg-yellow-300 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold shadow-sm w-full sm:w-auto"
                >
                  Our Services
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full border border-zinc-700 text-white hover:bg-white/10 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold w-full sm:w-auto"
                  onClick={() => {
                    const el = document.getElementById('overview');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom curved edge */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[24px]" />
        </section>

        {/* ── 1. Executive Overview ── */}
        <section id="overview" className="py-16 md:py-24 bg-white border-b border-zinc-100">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 font-sans leading-tight">
                  Setting the Tempo for Modern Nightlife.
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-zinc-700 leading-relaxed font-light">
                  <p>
                    Marshall &amp; The Gypsies (M&amp;G) Entertainment is a premier, full-service entertainment powerhouse and lifestyle institution. Renowned as the &ldquo;Mother of Nightlife&rdquo;, the brand has established itself as the beating heart of experiential entertainment, high-energy events, and elite talent curation.
                  </p>
                  <p>
                    Through our dynamic, integrated service ecosystem, M&amp;G Entertainment conceptualizes, structures, and executes unmatched lifestyle experiences. We do not just participate in the entertainment industry; we set the tempo, manage the stages, and engineer the platforms where culture is made.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FFFD63]/25 border border-yellow-200/80 space-y-2">
                  <p className="text-sm font-semibold text-zinc-900 italic">
                    &ldquo;We engineer the platforms where culture is made — bringing street authenticity and elite sophistication into one unforgettable standard.&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column Visual Mockup */}
              <div className="lg:col-span-6 -mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full">
                <div className="relative aspect-4/3 rounded-none sm:rounded-[21px] overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-100 group">
                  <Image
                    src="/images/NEXGEN-8244.jpg"
                    alt="MGE Executive event showcase and audience"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#FFFD63]">
                      Institutional Excellence
                    </p>
                    <p className="text-lg sm:text-xl font-bold tracking-tight">
                      Full-Service Entertainment Powerhouse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Mission & Vision Pillars ── */}
        <section className="py-16 md:py-24 bg-zinc-50 border-b border-zinc-100">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 font-sans">
                Our Mission &amp; Vision
              </h2>
              <p className="text-sm sm:text-base text-zinc-600">
                Guiding every activation, contract, stage build, and cultural movement we launch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="p-8 sm:p-10 rounded-[21px] bg-white border border-zinc-200/80 shadow-sm space-y-5 relative overflow-hidden group hover:border-zinc-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#FFFD63] flex items-center justify-center text-black font-black">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed font-light">
                  To continuously elevate the standards of entertainment and lifestyle management by delivering seamless, high-caliber experiences that empower talent and captivate audiences.
                </p>
                <div className="pt-2 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span>High-Caliber Execution</span>
                </div>
              </div>

              {/* Vision Card */}
              <div className="p-8 sm:p-10 rounded-[21px] bg-white border border-zinc-200/80 shadow-sm space-y-5 relative overflow-hidden group hover:border-zinc-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center text-white font-black">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-base text-zinc-600 leading-relaxed font-light">
                  To remain the unrivaled benchmark of nightlife, cultivating a legacy where creativity is heavily protected, commercially viable, and culturally groundbreaking.
                </p>
                <div className="pt-2 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#833AB4]" />
                  <span>Protected Creative Legacy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. The Brand DNA ── */}
        <section className="py-16 md:py-24 bg-white border-b border-zinc-100">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="max-w-3xl space-y-4 mb-12 text-left">
              <Badge variant="yellow" className="text-[10px] tracking-widest uppercase">
                Brand DNA
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 font-sans">
                What Defines Us
              </h2>
              <p className="text-base sm:text-lg text-zinc-700 font-light max-w-2xl leading-relaxed">
                Premium. Magnetic. Structured. Unapologetic. Defensive of its talent, and deeply rooted in the energy of the streets and the sophistication of elite and powerful nightlife.
              </p>
            </div>

            {/* DNA Attribute Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Premium & Elevated',
                  desc: 'Uncompromising standards across venue selection, staging, acoustic architecture, VIP hospitality, and crowd experience.',
                  icon: <Crown className="w-5 h-5 text-amber-500" />,
                },
                {
                  title: 'Magnetic Energy',
                  desc: 'We understand the social pulse and cultural trends that turn ordinary mid-week nights and weekends into viral, legendary moments.',
                  icon: <Zap className="w-5 h-5 text-yellow-500" />,
                },
                {
                  title: 'Structured Architecture',
                  desc: 'Rigorous budget architecture, vendor networks, legal backing, and turnkey logistics that ensure flawless execution.',
                  icon: <Layers className="w-5 h-5 text-[#833AB4]" />,
                },
                {
                  title: 'Unapologetic Style',
                  desc: 'Bold, trendsetting concepts like Gypsy Night and The Sensory Vault that assert cultural dominance and high-impact identity.',
                  icon: <ShieldCheck className="w-5 h-5 text-pink-500" />,
                },
                {
                  title: 'Defensive of Talent',
                  desc: 'An elite commercial shield offering intellectual property protection, legal support, and clear commission structures.',
                  icon: <Users className="w-5 h-5 text-emerald-500" />,
                },
                {
                  title: 'Street & Elite Fusion',
                  desc: 'Rooted directly in raw street energy and elevated by the prestige of five-star lounge hospitality and world-class production.',
                  icon: <Target className="w-5 h-5 text-[#833AB4]" />,
                },
              ].map((dna, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-[21px] bg-zinc-50 border border-zinc-200/70 space-y-3 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-xs">
                    {dna.icon}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    {dna.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                    {dna.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Why Partners & Clients Choose M&G ── */}
        <section className="py-16 md:py-24 bg-zinc-950 text-white border-b border-zinc-900">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="max-w-3xl space-y-4 mb-14 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-sans uppercase">
                Why Partners &amp; Clients Choose M&amp;G
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
                We bridge the gap between creative ambition and commercial invulnerability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-[21px] bg-zinc-900/90 border border-zinc-800 space-y-5 flex flex-col justify-between group hover:border-[#FFFD63]/50 transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFD63] text-black flex items-center justify-center font-bold">
                    01
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    The Power of Integration
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    Unlike traditional agencies, M&amp;G controls the entire supply chain of entertainment. We manage the venue, rent the logistics, book the talent, design the marketing, and coordinate the event fully in-house.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/80 text-xs text-[#FFFD63] font-semibold flex items-center gap-1">
                  <span>End-to-End Control</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="p-8 rounded-[21px] bg-zinc-900/90 border border-zinc-800 space-y-5 flex flex-col justify-between group hover:border-[#FFFD63]/50 transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFD63] text-black flex items-center justify-center font-bold">
                    02
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    The Protective Standard
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    For talents, we offer an institutional shield. From standard protection under Model A (Talent-Covered) to high-end execution under Model B (Management-Funded), M&amp;G bears the operational pressure so creatives can focus purely on their art.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/80 text-xs text-[#FFFD63] font-semibold flex items-center gap-1">
                  <span>Model A &amp; Model B Backing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="p-8 rounded-[21px] bg-zinc-900/90 border border-zinc-800 space-y-5 flex flex-col justify-between group hover:border-[#FFFD63]/50 transition-all">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFD63] text-black flex items-center justify-center font-bold">
                    03
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Unrivaled PR Reach
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">
                    Backed by strategic alliances with top-tier networks and elite digital tastemakers, M&amp;G boasts a direct, highly engaged pipeline to the youth demographic, lifestyle creators, and high-net-worth attendees.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/80 text-xs text-[#FFFD63] font-semibold flex items-center gap-1">
                  <span>Direct Cultural Pipeline</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Edge-to-Edge Visual Gallery Strip ── */}
        <section className="py-0 bg-white overflow-hidden border-t border-zinc-100">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
            {[
              '/images/NEXGEN-8090.jpg',
              '/images/NEXGEN-8121.jpg',
              '/images/NEXGEN-8180.jpg',
              '/images/NEXGEN-8215.jpg',
              '/images/NEXGEN-8237.jpg',
              '/images/NEXGEN-8261.jpg',
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt={`MGE nightlife moment ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Closing Call to Action ── */}
        <section className="py-20 md:py-28 bg-[#FFFD63] text-zinc-950 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
            <Badge variant="outline" className="text-[10px] tracking-widest border-zinc-900 text-zinc-950 font-bold uppercase">
              Partner with the Mother of Nightlife
            </Badge>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-tight font-sans text-zinc-950">
              Let&apos;s Create Culture Together
            </h2>
            <p className="text-base sm:text-lg text-zinc-800 max-w-2xl mx-auto leading-relaxed font-normal">
              Whether you are looking to host a high-impact club tour, book top-tier talent, or transform your venue operations — M&amp;G delivers end-to-end excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 w-full sm:w-auto">
              <Button
                variant="dark"
                size="lg"
                className="bg-black text-white hover:bg-zinc-800 h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold w-full sm:w-auto rounded-[15px] sm:rounded-full"
                onClick={() => {
                  window.location.href = 'mailto:hello@mge-events.com';
                }}
              >
                Get in Touch
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full border border-zinc-900 text-base sm:text-[17px] font-semibold text-zinc-950 hover:bg-black/5 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 w-full sm:w-auto"
              >
                <span>View Our 5 Pillars</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
