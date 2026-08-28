'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="pt-20 md:pt-28 pb-12 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ScrollReveal variant="fade-up" delay={0}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 font-sans leading-[1.1]">
            The Night Life Begins Here
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={150}>
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Marshall &amp; The Gypsies is dedicated to celebrating nightlife culture. Let&apos;s create your next extraordinary event together.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={300} className="pt-2 flex justify-center w-full">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="blue"
              size="lg"
              className="w-full sm:w-auto bg-[#833AB4] hover:bg-[#6D28D9] text-white"
            >
              Get in Touch
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};
