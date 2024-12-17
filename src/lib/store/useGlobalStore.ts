import { create } from 'zustand'

interface GlobalStore {
  isSidebarOpen: boolean
  toggleSidebarState: (state?: boolean) => void
}

export const useGlobalStore = create<GlobalStore>()
