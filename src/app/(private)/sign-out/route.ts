import { redirect } from 'next/navigation'

import { signOut } from '@/http/users/sign-out'

export async function GET() {
  await signOut()
  redirect('/sign-in')
}
