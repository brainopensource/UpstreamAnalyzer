import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SidebarNav } from '@/components/layout/sidebar-nav'
import { MobileNav } from '@/components/layout/mobile-nav'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ElectronTitleBar from '@/components/ElectronTitleBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Upstream Data Tool',
  description: 'The all-in-one solution for Upstream Researchers and Data Scientists',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#050507] flex flex-col min-h-screen`}>
        <ElectronTitleBar />
        <Header />
        <div className="flex-1 flex w-full flex-row border-[12px] border-black rounded-2xl">
          <div className="hidden lg:block h-full">
            <SidebarNav />
          </div>
          <div className="flex flex-col flex-1">
            <div className="lg:hidden p-4">
              <MobileNav />
            </div>
            <main className="flex flex-1 flex-col p-4 lg:p-6">
              {children}
            </main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  )
}