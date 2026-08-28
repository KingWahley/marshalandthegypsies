'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isLast?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isLast,
}) => {
  return (
    <div
      className={`group relative aspect-4/3 overflow-hidden shadow-lg bg-zinc-900 border border-zinc-200/60 cursor-pointer ${
        isLast
          ? 'rounded-[21px] lg:rounded-l-[21px] lg:rounded-r-none'
          : 'rounded-[21px]'
      }`}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark overlay & bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2 text-left">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center justify-between">
          <span>{title}</span>
          <ArrowUpRight className="w-6 h-6 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export const OurServices: React.FC = () => {
  const services = [
    {
      title: 'Nightlife Enthusiasm',
      description:
        "Step into the center of prime nightlife. We'll merge your high-end brand activations into high-profile concepts and elevated social experiences.",
      imageSrc: '/images/NEXGEN-8104.jpg',
      imageAlt: 'Energetic woman enjoying luxury nightlife event',
    },
    {
      title: 'Events Management',
      description:
        'From concept ideation to absolute execution, we manage luxury gatherings with distinctive creative flair, tailored lighting, VIP treatment, on-site catering, and world-class service.',
      imageSrc: '/images/NEXGEN-8118.jpg',
      imageAlt: 'Abstract golden nightlife illumination and stage effects',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-zinc-50/50 border-b border-zinc-100 overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:pl-[65px] lg:pr-0">
        {/* Header and Link - Aligned left on all screen sizes */}
        <div className="max-w-4xl space-y-4 mb-12 lg:pr-[65px] text-left flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">
            Our Services
          </h2>
          <p className="text-black text-base sm:text-lg lg:text-[22.35px] font-normal leading-relaxed lg:leading-[39.5px] tracking-[-0.202px] max-w-4xl font-sans">
            From concept to grand scale, we organize premier festivals, club events, brand activations, private soirées, VIP hospitality, and holistic event solutions. We craft experiences with unparalleled precision, atmosphere, and high-energy excitement.
          </p>
          <div className="hidden md:block">
            <Link
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#4B6BFB] hover:text-blue-700 transition-colors group"
            >
              <span>Explore all services</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:pr-0">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.title}
              {...service}
              isLast={idx === services.length - 1}
            />
          ))}
        </div>

        {/* Bottom See All Services Button - Mobile Only */}
        <div className="flex justify-center pt-10 sm:pt-14 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-full bg-black text-white hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98] h-[48px] px-8 text-sm font-medium shadow-sm"
            onClick={() => {
              const el = document.getElementById('how-it-works');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See all services
          </button>
        </div>
      </div>
    </section>
  );
};
