'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/', num: '01' },
    { name: 'About Us', href: '/about', num: '02' },
    { name: 'Services', href: '/services', num: '03' },
    { name: 'Projects', href: '/projects', num: '04' },
    { name: 'Gallery', href: '/gallery', num: '05' },
  ];

  return (
    <>
      {/* ── Main Fixed Header ── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 sm:py-3.5 border-b border-zinc-200/60'
            : 'bg-transparent py-4 sm:py-5 border-b border-transparent shadow-none'
        )}
      >
        <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px] flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg overflow-hidden shadow-xs border border-zinc-200 group-hover:scale-105 transition-transform bg-zinc-900">
              <Image
                src="/images/mge-logo.jpeg"
                alt="MGE — Marshall & The Gypsies Logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-black text-xl tracking-tight text-zinc-950">
              MGE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-800 hover:text-black transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-black hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <Button
                variant="dark"
                size="sm"
                className="rounded-full px-5 font-semibold text-xs"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="md:hidden w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 hover:bg-zinc-200 active:scale-95 transition-all shadow-xs cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ── HIGH-END MOBILE SIDE DRAWER NAVIGATION ── */}
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/80 backdrop-blur-sm z-[99] transition-opacity duration-300 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Side Sheet Drawer Panel */}
      <aside
        aria-label="Mobile Navigation"
        className={cn(
          'fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-[380px] bg-[#09090b] text-white z-[100] shadow-2xl flex flex-col justify-between p-6 sm:p-8 min-h-[100dvh] h-full overflow-y-auto border-l border-zinc-800 transition-transform duration-300 ease-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-800/80">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden shadow-xs border border-zinc-700 bg-zinc-900 shrink-0">
              <Image
                src="/images/mge-logo.jpeg"
                alt="MGE Logo"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-black text-lg tracking-tight text-white block leading-none">
                MGE
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                Mother of Nightlife
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-800"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="py-6 flex-1 flex flex-col justify-center space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-zinc-900/80 transition-all"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono text-zinc-500 group-hover:text-[#FFFD63] transition-colors">
                  {link.num}
                </span>
                <span className="text-2xl font-black tracking-tight uppercase text-zinc-100 group-hover:text-white group-hover:translate-x-1 transition-all">
                  {link.name}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-[#FFFD63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        {/* Drawer Footer & Direct Channels */}
        <div className="pt-6 border-t border-zinc-800/80 space-y-5">
          {/* Direct Contacts Strip */}
          <div className="space-y-2 text-xs text-zinc-400">
            <a
              href="mailto:motherofnightlife@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FFFD63]" />
              <span>motherofnightlife@gmail.com</span>
            </a>
            <a
              href="tel:09025296372"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFFD63]" />
              <span>09025296372</span>
            </a>
            <div className="flex items-center gap-2 text-zinc-500">
              <MapPin className="w-3.5 h-3.5 text-zinc-600" />
              <span>Port Harcourt, Nigeria</span>
            </div>
          </div>

          {/* Bottom Action CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full h-[52px] rounded-[15px] bg-[#FFFD63] text-black hover:bg-yellow-300 font-bold tracking-tight shadow-md border-0"
            >
              Get in Touch
            </Button>
          </Link>

          {/* Instagram Social Pill */}
          <div className="pt-1 flex items-center justify-between text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} M&amp;G Entertainment</span>
            <a
              href="https://www.instagram.com/_gypsynight?igsi=MThpY2g4ZDY4OHZwag=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>@_gypsynight</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
