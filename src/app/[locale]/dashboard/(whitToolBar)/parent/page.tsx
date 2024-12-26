import ParentHomePageComponent from '@/components/pages/dashboard/parentHome/ParentHomePageComponent'
import { Button } from '@/components/ui/button'

import Link from 'next/link'

interface Props {
  searchParams: Promise<{ babysitters_state?: string }>
}

export default async function ParentHomePage({ searchParams }: Props) {
  const currSearchParams = await searchParams

  return (
    <>
      <ParentHomePageComponent searchParams={currSearchParams.babysitters_state!} />
      <Link href={`/dashboard/babysitter/${1}`}></Link>
      <Button loading>ParentHomePage</Button>
    </>
  )
}
