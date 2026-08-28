'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="pt-20 md:pt-28 pb-12 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 font-sans leading-[1.1]">
          The Night Life Begins Here
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Marshall &amp; The Dyadics is dedicated to celebrating nightlife culture. Let&apos;s create your next extraordinary event together.
        </p>
        <div className="pt-2 flex justify-center w-full">
          <Button
            variant="blue"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => {
              window.location.href = 'mailto:hello@mge-events.com';
            }}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
