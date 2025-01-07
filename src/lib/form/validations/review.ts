import { z } from 'zod'

export const reviewSchema = z.object({
  rating: z.number().min(1, { message: 'This field is required.' }),
  comment: z.string().min(1, { message: 'This field is required.' }),
})
