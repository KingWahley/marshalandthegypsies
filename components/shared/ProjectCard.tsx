'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  showPreview?: boolean;
  className?: string;
  imageSizes?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  showPreview = false,
  className = '',
  imageSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex flex-col space-y-4 cursor-pointer ${className}`}
    >
      {/* Card Cover Image with asymmetric top-right rounded corner and rich shadow */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-900 rounded-2xl rounded-tr-[48px] sm:rounded-tr-[56px] shadow-md group-hover:shadow-xl transition-all duration-300">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes={imageSizes}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Pill Badge */}
      <div>
        <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-zinc-100/90 text-zinc-700 text-xs font-medium border border-zinc-200/50 shadow-2xs">
          {project.partnerBadge}
        </span>
      </div>

      {/* Title & Optional Preview Text */}
      <div className="space-y-2 flex-1">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950 group-hover:text-[#833AB4] transition-colors leading-snug">
          {project.title}
        </h3>

        {showPreview && (
          <p className="text-sm text-zinc-600 font-light line-clamp-2 leading-relaxed pt-0.5">
            {project.description}
          </p>
        )}
      </div>

      {/* Bottom Text Link */}
      <div className="pt-1">
        <span className="text-sm font-semibold text-[#833AB4] group-hover:text-[#6D28D9] transition-colors inline-flex items-center gap-1">
          <span>Explore Project</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
};
