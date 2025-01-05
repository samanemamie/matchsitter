import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface BookingState {
  hour: number
  total: number
  selectedDate: string | null
  selectedTime: string | null
  setHour: (hour: number) => void
  setTotal: (total: number) => void
  setSelectedDate: (date: string | null) => void
  setSelectedTime: (time: string | null) => void
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      hour: 1,
      total: 0,
      selectedDate: null,
      selectedTime: null,
      setHour: (hour) => set({ hour }),
      setTotal: (total) => set({ total }),
      setSelectedDate: (date) => set({ selectedDate: date }),
      setSelectedTime: (time) => set({ selectedTime: time }),
    }),
    {
      name: 'booking-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
