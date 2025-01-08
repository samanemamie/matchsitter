import { getProfile } from '@/app/[locale]/api/getProfile'
import { getSupabase } from '@/lib/supabase/server'

import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

interface Props {
  children: React.ReactNode
}

export default async function ProfileServer({ children }: Props) {
  const queryClient = new QueryClient()
  const supabase = await getSupabase()

  await prefetchQuery(queryClient, getProfile(supabase))

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
}
