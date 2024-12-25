import { getProfile } from '@/app/[locale]/api/getProfile'
import useSupabaseClient from '@/lib/supabase/client'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'

export default function useGetProfile() {
  const client = useSupabaseClient()

  return useQuery(getProfile(client))
}
