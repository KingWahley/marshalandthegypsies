'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PROJECTS_DATA } from '@/data/projects';

export const RecentProjects: React.FC = () => {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <section className="pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-18 md:pb-12 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px] space-y-8 sm:space-y-10">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 font-sans">
                Recent Projects &amp; Activations
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 max-w-2xl font-light">
                Explore our landmark regional club takeovers, brand activations, and cultural movements.
              </p>
            </div>

            {/* Desktop Direct Link */}
            <div className="hidden sm:block">
              <Link href="/projects">
                <Button
                  variant="dark"
                  size="md"
                  className="whitespace-nowrap px-8 h-[48px] min-w-[210px] rounded-full font-semibold text-sm inline-flex items-center justify-center gap-2"
                  icon={<ArrowUpRight className="w-4 h-4 shrink-0" />}
                  iconPosition="right"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* ── MOBILE: Horizontal Swipe Carousel (< sm) ── */}
        <ScrollReveal variant="fade-up" delay={150} className="block sm:hidden">
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-pl-1 pb-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="snap-start w-[85vw] max-w-[340px] shrink-0 flex flex-col space-y-3.5 group cursor-pointer"
              >
                {/* Card Cover with curved top-right corner and shadow */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-900 rounded-2xl rounded-tr-[44px] shadow-md group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="85vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Pill Badge */}
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-[11px] font-medium border border-zinc-200/50 shadow-2xs">
                    {project.partnerBadge}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold tracking-tight text-zinc-950 group-hover:text-[#833AB4] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Action Link */}
                <div className="pt-0.5">
                  <span className="text-xs font-semibold text-[#833AB4] inline-flex items-center gap-1">
                    <span>Explore Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* ── DESKTOP / TABLET: 3-Column Grid (sm+) ── */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {featuredProjects.map((project, idx) => (
            <ScrollReveal
              key={project.slug}
              variant="fade-up"
              delay={idx * 150}
              className="w-full"
            >
              <ProjectCard
                project={project}
                showPreview={false}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile View All Projects Button */}
        <ScrollReveal variant="fade-up" delay={200} className="block sm:hidden pt-2">
          <Link href="/projects" className="block w-full">
            <Button
              variant="dark"
              size="lg"
              className="w-full h-[52px] rounded-[15px] font-semibold whitespace-nowrap"
              icon={<ArrowUpRight className="w-4 h-4 shrink-0" />}
              iconPosition="right"
            >
              View All Projects
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};
