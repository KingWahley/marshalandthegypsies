import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'white' | 'outline' | 'ghost' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  pill = true,
  children,
  icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-[#833AB4] text-white hover:bg-[#6D28D9] shadow-sm transition-all duration-200 active:scale-[0.98]',
    blue: 'bg-[#833AB4] text-white hover:bg-[#6D28D9] shadow-sm transition-all duration-200 active:scale-[0.98]',
    dark: 'bg-black text-white hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98]',
    white: 'bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 shadow-sm transition-all duration-200 active:scale-[0.98]',
    outline: 'bg-transparent border border-zinc-800 text-zinc-900 hover:bg-zinc-100 transition-all duration-200',
    ghost: 'bg-transparent text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/50 transition-colors',
  };

  const sizeClasses = {
    sm: 'text-xs px-3.5 sm:py-1.5 font-medium gap-1.5 h-[52px] sm:h-auto',
    md: 'text-sm px-5 sm:py-2.5 font-medium gap-2 h-[52px] sm:h-auto',
    lg: 'text-base px-7 sm:py-3 font-semibold gap-2.5 h-[52px] sm:h-auto',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap cursor-pointer select-none tracking-tight leading-none',
        pill ? 'rounded-[15px] sm:rounded-full' : 'rounded-[15px] sm:rounded-lg',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0 inline-flex items-center">{icon}</span>}
      <span className="inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 inline-flex items-center">{icon}</span>}
    </button>
  );
};
