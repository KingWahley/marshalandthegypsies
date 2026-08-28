'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface InstagramPost {
  id: number;
  type: 'reel' | 'post';
  imageSrc: string;
  caption: string;
  likes: string;
  comments: string;
  date: string;
}

const INSTAGRAM_URL = 'https://www.instagram.com/_gypsynight?igsi=MThpY2g4ZDY4OHZwag==';

export const ResourceGuides: React.FC = () => {
  const posts: InstagramPost[] = [
    {
      id: 1,
      type: 'reel',
      imageSrc:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
      caption: 'The energy at last weekend’s headline set was unreal! 🔥✨ When the bass drops and the crowd becomes one. #GypsyNight #MotherOfNightlife',
      likes: '4.8k',
      comments: '184',
      date: '2d ago',
    },
    {
      id: 2,
      type: 'reel',
      imageSrc:
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop',
      caption: 'Behind the scenes: Curating stage lighting, laser arrays & atmospheric audio for the ultimate VIP arena. 🎧🌙 #NightlifeProduction',
      likes: '3.2k',
      comments: '96',
      date: '4d ago',
    },
    {
      id: 3,
      type: 'post',
      imageSrc:
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
      caption: 'Unforgettable connections, pure atmosphere, and electric moments. Thank you to everyone who joined the movement! 🥂🍾 #MGEntertainment',
      likes: '5.6k',
      comments: '230',
      date: '6d ago',
    },
  ];

  return (
    <section id="resources" className="py-16 md:py-24 bg-[#FAFAFA] border-b border-zinc-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
        {/* Header with Instagram branding - Aligned left on all screen sizes */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 text-left items-start">
          <div className="space-y-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/60 text-pink-700 text-xs font-semibold">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram Feed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-950 font-sans">
              Latest from @_gypsynight
            </h2>
            <p className="text-sm text-zinc-600 max-w-xl">
              Follow our journey, exclusive backstage access, and unforgettable nightlife highlights.
            </p>
          </div>

          <div>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E1306C] hover:text-pink-700 transition-colors"
            >
              <span>View profile</span>
              <span>↗</span>
            </Link>
          </div>
        </div>

        {/* 3 Posts / Reels Grid - Shows ONLY 1 on mobile screen size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {posts.map((post, idx) => (
            <Link
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex-col justify-between ${
                idx === 0 ? 'flex' : 'hidden md:flex'
              }`}
            >
              {/* Instagram Card Top Header */}
              <div className="p-3.5 flex items-center justify-between border-b border-zinc-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[1.5px] shrink-0">
                    <div className="w-full h-full rounded-full bg-white p-[1px]">
                      <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center text-white text-[9px] font-bold">
                        G
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 leading-tight flex items-center gap-1">
                      <span>_gypsynight</span>
                      <svg className="w-3 h-3 text-blue-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </p>
                    <p className="text-[10px] text-zinc-400">Marshall &amp; The Gypsies</p>
                  </div>
                </div>

                <span className="text-[10px] text-zinc-400 font-medium">{post.date}</span>
              </div>

              {/* Media Image / Reel Frame */}
              <div className="relative aspect-square w-full bg-zinc-900 overflow-hidden">
                <Image
                  src={post.imageSrc}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Reel Badge */}
                {post.type === 'reel' && (
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white p-1.5 rounded-lg shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
                    </svg>
                  </div>
                )}

                {/* Hover Overlay with Stats */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white text-sm font-bold backdrop-blur-[2px]">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Caption & Interaction Row */}
              <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-zinc-700 leading-relaxed line-clamp-3">
                  <strong className="text-zinc-950 mr-1.5">_gypsynight</strong>
                  {post.caption}
                </p>

                <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                  <span className="font-semibold text-zinc-800">{post.likes} likes</span>
                  <span className="text-[#E1306C] font-semibold group-hover:underline">Watch on Instagram →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to Instagram */}
        <div className="flex justify-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-95 text-white text-sm font-semibold px-8 py-3.5 rounded-full shadow-md transition-all duration-200 active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Follow @_gypsynight on Instagram</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
