export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0f] border-2 neon-border shadow-inner text-gray-300 py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center text-center text-sm font-normal whitespace-nowrap gap-6">
        <div className="flex gap-3">
          <a href="https://www.woodmac.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Website</a>
          <a href="https://www.linkedin.com/company/wood-mackenzie/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
        </div>
        <span>
          Upstream and Carbon Management - Automation and Ingestion team
          <span className="mx-2">&copy; 2025 Wood Mackenzie &middot; v0.1.0</span>
        </span>
      </div>
    </footer>
  )
} 