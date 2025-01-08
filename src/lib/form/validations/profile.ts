import { z, type ZodErrorMap } from 'zod'

interface Props {
  message: string
}

const errorMapConfig: ({ message }: Props) => { errorMap: ZodErrorMap } = ({ message }: Props) => {
  return {
    errorMap: (issue, { defaultError }) => ({
      message: issue.code === 'invalid_type' ? message : defaultError,
    }),
  }
}

export const profilePassword = z
  .object({
    current_password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long.' })
      .regex(/[a-z]/, { message: 'Password must include at least one lowercase letter.' })
      .regex(/[A-Z]/, { message: 'Password must include at least one uppercase letter.' })
      .regex(/[0-9]/, { message: 'Password must include at least one digit.' })
      .regex(/[\W_]/, { message: 'Password must include at least one symbol.' }),
    new_password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long.' })
      .regex(/[a-z]/, { message: 'Password must include at least one lowercase letter.' })
      .regex(/[A-Z]/, { message: 'Password must include at least one uppercase letter.' })
      .regex(/[0-9]/, { message: 'Password must include at least one digit.' })
      .regex(/[\W_]/, { message: 'Password must include at least one symbol.' }),

    confirm_new_password: z.string().min(1, { message: 'This field is required' }),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    path: ['confirm_new_password'],
    message: 'Passwords do not match',
  })

export const profile = z.object({
  full_name: z.string(errorMapConfig({ message: 'This field is required.' })).min(1),
  nick_name: z.string(errorMapConfig({ message: 'This field is required.' })).min(1),
  email: z
    .string(errorMapConfig({ message: 'This field is required.' }))
    .email({ message: 'Invalid email address' }),
})
