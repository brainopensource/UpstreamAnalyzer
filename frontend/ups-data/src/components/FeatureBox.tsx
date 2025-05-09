'use client'

import { ReactNode } from 'react'

interface FeatureBoxProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureBox({ icon, title, description }: FeatureBoxProps) {
  return (
    <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
      <div>{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
} 