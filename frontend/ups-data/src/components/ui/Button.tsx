'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={cn(
        'relative inline-flex rounded-full overflow-hidden group',
        size === 'sm' && 'px-4 py-2',
        size === 'md' && 'px-6 py-3',
        size === 'lg' && 'px-8 py-4',
        variant === 'primary' && 'text-white',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] via-[#6b46ff] to-[#4f46e5] opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#3b82f6] via-[#6b46ff] to-[#4f46e5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient"></div>
      <span className="relative font-medium">{children}</span>
    </button>
  )
} 