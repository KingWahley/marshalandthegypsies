import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Clean SVG for Instagram
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-400 pt-16 pb-12 text-xs sm:text-sm border-t border-zinc-900">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
        {/* Top Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-zinc-800/80">
          {/* Brand Mark */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src="/images/mge-logo.jpeg"
                  alt="MGE Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                MGE
              </span>
            </Link>
            <p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
              The premier nightlife and experiential entertainment agency.
            </p>
          </div>

          {/* Column: Events */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-xs tracking-wider uppercase">
              Events
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Nightlife
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Club Shows
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Festivals
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Private
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Community */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-xs tracking-wider uppercase">
              Community
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link href="/#resources" className="hover:text-white transition-colors">
                  Instagram Feed
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: About */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-xs tracking-wider uppercase">
              About
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Mission &amp; Vision
                </Link>
              </li>
              <li>
                <Link href="/about#overview" className="hover:text-white transition-colors">
                  Executive Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Brand DNA
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Follow us */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white text-xs tracking-wider uppercase">
              Follow us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_gypsynight?igsi=MThpY2g4ZDY4OHZwag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Marshall &amp; The Gypsies (MGE). All rights reserved.</p>
          <p>Designed for extraordinary experiences.</p>
        </div>
      </div>
    </footer>
  );
};
