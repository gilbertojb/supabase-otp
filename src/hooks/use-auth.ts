import { redirect } from 'next/navigation'

import { getUser } from '@/http/users/get-user'

interface AuthResponse {
  user: {
    id: string
    email: string
    name: string
  }
}

export async function auth(): Promise<AuthResponse> {
  try {
    const user = await getUser()
    return { user }
  } catch (error) {
    console.error(error)
    redirect('/sign-in')
  }
}
