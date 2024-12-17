import React from 'react'
import { cn } from '@/lib/utils'

export interface DividerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  direction?: 'vertical' | 'horizontal'
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(function Divider(
  { direction, className, ...props },
  ref
) {
  return (
    <div
      className={cn(direction == 'vertical' ? 'w-[1px]' : 'h-[1px]', 'bg-gray-300', className)}
      ref={ref}
      {...props}
    />
  )
})
export default Divider
