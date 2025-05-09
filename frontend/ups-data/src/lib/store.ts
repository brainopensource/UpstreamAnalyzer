// Zustand store for global state management
// This enables any component/page (e.g., Login, Dashboard) to access and update user state without prop drilling or context boilerplate.
// Benefits: Centralizes state, enables cross-page data sharing, and simplifies logic for authentication, user info, etc.

import { create } from 'zustand'

interface User {
  email: string
  name: string
}

interface UserState {
  user: User | null
  isLoggedIn: boolean
  setUser: (user: User) => void
  logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoggedIn: false,
  setUser: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
})) 