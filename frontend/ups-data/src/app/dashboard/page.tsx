'use client'

import { useUserStore } from '@/lib/store'

export default function DashboardPage() {
  // Access user state from Zustand store
  // This enables the dashboard to react to login state or show user info without prop drilling
  const { email, isLoggedIn } = useUserStore()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold neon-text">Dashboard</h1>
        <div className="h-8 w-8 rounded-full neon-border flex items-center justify-center">
          <span className="text-sm">⚡</span>
        </div>
      </div>
      {/* Example: Show user email if logged in */}
      {isLoggedIn && (
        <div className="glass-card rounded-lg p-4 mb-2">
          <span className="text-gray-300">Welcome, {email}!</span>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[1, 2, 3].map((i) => (
          <div key={i} className="glass-card rounded-lg p-4 neon-glow">
            <h3 className="text-lg font-semibold mb-2 neon-text">Metric {i}</h3>
            <p className="text-gray-400">View your analytics and key metrics here.</p>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-lg p-6 mt-4">
        <h2 className="text-xl font-semibold mb-4 neon-text">Recent Activity</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-8 p-3 rounded-md hover:bg-[#111118] transition-colors">
              <div className="h-10 w-10 rounded-full neon-border flex items-center justify-center">
                <span className="text-sm">📊</span>
              </div>
              <div>
                <p className="font-medium">Activity {i}</p>
                <p className="text-sm text-gray-400">Description of activity {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 