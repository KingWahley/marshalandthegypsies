import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';

// ─── Sub-program line item ────────────────────────────────────────────────────
interface SubProgramProps {
  name: string;
  description: string;
}

export const SubProgramItem: React.FC<SubProgramProps> = ({ name, description }) => (
  <div className="flex gap-3 py-3 border-b border-zinc-100 last:border-0">
    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FFFD63] border border-zinc-400 shrink-0" />
    <div>
      <p className="text-sm font-semibold text-zinc-900 leading-snug">{name}</p>
      <p className="text-xs text-zinc-500 leading-relaxed mt-0.5">{description}</p>
    </div>
  </div>
);

// ─── Main Pillar Card ─────────────────────────────────────────────────────────
interface PillarCardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  subPrograms?: SubProgramProps[];
  accentColor?: string;
  className?: string;
  /** When true the image appears on the right (desktop), otherwise on the left */
  imageRight?: boolean;
}

export const PillarCard: React.FC<PillarCardProps> = ({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  subPrograms,
  accentColor = '#FFFD63',
  className,
  imageRight = false,
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[21px] overflow-hidden border border-zinc-200/80 shadow-sm bg-white group',
        className
      )}
    >
      {/* ── Image half ── */}
      <div
        className={cn(
          'relative min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] overflow-hidden',
          imageRight ? 'order-first lg:order-last' : 'order-first'
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle gradient fade into content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
        {/* Pillar number badge overlay */}
        <div
          className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-zinc-950 shadow-md"
          style={{ backgroundColor: accentColor }}
        >
          {number}
        </div>
      </div>

      {/* ── Content half ── */}
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-white">
        <div className="space-y-4">
          <Badge variant="default" className="text-[10px] tracking-widest uppercase">
            Pillar {number}
          </Badge>
          <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-zinc-950 leading-tight">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">{description}</p>

          {subPrograms && subPrograms.length > 0 && (
            <div className="pt-2 space-y-0">
              <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 mb-1">
                Under this pillar
              </p>
              {subPrograms.map((sp) => (
                <SubProgramItem key={sp.name} {...sp} />
              ))}
            </div>
          )}
        </div>

        <div className="pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-black group/link transition-colors"
          >
            <span>Book this service</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
