import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { OurServices } from '@/components/sections/OurServices';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ResourceGuides } from '@/components/sections/ResourceGuides';
import { CallToAction } from '@/components/sections/CallToAction';
import { VisualMarquee } from '@/components/sections/VisualMarquee';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-yellow-300 selection:text-black">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Live Avatars Dashboard Showcase */}
        <Hero />

        {/* About Us Narrative & Imagery */}
        <AboutUs />

        {/* Services & Offerings Showcase */}
        <OurServices />

        {/* Step-by-Step Workflow Showcase */}
        <HowItWorks />

        {/* Instagram Feed & Highlights Showcase */}
        <ResourceGuides />

        {/* Closing Call to Action & Flowing Visual Gallery */}
        <CallToAction />
        <VisualMarquee />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
