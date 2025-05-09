"use client"

import Link from 'next/link'
import { cn } from "@/lib/utils"
import { useState } from 'react'
import { useUserStore } from '@/lib/store'

interface NavItemProps {
  href: string
  children: React.ReactNode
}

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "nav-link",
        "flex items-center rounded-md px-3 py-2 text-sm font-medium",
        "transition-all duration-300"
      )}
    >
      {children}
    </Link>
  )
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/queries", label: "Queries" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/monitor", label: "Monitor" },
  { href: "/modeling", label: "Modeling" },
  { href: "/about", label: "About" },
  // Add more nav items here
]

export function SidebarNav() {
  const [open, setOpen] = useState(true)
  const logout = useUserStore((state) => state.logout)

  return (
    <nav
      className={cn(
        "mt-8 mb-8 h-[85vh] neon-border bg-[#111118]/50 backdrop-blur-sm transition-all duration-500 flex flex-col overflow-hidden",
        open ? "w-64 p-4" : "w-16 p-2"
      )}
      style={{ minWidth: open ? 192 : 64 }}
    >
      <div className="flex flex-col h-full">
        {/* Hamburger menu button */}
        <button
          className={cn(
            "flex items-center justify-center h-12 w-12 hover:bg-[#23233a]/40 transition mb-2",
            !open && "mx-auto"
          )}
          aria-label="Toggle sidebar menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-4 relative">
            <span className="absolute left-0 top-0 w-6 h-0.5 bg-gray-300 transition-all duration-300" />
            <span className="absolute left-0 top-1.5 w-6 h-0.5 bg-gray-300 transition-all duration-300" />
            <span className="absolute left-0 top-3 w-6 h-0.5 bg-gray-300 transition-all duration-300" />
          </span>
        </button>
        {/* Nav items */}
        <div
          className={cn(
            "space-y-1 transition-all duration-500 flex-1",
            open ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0 overflow-hidden"
          )}
        >
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href}>
              {item.label}
            </NavItem>
          ))}
        </div>
        {/* Logout button at the bottom */}
        <div
          className={`mt-auto pt-4 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none select-none'}`}
        >
          <button
            onClick={logout}
            className="w-full text-left px-3 py-2 text-sm font-medium text-red-400 hover:text-red-600 transition-colors cursor-pointer bg-transparent border-none outline-none"
            tabIndex={open ? 0 : -1}
            aria-hidden={!open}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}