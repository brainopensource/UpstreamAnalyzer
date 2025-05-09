import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0f] border-[12px] border-black rounded-2xl relative shadow-inner text-gray-300 py-4">
      <div className="absolute inset-0 rounded-xl pointer-events-none neon-border glossy-border" style={{ zIndex: 1 }} />

      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between text-sm font-normal relative z-10 w-full">
        {/* Coluna 1: Links */}
        <div className="flex gap-4">
          <a
            href="https://www.woodmac.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Website
          </a>
          <a
            href="https://www.linkedin.com/company/wood-mackenzie/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Coluna 2: Nome da equipe */}
        <div className="text-center whitespace-nowrap">
          Upstream and Carbon Management - Automation and Ingestion team
        </div>

        {/* Coluna 3: Versão e copyright */}
        <div className="text-right text-gray-400 whitespace-nowrap">
          &copy; 2025 Wood Mackenzie &middot; v0.1.0
        </div>
      </div>
    </footer>
  )
}
