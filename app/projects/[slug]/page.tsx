'use client';

import React, { useState, useEffect, useCallback, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Calendar,
  Building,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PROJECTS_DATA, Project } from '@/data/projects';

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const project: Project | undefined = PROJECTS_DATA.find(
    (p) => p.slug === resolvedParams.slug
  );

  const [selectedVenueIndex, setSelectedVenueIndex] = useState<number>(0);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  if (!project) {
    notFound();
  }

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null && prev < project.gallery.length - 1 ? prev + 1 : 0
    );
  }, [activeLightboxIndex, project.gallery.length]);

  const prevLightbox = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : project.gallery.length - 1
    );
  }, [activeLightboxIndex, project.gallery.length]);

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
        {/* ── Project Details Hero ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
          <Image
            src={project.coverImage}
            alt={project.title}
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
              {/* Back to Projects link */}
              <div className="animate-hero-fade-up">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full border border-white/10"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to All Projects</span>
                </Link>
              </div>

              <div
                className="flex flex-wrap items-center gap-3 animate-hero-fade-up"
                style={{ animationDelay: '100ms' }}
              >
                <Badge variant="yellow" className="text-[10px] tracking-widest uppercase">
                  {project.partnerBadge}
                </Badge>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FFFD63]" />
                  <span>{project.date}</span>
                </span>
              </div>

              <h1
                className="text-[26px] sm:text-4xl md:text-5xl lg:text-[64px] font-black tracking-tight text-white leading-[1.12] sm:leading-[1.08] uppercase animate-hero-fade-up"
                style={{ animationDelay: '200ms' }}
              >
                {project.title}
              </h1>

              <p
                className="text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl animate-hero-fade-up"
                style={{ animationDelay: '300ms' }}
              >
                {project.subtitle}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[24px]" />
        </section>

        {/* ── Project Main Breakdown ── */}
        <section className="py-14 sm:py-20 md:py-24 bg-zinc-50/50">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px] space-y-16">
            {/* Top Details Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Narrative & Highlights */}
              <ScrollReveal variant="fade-up" delay={0} className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                    Project Overview
                  </h2>
                  <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-light">
                    {project.description}
                  </p>
                  {project.detailedOverview.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base text-zinc-600 leading-relaxed font-light"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="space-y-4 pt-4 border-t border-zinc-200/70">
                  <p className="text-xs font-bold tracking-wider uppercase text-zinc-400">
                    Execution Highlights
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyHighlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-zinc-200/80 shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-zinc-800 font-medium leading-snug">
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column: Impact Metrics with Brand Logos */}
              <ScrollReveal variant="fade-up" delay={150} className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[24px] border border-zinc-200/80 shadow-md space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    Key Performance Metrics
                  </h3>
                  <Flame className="w-5 h-5 text-amber-500" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-1.5 flex flex-col justify-between"
                    >
                      {m.isLogo && m.logoSrc ? (
                        <div className="h-10 flex items-center">
                          <Image
                            src={m.logoSrc}
                            alt={m.value}
                            width={120}
                            height={40}
                            className="h-8 w-auto max-w-[120px] object-contain"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <p className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                          {m.value}
                        </p>
                      )}
                      <p className="text-xs text-zinc-500 font-light leading-tight">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* ── Multi-Venue Breakdown (if venues exist) ── */}
            {project.venues && project.venues.length > 0 && (
              <ScrollReveal variant="fade-up" delay={0} className="space-y-6 pt-8 border-t border-zinc-200/80">
                <div className="space-y-2">
                  <Badge variant="default" className="text-[10px] tracking-widest uppercase">
                    Tour Route &amp; Takeovers
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                    The Four Regional Venue Takeovers
                  </h3>
                </div>

                {/* Venue Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.venues.map((venue, vIdx) => (
                    <button
                      key={venue.name}
                      type="button"
                      onClick={() => setSelectedVenueIndex(vIdx)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedVenueIndex === vIdx
                          ? 'bg-black text-white border-black shadow-md'
                          : 'bg-white text-zinc-900 border-zinc-200 hover:border-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-mono mb-1 opacity-70">
                        <Building className="w-3.5 h-3.5" />
                        <span>Stop 0{vIdx + 1}</span>
                      </div>
                      <p className="font-bold text-sm sm:text-base leading-tight">
                        {venue.name}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Active Venue Spotlight */}
                {project.venues[selectedVenueIndex] && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-[24px] border border-zinc-200/80 shadow-lg">
                    <div className="md:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden bg-zinc-900">
                      <Image
                        src={project.venues[selectedVenueIndex].image}
                        alt={project.venues[selectedVenueIndex].name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="md:col-span-6 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-red-500" />
                        <span>{project.venues[selectedVenueIndex].tagline}</span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                        {project.venues[selectedVenueIndex].name}
                      </h4>
                      <p className="text-base text-zinc-700 leading-relaxed font-light">
                        {project.venues[selectedVenueIndex].details}
                      </p>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            )}

            {/* ── Project Visual Gallery ── */}
            <div className="space-y-6 pt-8 border-t border-zinc-200/80">
              <ScrollReveal variant="fade-up" delay={0}>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                  Visual Archive &amp; Moments
                </h3>
              </ScrollReveal>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((img, imgIdx) => (
                  <ScrollReveal
                    key={imgIdx}
                    variant="fade-up"
                    delay={imgIdx * 80}
                    className="w-full"
                  >
                    <div
                      onClick={() => openLightbox(imgIdx)}
                      className="group relative aspect-4/3 rounded-[21px] overflow-hidden bg-zinc-900 border border-zinc-200/80 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer"
                    >
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* ── Other Projects & Activations ── */}
            <div className="space-y-8 pt-12 border-t border-zinc-200/80">
              <ScrollReveal variant="fade-up" delay={0}>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-zinc-400 uppercase font-mono">
                      Explore More
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mt-1">
                      Other Projects &amp; Activations
                    </h3>
                  </div>
                  <Link
                    href="/projects"
                    className="text-xs sm:text-sm font-semibold text-zinc-700 hover:text-black transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View All Projects</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* 2-Column Responsive Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                {PROJECTS_DATA.filter((p) => p.slug !== project.slug).map((otherProj, oIdx) => (
                  <ScrollReveal
                    key={otherProj.slug}
                    variant="fade-up"
                    delay={oIdx * 120}
                    className="w-full"
                  >
                    <Link
                      href={`/projects/${otherProj.slug}`}
                      className="group flex flex-col space-y-4 cursor-pointer"
                    >
                      {/* Card Cover Image with asymmetric top-right rounded corner */}
                      <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-900 rounded-2xl rounded-tr-[48px] sm:rounded-tr-[56px] shadow-xs">
                        <Image
                          src={otherProj.coverImage}
                          alt={otherProj.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Pill Badge */}
                      <div>
                        <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-100/90 text-zinc-700 text-xs font-medium border border-zinc-200/50">
                          {otherProj.partnerBadge}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="space-y-1.5 flex-1">
                        <h4 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 group-hover:text-[#833AB4] transition-colors leading-snug">
                          {otherProj.title}
                        </h4>
                      </div>

                      {/* Bottom Link */}
                      <div className="pt-1">
                        <span className="text-sm font-semibold text-[#833AB4] group-hover:text-[#6D28D9] transition-colors inline-flex items-center gap-1">
                          <span>Explore Project</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="py-20 md:py-28 bg-[#FFFD63] text-zinc-950 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
            <ScrollReveal variant="fade-up" delay={0}>
              <Badge variant="outline" className="text-[10px] tracking-widest border-zinc-900 text-zinc-950 font-bold uppercase">
                Partner With MGE
              </Badge>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={150}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-tight font-sans text-zinc-950">
                Ready to Create the Next Cultural Benchmark?
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={250}>
              <p className="text-base sm:text-lg text-zinc-800 max-w-2xl mx-auto leading-relaxed font-normal">
                From exclusive multi-venue tours to high-fashion signature activations, we engineer the platforms where culture happens.
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
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full border border-zinc-900 text-base sm:text-[17px] font-semibold text-zinc-950 hover:bg-black/5 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 sm:px-9 w-full sm:w-auto"
                >
                  <span>All Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* ── Interactive Lightbox Modal ── */}
      {activeLightboxIndex !== null && project.gallery[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

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

          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl border border-white/10">
              <Image
                src={project.gallery[activeLightboxIndex].src}
                alt={project.gallery[activeLightboxIndex].caption}
                fill
                sizes="(max-width: 1280px) 95vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            <div className="w-full pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white text-center sm:text-left">
              <div>
                <p className="text-base sm:text-lg font-bold">
                  {project.gallery[activeLightboxIndex].caption}
                </p>
                <p className="text-xs text-zinc-400">
                  {project.title} • {project.date}
                </p>
              </div>
              <p className="text-xs text-zinc-500 font-mono">
                {activeLightboxIndex + 1} / {project.gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
