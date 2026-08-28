import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'neutral' | 'outline' | 'blue' | 'yellow';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-zinc-100 text-zinc-800 border border-zinc-200/60',
    neutral: 'bg-white/80 backdrop-blur-xs text-zinc-900 border border-zinc-200 shadow-xs',
    outline: 'border border-zinc-300 text-zinc-700 bg-transparent',
    blue: 'bg-purple-50 text-[#833AB4] border-purple-200',
    yellow: 'bg-yellow-100 text-yellow-900 border border-yellow-300',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-wider uppercase',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
