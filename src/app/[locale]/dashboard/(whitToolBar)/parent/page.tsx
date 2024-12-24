import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ParentHomePage() {
  return (
    <>
      <Link href={`/dashboard/babysitter/${1}`}></Link>
      <Button loading>ParentHomePage</Button>
    </>
  )
}
