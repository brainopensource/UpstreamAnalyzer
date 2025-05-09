'use client'

interface StatItem {
  label: string
  value: string
}

interface StatsProps {
  items: StatItem[]
  className?: string
}

export function Stats({ items, className }: StatsProps) {
  return (
    <div className={`flex justify-center gap-4 text-center ${className}`}>
      {items.map((stat, index) => (
        <div key={index} className="group">
          <div className="text-4xl font-bold bg-gradient-to-r from-[#3b82f6] via-[#6b46ff] to-[#4f46e5] text-transparent bg-clip-text transform group-hover:scale-105 transition-transform duration-300">
            {stat.value}
          </div>
          <div className="mt-2 text-gray-500 text-base font-light">{stat.label}</div>
        </div>
      ))}
    </div>
  )
} 