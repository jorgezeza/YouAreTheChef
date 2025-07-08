import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  email: z.string().email('e-mail inválido')
})

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>