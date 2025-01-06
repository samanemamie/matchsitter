'use client'

import { useBookingStore } from '@/lib/store/useBookingStore'
import { useEffect, useState } from 'react'

export function useClientBooking(babySitterId: string) {
  const [isClient, setIsClient] = useState(false)
  const { getBooking, completedBookings } = useBookingStore()

  useEffect(() => {
    setIsClient(true)
  }, [])

  const booking = isClient ? getBooking(babySitterId) : null

  return {
    booking,
    isClient,
    completedBookings,
  }
}
