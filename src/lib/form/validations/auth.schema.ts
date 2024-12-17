import { z } from 'zod'
import { USER_ROLE } from '@/data/mocks/user.data'

export const signInSchema = z.object({
  email: z.string().email({ message: 'invalid_email' }),
  password: z
    .string()
    .min(6, { message: 'password_len' })
    .regex(/[a-z]/, { message: 'password_lower_case' })
    .regex(/[A-Z]/, { message: 'password_uppercase' })
    .regex(/[0-9]/, { message: 'password_digits' })
    .regex(/[\W_]/, { message: 'password_symbol' }),
})

export const completeRegistrationSchema = z.object({
  company_name: z.string().min(3, { message: 'company_name_len' }),
  main_goal: z.string().min(16, { message: 'main_goal_len' }),
  role: z.enum(USER_ROLE, { message: 'invalid_role' }),
})
