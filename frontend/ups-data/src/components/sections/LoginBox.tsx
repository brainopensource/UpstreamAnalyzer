'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface LoginBoxProps {
  logoSrc: string
  logoAlt?: string
  logoWidth?: number
  logoHeight?: number
  title: string
  onSubmit: (email: string, password: string) => void
  className?: string
}

export function LoginBox({
  logoSrc,
  logoAlt = "Logo",
  logoWidth = 180,
  logoHeight = 60,
  title,
  onSubmit,
  className
}: LoginBoxProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    onSubmit(email, password)
  }

  return (
    <div className="flex flex-col items-center">
      {/* Logo at the top */}
      <div className="mt-12 mb-8 flex justify-center">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
          priority
        />
      </div>

      {/* Login Box */}
      <div className="relative w-full max-w-sm">
        {/* Background glow effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b82f6] via-[#6b46ff] to-[#4f46e5] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
        <div className="relative w-full max-w-sm glass-card p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#3b82f6] via-[#6b46ff] to-[#4f46e5] text-transparent bg-clip-text animate-gradient">
              {title}
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-xl bg-[#111118]/30 border-0 px-4 py-3.5 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-[#3b82f6] transition-all duration-200 backdrop-blur-sm"
                  placeholder="I-Number"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3b82f6]/10 via-[#6b46ff]/10 to-[#4f46e5]/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-xl bg-[#111118]/30 border-0 px-4 py-3.5 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-[#3b82f6] transition-all duration-200 backdrop-blur-sm"
                  placeholder="Password"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3b82f6]/10 via-[#6b46ff]/10 to-[#4f46e5]/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
} 