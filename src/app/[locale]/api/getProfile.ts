import type { TypedSupabaseClient } from '@/lib/typescript/types/supabase.type'

export function getProfile(client: TypedSupabaseClient) {
  return client
    .from('profiles')
    .select(
      `
      id,
      user_id,
      full_name,
      email,
      created_at,
      role
      `
    )
    .maybeSingle()
    .throwOnError()
}
