'use client'
import { LucideArrowLeft } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const { back } = useRouter()
  return (
    <Button onClick={back} className="absolute start-4" variant="backIcon" size="backIcon">
      <LucideArrowLeft />
    </Button>
  )
}
