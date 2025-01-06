import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BookingState {
  selectedDate: string | null
  selectedTime: string | null
  bookings: Record<
    string,
    { dateId: string; dateValue: string; time: string; hour: number; total: number }
  >
  completedBookings: Array<{
    babySitter: BabySitterInterface
    booking: { dateId: string; dateValue: string; time: string; hour: number; total: number }
  }>
  setSelectedDate: (id: string, dateId: string, dateValue: string) => void
  setSelectedTime: (id: string, time: string) => void
  setHour: (id: string, hour: number) => void
  setTotal: (id: string, total: number) => void
  getBooking: (
    id: string
  ) => { dateId: string; dateValue: string; time: string; hour: number; total: number } | undefined
  completeBooking: (babySitter: BabySitterInterface) => void
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set, get) => ({
      selectedDate: null,
      selectedTime: null,
      bookings: {},
      completedBookings: [],
      setSelectedDate: (id: string, dateId: string, dateValue: string) => {
        set((state) => ({
          selectedDate: dateId,
          bookings: {
            ...state.bookings,
            [id]: {
              ...state.bookings[id],
              dateId,
              dateValue,
              hour: state.bookings[id]?.hour ?? 1,
              total: state.bookings[id]?.total ?? 0,
            },
          },
        }))
      },
      setSelectedTime: (id: string, time: string) => {
        set((state) => ({
          selectedTime: time,
          bookings: {
            ...state.bookings,
            [id]: {
              ...state.bookings[id],
              time,
              hour: state.bookings[id]?.hour ?? 1,
              total: state.bookings[id]?.total ?? 0,
            },
          },
        }))
      },
      setHour: (id: string, hour: number) => {
        set((state) => ({
          bookings: {
            ...state.bookings,
            [id]: {
              ...state.bookings[id],
              hour,
            },
          },
        }))
      },
      setTotal: (id: string, total: number) => {
        set((state) => ({
          bookings: {
            ...state.bookings,
            [id]: {
              ...state.bookings[id],
              total,
            },
          },
        }))
      },
      getBooking: (id: string) => {
        const booking = get().bookings[id]
        if (booking) return booking

        const completedBooking = get().completedBookings.find((item) => item.babySitter.id === id)
        return completedBooking ? completedBooking.booking : undefined
      },

      completeBooking: (babySitter: BabySitterInterface) => {
        const booking = get().bookings[babySitter.id]
        if (booking) {
          set((state) => {
            const { [babySitter.id]: _, ...remainingBookings } = state.bookings

            const existingBookingIndex = state.completedBookings.findIndex(
              (item) => item.babySitter.id === babySitter.id
            )

            let updatedCompletedBookings
            if (existingBookingIndex !== -1) {
              updatedCompletedBookings = [...state.completedBookings]
              updatedCompletedBookings[existingBookingIndex] = { babySitter, booking }
            } else {
              updatedCompletedBookings = [...state.completedBookings, { babySitter, booking }]
            }

            return {
              completedBookings: updatedCompletedBookings,
              bookings: remainingBookings,
            }
          })
        }
      },
    }),
    {
      name: 'booking-storage',
    }
  )
)
