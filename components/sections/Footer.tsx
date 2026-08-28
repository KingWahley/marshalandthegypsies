'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-400 pt-16 pb-12 text-xs sm:text-sm border-t border-zinc-900">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
        {/* Top Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-zinc-800/80">
          {/* Brand Mark */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-black font-black text-base tracking-tighter">
                M
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
                <Link href="#resources" className="hover:text-white transition-colors">
                  Instagram Feed
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
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
                <Link href="#about" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Brand Guidelines
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Marshall &amp; The Dyadics (MGE). All rights reserved.</p>
          <p>Designed for extraordinary experiences.</p>
        </div>
      </div>
    </footer>
  );
};
