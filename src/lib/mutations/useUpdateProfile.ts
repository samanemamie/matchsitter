import useSupabaseClient from '@/lib/supabase/client'
import { useUpdateMutation } from '@supabase-cache-helpers/postgrest-react-query'

export default function useUpdateProfile() {
  const client = useSupabaseClient()

  return useUpdateMutation(client.from('profiles'), ['id'])
}
