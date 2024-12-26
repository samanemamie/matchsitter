import Paragraph from '@/components/ui/Paragraph'
import clsx from 'clsx'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import * as React from 'react'

interface SelectPlanContemtProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string | undefined
  desk: string
}

interface SelectPlanCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  img: StaticImageData
  href: string
}

const SelectPlanCard = React.forwardRef<HTMLAnchorElement, SelectPlanCardProps>(
  ({ className, img, children, href, ...props }, ref) => (
    <Link
      href={href}
      ref={ref}
      className={clsx(
        'relative overflow-hidden rounded-100 bg-background-50 p-3 shadow-[0px_18px_20px_-12px_rgba(92,_104,_128,_0.1)]',
        className
      )}
      {...props}
    >
      {children}

      <Image
        className={clsx('absolute -bottom-3 -end-0 z-0 size-20 object-contain')}
        alt="selectPlan"
        src={img}
      />
    </Link>
  )
)

// const ChartCardContent = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
//     return (
//       <div className={cn('flex w-full flex-col', className)} {...props}>
//         {children}
//       </div>
//     )
//   }

SelectPlanCard.displayName = 'SelectPlanCard'

SelectPlanCard.displayName = 'SelectPlanCard'

const SelectPlanCardContent = React.forwardRef<HTMLDivElement, SelectPlanContemtProps>(
  ({ title, desk, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('relative z-10 flex flex-col gap-2', className)} {...props}>
        <Paragraph content={desk} variant="heading" size="size-title-md">
          {title}
        </Paragraph>

        <Paragraph content={desk} variant="body-200" size="size-body-sm">
          {desk}
        </Paragraph>
      </div>
    )
  }
)
SelectPlanCardContent.displayName = 'SelectPlanCardContent'

export { SelectPlanCard, SelectPlanCardContent }
