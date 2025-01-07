import type { SVGInterface } from '@/lib/typescript/interfaces/svg'
import { cn } from '@/lib/utils'

export default function IconSlider({ className }: SVGInterface) {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('', className)}
    >
      <rect width="1" height="10" rx="0.5" fill="currentColor" />
      <rect x="5" width="1" height="10" rx="0.5" fill="currentColor" />
    </svg>
  )
}
