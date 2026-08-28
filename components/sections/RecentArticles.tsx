'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleItem {
  id: number;
  category: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export const RecentArticles: React.FC = () => {
  const articles: ArticleItem[] = [
    {
      id: 1,
      category: 'Inspiration',
      title: '8 Creative Ways to Repurpose Your Webinar Content',
      imageSrc:
        'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Hand holding a glowing lightbulb under an archway',
      href: '#',
    },
    {
      id: 2,
      category: 'Inspiration',
      title:
        'Why Webinars Are the #1 Lead Generation Marketing Strategy, You May Not Be Thinking About',
      imageSrc:
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Online video meeting and creative team collaboration',
      href: '#',
    },
    {
      id: 3,
      category: 'Inspiration',
      title:
        'How to Drive Qualified Pipeline and Enable Sales After Your Webinar Wraps',
      imageSrc:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Smiling speaker in creative modern studio',
      href: '#',
    },
  ];

  return (
    <section id="articles" className="py-16 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-[65px]">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-950 font-sans">
            Recent articles
          </h2>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-14">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between space-y-4 cursor-pointer"
            >
              {/* Single Image Preview Container with Distinctive Top-Right Arch Curve */}
              <div className="relative aspect-16/10 rounded-tl-2xl rounded-tr-[56px] rounded-b-lg overflow-hidden bg-zinc-100 border border-zinc-200/70 shadow-xs">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Tag & Title */}
              <div className="space-y-2.5 flex-1">
                <div>
                  <span className="inline-block bg-zinc-100/90 text-zinc-600 px-3 py-1 text-[11px] font-normal rounded-full border border-zinc-200/50">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-base sm:text-[17px] font-normal text-zinc-950 leading-snug group-hover:text-[#4B6BFB] transition-colors font-sans">
                  {article.title}
                </h3>
              </div>

              {/* Read Link */}
              <div className="pt-1">
                <Link
                  href={article.href}
                  className="text-sm font-normal text-[#4B6BFB] hover:text-blue-700 transition-colors"
                >
                  Read
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none rounded-full bg-[#4B6BFB] text-white hover:bg-blue-600 transition-all duration-200 active:scale-[0.98] h-[46px] px-8 text-sm font-medium shadow-sm"
            onClick={() => {
              const el = document.getElementById('resources');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            See All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};
