'use client'

import Image from 'next/image'
import { useUserStore } from '@/lib/store'

export default function Header() {
  const user = useUserStore((state) => state.user)

  return (
    <header className="w-full bg-[#0a0a0f] border-2 neon-border shadow-inner">
      <div className="flex items-center justify-between gap-8 pl-4 py-5 pr-6">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/wm-logotype-white-72dpi.png"
              alt="Wood Mackenzie Logo"
              width={56}
              height={56}
              className="drop-shadow-lg"
              priority
            />
          </div>
          {/* Vertical Divider */}
          <div className="h-10 w-px bg-gradient-to-b from-[#3b82f6]/60 via-[#6b46ff]/40 to-[#4f46e5]/60 mx-2 rounded-full opacity-70" />
          {/* Title */}
          <div className="flex flex-col items-start">
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#3b82f6] via-[#6b46ff] to-[#4f46e5] text-transparent bg-clip-text animate-gradient tracking-tight select-none drop-shadow-[0_2px_12px_rgba(107,70,255,0.18)]">
              Wood Mackenzie
            </span>
            <span className="text-base md:text-lg font-medium text-gray-300 tracking-tight select-none mt-1">
              Upstream and Carbon Management
            </span>
          </div>
        </div>
        {/* Right: User greeting */}
        {user && user.email && (
          <div className="text-gray-200 text-base font-medium whitespace-nowrap">
            Hello <span className="text-blue-400 font-bold">{user.email}</span>
          </div>
        )}
      </div>
    </header>
  )
} 