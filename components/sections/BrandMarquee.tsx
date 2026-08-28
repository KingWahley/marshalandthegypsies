'use client';

import React from 'react';
import Image from 'next/image';

interface Brand {
  name: string;
  src: string;
  width: number;
  height: number;
  className?: string;
}

const BRANDS: Brand[] = [
  {
    name: 'Red Bull',
    src: '/images/logos/redbull.svg',
    width: 200,
    height: 90,
    className: 'h-14 sm:h-18 md:h-20 w-auto object-contain',
  },
  {
    name: 'Hennessy',
    src: '/images/logos/hennessy.svg',
    width: 220,
    height: 80,
    className: 'h-14 sm:h-18 md:h-20 w-auto object-contain',
  },
  {
    name: 'Diageo',
    src: '/images/logos/diageo.svg',
    width: 180,
    height: 70,
    className: 'h-10 sm:h-14 md:h-16 w-auto object-contain',
  },
  {
    name: 'Budweiser',
    src: '/images/logos/budweiser.svg',
    width: 220,
    height: 80,
    className: 'h-14 sm:h-18 md:h-20 w-auto object-contain',
  },
  {
    name: 'Heineken',
    src: '/images/logos/heineken.svg',
    width: 200,
    height: 70,
    className: 'h-12 sm:h-16 md:h-18 w-auto object-contain',
  },
  {
    name: 'Moët & Chandon',
    src: '/images/logos/moet.svg',
    width: 230,
    height: 80,
    className: 'h-14 sm:h-18 md:h-20 w-auto object-contain',
  },
  {
    name: 'Monster Energy',
    src: '/images/logos/monster.svg',
    width: 200,
    height: 70,
    className: 'h-12 sm:h-16 md:h-18 w-auto object-contain',
  },
  {
    name: 'Jameson',
    src: '/images/logos/jameson.svg',
    width: 210,
    height: 70,
    className: 'h-12 sm:h-16 md:h-18 w-auto object-contain',
  },
];

export const BrandMarquee: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px] mb-10 sm:mb-14 text-center">
        <p className="text-xs sm:text-sm font-bold tracking-widest text-zinc-400 uppercase font-mono">
          Trusted by Global Lifestyle &amp; Beverage Giants
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 font-sans mt-2">
          Brands We Work With
        </h2>
      </div>

      {/* MOBILE: Static 2-column grid (2 logos in a row, no animation) */}
      <div className="block sm:hidden px-4">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 items-center justify-items-center">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center p-2 w-full h-16"
              title={brand.name}
            >
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                className="h-10 w-auto max-w-[130px] object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP / TABLET: Infinite Seamless Marquee Strip */}
      <div className="hidden sm:block relative w-full overflow-hidden">
        {/* Left & Right gradient masks for smooth fade edge */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee-left flex items-center gap-12 sm:gap-16 md:gap-24 py-4">
          {/* Double array for infinite seamless loop */}
          {[...BRANDS, ...BRANDS].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
              title={brand.name}
            >
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={brand.width}
                height={brand.height}
                className={brand.className}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
