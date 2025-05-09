'use client'

import { useRouter } from 'next/navigation'
import { useUserStore } from '@/lib/store'
import { LoginBox } from '@/components/sections/LoginBox'
import { loginFastAPI } from '@/lib/api'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const setUser = useUserStore((state) => state.setUser)
  const [message, setMessage] = useState<string | null>(null)
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (email: string, password: string) => {
    setLoading(true)
    const result = await loginFastAPI(email, password)
    setLoading(false)
    if (result.success) {
      setUser({ email, name: email })
      setMessage('Login realizado com sucesso!')
      setMessageType('success')
      setTimeout(() => {
        router.push('/queries')
      }, 800)
    } else {
      setMessage('Falha no login: ' + result.error)
      setMessageType('error')
    }
  }

  return (
    <div className="flex flex-col bg-gradient-to-b from-[#050507] to-[#0a0a0f] p-4">
      <div className="mt-1 mb-24 flex justify-center">
        <div className="w-full max-w-sm">
          <LoginBox
            logoSrc="/assets/wm-logotype-white-72dpi.png"
            logoAlt="Wood Mackenzie Logotype"
            title="Sign in to your account"
            onSubmit={handleLogin}
            loading={loading}
          />
          {message && (
            <div className={`mt-6 text-center text-base font-semibold ${messageType === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}