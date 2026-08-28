'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight, Building2, UserPlus, Truck } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function ContactPage() {
  const [department, setDepartment] = useState<'bookings' | 'talent' | 'logistics' | 'venue'>('bookings');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-yellow-300 selection:text-black">
      <Navbar />

      <main>
        {/* ── Hero Section ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
          {/* Background image */}
          <Image
            src="/images/NEXGEN-8198.jpg"
            alt="MGE nightlife crowd and stage atmosphere"
            fill
            sizes="100vw"
            priority
            className="object-cover object-top opacity-35"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 pointer-events-none" />

          {/* Faint grid texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)',
            }}
          />

          <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="max-w-3xl space-y-6">
              <Badge variant="yellow" className="text-[10px] tracking-widest uppercase">
                Contact &amp; Bookings
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-black tracking-tight text-white leading-[1.05] uppercase">
                Connect With The Mother of Nightlife.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
                Whether you are booking talent, planning a high-end club tour, requesting logistics gear, or submitting talent scouting applications — reach our executive divisions directly.
              </p>
            </div>
          </div>

          {/* Bottom curved edge */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[24px]" />
        </section>

        {/* ── Department Channels Grid ── */}
        <section className="py-16 md:py-20 bg-white border-b border-zinc-100">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. Bookings & General */}
              <div className="p-7 rounded-[21px] bg-zinc-50 border border-zinc-200/80 space-y-4 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFD63] text-black flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    Bookings &amp; General Inquiries
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                    Club activations, Gypsy Night, brand sponsorships, and event management.
                  </p>
                </div>
                <div className="pt-3 border-t border-zinc-200/60">
                  <a
                    href="mailto:motherofnightlife@gmail.com"
                    className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-black break-all flex items-center gap-1 group-hover:underline"
                  >
                    <span>motherofnightlife@gmail.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* 2. Talent Scouting */}
              <div className="p-7 rounded-[21px] bg-zinc-50 border border-zinc-200/80 space-y-4 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center font-bold">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    Talent Scouting Division
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                    Artists, DJs, Hypemen, Models, Dance Art, and Magicians seeking representation.
                  </p>
                </div>
                <div className="pt-3 border-t border-zinc-200/60">
                  <a
                    href="mailto:talent@marshallandthegypsies.com"
                    className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-black break-all flex items-center gap-1 group-hover:underline"
                  >
                    <span>talent@marshallandthegypsies.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* 3. Logistics & Rentals */}
              <div className="p-7 rounded-[21px] bg-zinc-50 border border-zinc-200/80 space-y-4 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FFFD63] text-black flex items-center justify-center font-bold">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    Logistics &amp; Rentals Support
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                    Sound systems, staging, lighting rigs, and technical event gear lease.
                  </p>
                </div>
                <div className="pt-3 border-t border-zinc-200/60">
                  <a
                    href="tel:09025296372"
                    className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-black flex items-center gap-1 group-hover:underline"
                  >
                    <span>09025296372</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* 4. Corporate Headquarters */}
              <div className="p-7 rounded-[21px] bg-zinc-50 border border-zinc-200/80 space-y-4 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 text-white flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 tracking-tight">
                    Corporate Headquarters
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light">
                    Executive headquarters &amp; central operations base.
                  </p>
                </div>
                <div className="pt-3 border-t border-zinc-200/60">
                  <p className="text-xs sm:text-sm font-semibold text-zinc-900">
                    Port Harcourt, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Inquiry Form Section ── */}
        <section className="py-16 md:py-24 bg-zinc-50/50">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column Information */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 font-sans leading-tight">
                  Send an Official Inquiry
                </h2>
                <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-light">
                  Select your inquiry division and share your project details. Our management desk reviews requests and responds within 24 hours.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs">
                    <Building2 className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Headquarters</h4>
                      <p className="text-xs text-zinc-600">Port Harcourt, Rivers State, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs">
                    <Phone className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">Direct Line &amp; Rentals</h4>
                      <a href="tel:09025296372" className="text-xs text-zinc-600 hover:text-black font-mono">
                        +234 (0) 902 529 6372
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs">
                    <Mail className="w-5 h-5 text-zinc-900 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900">General Bookings</h4>
                      <a href="mailto:motherofnightlife@gmail.com" className="text-xs text-zinc-600 hover:text-black">
                        motherofnightlife@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Form */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-[21px] border border-zinc-200/80 shadow-lg">
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-950">Inquiry Received</h3>
                    <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Marshall &amp; The Gypsies Entertainment. Our division manager has received your submission and will get in touch shortly.
                    </p>
                    <div className="pt-4">
                      <Button
                        variant="dark"
                        size="md"
                        className="rounded-[15px] sm:rounded-full h-[52px]"
                        onClick={() => setSubmitted(false)}
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Department Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Inquiry Division
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { id: 'bookings', label: 'Bookings' },
                          { id: 'talent', label: 'Talent' },
                          { id: 'logistics', label: 'Logistics' },
                          { id: 'venue', label: 'Venues' },
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            type="button"
                            className={`py-2.5 px-3 text-xs font-semibold rounded-xl border transition-all ${
                              department === tab.id
                                ? 'bg-black text-white border-black shadow-xs'
                                : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                            }`}
                            onClick={() => setDepartment(tab.id as typeof department)}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 h-12 rounded-xl border border-zinc-200 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black text-sm bg-zinc-50/50"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 h-12 rounded-xl border border-zinc-200 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black text-sm bg-zinc-50/50"
                        />
                      </div>
                    </div>

                    {/* Phone & Date Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-700">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+234..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 h-12 rounded-xl border border-zinc-200 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black text-sm bg-zinc-50/50"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-zinc-700">
                          Target Event Date / Timeline
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 h-12 rounded-xl border border-zinc-200 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black text-sm bg-zinc-50/50 text-zinc-700"
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-700">
                        Project Scope &amp; Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about the event format, location, estimated attendance, or talent requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 rounded-xl border border-zinc-200 focus:outline-hidden focus:border-black focus:ring-1 focus:ring-black text-sm bg-zinc-50/50 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 cursor-pointer select-none tracking-tight leading-none rounded-[15px] sm:rounded-full bg-black text-white hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98] h-[52px] sm:h-[56px] px-8 text-base font-semibold shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
