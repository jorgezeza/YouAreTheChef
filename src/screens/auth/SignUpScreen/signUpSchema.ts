import { z } from 'zod'


const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'username inválido').toLowerCase(),
  email: z.string().email('email inválido'),
  password: z.string().min(3, 'Senha deve ter no mínumo 3 caracteres'),
  confirmPassword: z.string().min(3, 'Senha deve ter no mínumo 3 caracteres')
}).refine((value) => value.password === value.confirmPassword, {
  message: 'As senhas não coincidem',
  path: ['confirmPassword']
})

export type SignUpSchema = z.infer<typeof signUpSchema>