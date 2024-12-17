import { type signInSchema } from '@/lib/form/validations/auth.schema'
import type { z } from 'zod'

export type SignInFormProps = z.infer<typeof signInSchema>
