import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'

interface BabySitterToolbarProps {
  children: ReactNode
  className?: string
}

export default function BabySitterToolbar({ children, className }: BabySitterToolbarProps) {
  return (
    <>
      <div className={cn('h-[72px] w-full flex-none', className)} />
      <nav className="fixed bottom-0 start-0 z-50 flex w-full items-center justify-center bg-background-50 px-4 py-3 [box-shadow:0px_-5px_10px_0px_rgba(92,104,128,0.15)]">
        <div className="w-full">{children}</div>
      </nav>
    </>
  )
}
