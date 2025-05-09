'use client'

import { ReactNode } from 'react'
import { IconType, IconProps, baseIconStyles, iconSizes, iconColors } from '.'

interface FeatureIconProps extends IconProps {
  type: IconType
}

const icons: Record<IconType, ReactNode> = {
  fetch: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      className={`${baseIconStyles} ${iconColors.blue} ${iconSizes.lg}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  ),
  process: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      className={`${baseIconStyles} ${iconColors.purple} ${iconSizes.lg}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 9.75V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5M3.75 14.25h16.5M7.5 17.25v-3m9 3v-3" />
    </svg>
  ),
  aggregate: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      className={`${baseIconStyles} ${iconColors.indigo} ${iconSizes.lg}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25V6.75A2.25 2.25 0 015.25 4.5h13.5A2.25 2.25 0 0121 6.75v10.5A2.25 2.25 0 0118.75 19.5H5.25A2.25 2.25 0 013 17.25z" />
    </svg>
  ),
  model: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      className={`${baseIconStyles} ${iconColors.sky} ${iconSizes.lg}`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  ),
}

export function FeatureIcon({ type, className, size }: FeatureIconProps) {
  return (
    <div className={className}>
      {icons[type]}
    </div>
  )
} 