'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MessageCircle, Play, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

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

// Feather / Lucide style Instagram icon
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const ResourceGuides: React.FC = () => {
  const posts: InstagramPost[] = [
    {
      id: 1,
      type: 'reel',
      imageSrc: '/images/NEXGEN-8094.jpg',
      caption: 'The crowd, the bass, the lights — Gypsy Night redefined the standard. Relive the full magic with us! #MotherOfNightlife',
      likes: '12.4k',
      comments: '482',
      date: '2d ago',
    },
    {
      id: 2,
      type: 'post',
      imageSrc: '/images/NEXGEN-8135.jpg',
      caption: 'Setting stages that set the tempo. From regional takeovers to exclusive club circuits, this is where high energy lives.',
      likes: '8.9k',
      comments: '315',
      date: '4d ago',
    },
    {
      id: 3,
      type: 'post',
      imageSrc: '/images/NEXGEN-8210.jpg',
      caption: 'Unforgettable connections, pure atmosphere, and electric moments. Thank you to everyone who joined the movement! #MGEntertainment',
      likes: '5.6k',
      comments: '230',
      date: '6d ago',
    },
  ];

  return (
    <section id="resources" className="pt-12 pb-16 md:pt-16 md:pb-24 bg-[#FAFAFA] border-b border-zinc-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
        {/* Header with Instagram branding - Aligned left on all screen sizes */}
        <ScrollReveal variant="pop-up" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 text-left items-start">
            <div className="space-y-2 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/60 text-pink-700 text-xs font-semibold">
                <InstagramIcon className="w-3.5 h-3.5" />
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
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E1306C] hover:text-pink-700 transition-colors"
              >
                <span>View profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Posts / Reels Grid - Shows ONLY 1 on mobile screen size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {posts.map((post, idx) => (
            <ScrollReveal
              key={post.id}
              variant="pop-up"
              delay={idx * 150}
              className={`w-full ${idx === 0 ? 'block' : 'hidden md:block'}`}
            >
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                        <svg className="w-3 h-3 text-[#833AB4] fill-current" viewBox="0 0 24 24">
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
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Reel Badge */}
                  {post.type === 'reel' && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white p-1.5 rounded-lg shadow-sm">
                      <Play className="w-3.5 h-3.5 fill-white text-white" />
                    </div>
                  )}

                  {/* Hover Overlay with Stats */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white text-sm font-bold backdrop-blur-[2px]">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-4 h-4 fill-white" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 fill-white" />
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
                    <span className="text-[#E1306C] font-semibold group-hover:underline flex items-center gap-1">
                      Watch on Instagram <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Direct Profile Link - Mobile Only */}
        <ScrollReveal variant="pop-up" delay={250} className="flex justify-center md:hidden w-full">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full h-[52px] rounded-[15px] bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-semibold text-sm shadow-md active:scale-[0.98] transition-transform"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @_gypsynight</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
