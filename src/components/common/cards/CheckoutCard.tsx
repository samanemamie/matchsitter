import Paragraph from '@/components/ui/Paragraph'
import { cn } from '@/lib/utils'

import * as React from 'react'

interface CheckoutCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  firstTitle: string
  secondTitle: string | number
}

const CheckoutCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col gap-3 rounded-100 bg-background-50 p-3', className)}
      {...props}
    />
  )
)

CheckoutCard.displayName = 'CheckoutCard'

const CheckoutCardContent = React.forwardRef<HTMLDivElement, CheckoutCardContentProps>(
  ({ firstTitle, secondTitle, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-center justify-between', className)} {...props}>
        <Paragraph size="size-body-lg" variant="body-300">
          {firstTitle}
        </Paragraph>
        <Paragraph size="size-title-md" variant="body-400">
          {secondTitle}
        </Paragraph>
      </div>
    )
  }
)
CheckoutCardContent.displayName = 'CheckoutCardContent'

export { CheckoutCard, CheckoutCardContent }
