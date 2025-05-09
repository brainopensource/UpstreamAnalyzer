'use client'

import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  logoSrc: string
  logoAlt?: string
  logoWidth?: number
  logoHeight?: number
}

export function Hero({ 
  title, 
  subtitle, 
  logoSrc, 
  logoAlt = "Logo",
  logoWidth = 140,
  logoHeight = 48
}: HeroProps) {
  return (
    <div className="text-center space-y-2">
      <div className="flex items-center justify-center gap-4">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
          priority
        />
        <h1 className="text-5xl font-semibold bg-gradient-to-r from-[#3b82f6] via-[#6b46ff] to-[#4f46e5] text-transparent bg-clip-text animate-gradient tracking-tight">
          {title}
        </h1>
      </div>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
        {subtitle}
      </p>
    </div>
  )
} 