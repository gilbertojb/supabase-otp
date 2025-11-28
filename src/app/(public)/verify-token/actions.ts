'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { createClient } from '@/lib/supabase/server'

const verifyCodeSchema = z.object({
  email: z.email(),
  token: z.string(),
})

export async function verifyToken(data: FormData) {
  const result = verifyCodeSchema.safeParse(Object.fromEntries(data))

  const supabase = await createClient()

  if (!result.success) {
    const errors = z.flattenError(result.error).fieldErrors
    return { success: false, message: null, errors }
  }

  const { email, token } = result.data

  try {
    const { error } = await supabase.auth.verifyOtp({
      email,
      token,
      type: 'email',
    })

    if (error) {
      return {
        success: false,
        message: 'Invalid or expired verification code',
        errors: null,
      }
    }
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json()
      return { success: false, message, errors: null }
    }

    console.error(err)

    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    }
  }

  return { success: true, message: null, errors: null }
}
