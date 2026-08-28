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
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-all duration-200 active:scale-[0.98]',
    blue: 'bg-[#4B6BFB] text-white hover:bg-blue-600 shadow-sm transition-all duration-200 active:scale-[0.98]',
    dark: 'bg-black text-white hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98]',
    white: 'bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 shadow-sm transition-all duration-200 active:scale-[0.98]',
    outline: 'bg-transparent border border-zinc-800 text-zinc-900 hover:bg-zinc-100 transition-all duration-200',
    ghost: 'bg-transparent text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100/50 transition-colors',
  };

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 font-medium gap-1.5',
    md: 'text-sm px-5 py-2.5 font-medium gap-2',
    lg: 'text-base px-7 py-3 font-semibold gap-2.5',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center cursor-pointer select-none tracking-tight leading-none',
        pill ? 'rounded-full' : 'rounded-lg',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
