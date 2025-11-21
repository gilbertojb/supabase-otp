import { createClient } from '@/lib/supabase/server'

export async function getUser() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (!user) throw Error('User not found')
  if (error) throw error

  const userProfile = await getUserById({ id: user.id })

  return {
    id: userProfile.id,
    email: userProfile.email,
    name: userProfile.name,
  }
}

export async function getUserById({ id }: { id: string }) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', id)
    .single()

  if (!data) throw Error('User not found')
  if (error) throw error

  return data
}
