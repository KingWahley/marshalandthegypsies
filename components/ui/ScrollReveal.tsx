'use client';

import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fade-up' | 'fade-in' | 'pop-up' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number; // in ms
  duration?: number; // in ms
  threshold?: number;
  rootMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  duration = 750,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin]);

  const getInitialStyle = () => {
    switch (variant) {
      case 'fade-up':
        return 'translate-y-10 opacity-0';
      case 'fade-in':
        return 'opacity-0';
      case 'pop-up':
        return 'translate-y-8 scale-95 opacity-0';
      case 'scale':
        return 'scale-90 opacity-0';
      case 'slide-left':
        return '-translate-x-10 opacity-0';
      case 'slide-right':
        return 'translate-x-10 opacity-0';
      default:
        return 'translate-y-10 opacity-0';
    }
  };

  const getVisibleStyle = () => {
    switch (variant) {
      case 'fade-up':
      case 'slide-left':
      case 'slide-right':
        return 'translate-y-0 translate-x-0 opacity-100';
      case 'fade-in':
        return 'opacity-100';
      case 'pop-up':
      case 'scale':
        return 'translate-y-0 scale-100 opacity-100';
      default:
        return 'translate-y-0 opacity-100';
    }
  };

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all will-change-transform will-change-opacity',
        isVisible ? getVisibleStyle() : getInitialStyle(),
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {children}
    </div>
  );
};
