'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PROJECTS_DATA } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-yellow-300 selection:text-black">
      <Navbar />

      <main>
        {/* ── Hero Section (CSS-first Stagger for Immediate Paint) ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
          <Image
            src="/images/NEXGEN-8243.jpg"
            alt="MGE Brand Track Record and Milestones"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top opacity-35 animate-hero-image-scale"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />

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
              <div className="animate-hero-fade-up">
                <Badge variant="yellow" className="text-[10px] tracking-widest uppercase">
                  Brand Track Record
                </Badge>
              </div>

              <h1
                className="text-[26px] sm:text-4xl md:text-5xl lg:text-[68px] font-black tracking-tight text-white leading-[1.12] sm:leading-[1.05] uppercase animate-hero-fade-up"
                style={{ animationDelay: '150ms' }}
              >
                Notable Milestones &amp; Strategic Alliances.
              </h1>

              <p
                className="text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl animate-hero-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                Our reputation as the &ldquo;Mother of Nightlife&rdquo; is backed by a proven track record of flawless execution, massive regional tours, and high-profile global brand partnerships.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[24px]" />
        </section>

        {/* ── Project Cards Grid ── */}
        <section className="py-14 sm:py-20 md:py-24 bg-zinc-50/50">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px] space-y-12">
            <ScrollReveal variant="fade-up" delay={0}>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200/80 pb-6">
                <div>
                  <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase font-mono">
                    Featured Case Studies
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 mt-1">
                    Selected Projects &amp; Activations
                  </h2>
                </div>
                <p className="text-xs text-zinc-500 font-mono">
                  {PROJECTS_DATA.length} Landmark Initiatives
                </p>
              </div>
            </ScrollReveal>

            {/* 3-Column Editorial Grid with Preview Text Enabled */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {PROJECTS_DATA.map((project, idx) => (
                <ScrollReveal
                  key={project.slug}
                  variant="fade-up"
                  delay={idx * 120}
                  className="w-full"
                >
                  <ProjectCard
                    project={project}
                    showPreview={true}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="py-20 md:py-28 bg-[#FFFD63] text-zinc-950 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
            <ScrollReveal variant="fade-up" delay={0}>
              <Badge variant="outline" className="text-[10px] tracking-widest border-zinc-900 text-zinc-950 font-bold uppercase">
                Flawless Brand Partnerships
              </Badge>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-tight font-sans text-zinc-950">
                Ready to Launch Your Next Milestone?
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={250}>
              <p className="text-base sm:text-lg text-zinc-800 max-w-2xl mx-auto leading-relaxed font-normal">
                Whether conceptualizing a multi-city club takeover or securing enterprise brand sponsorships, M&amp;G provides turnkey execution.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={350}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="dark"
                    size="lg"
                    className="bg-black text-white hover:bg-zinc-800 h-[52px] sm:h-[56px] px-8 sm:px-9 text-base sm:text-[17px] font-semibold w-full sm:w-auto rounded-[15px] sm:rounded-full"
                  >
                    Contact Management
                  </Button>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full border border-zinc-900 text-base sm:text-[17px] font-semibold text-zinc-950 hover:bg-black/5 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 w-full sm:w-auto"
                >
                  <span>View 5 Pillars</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
