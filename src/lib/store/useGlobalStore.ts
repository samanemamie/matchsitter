import { v4 as uuidv4 } from 'uuid'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Review {
  id: string
  // Add other review properties here, for example:
  // content: string
  // rating: number
  // author: string
}

interface StoreState {
  reviews: Review[]
  addReview: (review: Omit<Review, 'id'>) => void
}

export const useStore = create(
  persist<StoreState>(
    (set) => ({
      reviews: [],
      addReview: (review) =>
        set((state) => ({
          reviews: [...state.reviews, { ...review, id: uuidv4() }],
        })),
    }),
    {
      name: 'raysnail',
    }
  )
)
