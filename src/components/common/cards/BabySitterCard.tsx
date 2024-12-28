import { LucideHeart } from '@/components/icons'
import Paragraph from '@/components/ui/Paragraph'
import { BabySitterStatusLabels, type BabySitterStatusEnum } from '@/data/enums/dashboard'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { cn } from '@/lib/utils'
import clsx from 'clsx'

import Image, { type StaticImageData } from 'next/image'
import * as React from 'react'

interface BabySitterCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  status: BabySitterStatusEnum
  img: StaticImageData
  locale: I18nLocale
}

const BabySitterCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'flex flex-col gap-4 rounded-100 bg-background-50 p-3 [box-shadow:0px_18px_20px_-12px_rgba(92,104,128,0.1)]',
        className
      )}
      {...props}
    />
  )
)

BabySitterCard.displayName = 'BabySitterCard'

const BabySitterCardHeader = React.forwardRef<HTMLDivElement, BabySitterCardHeaderProps>(
  ({ locale, img, name, status, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-stretch gap-2', className)} {...props}>
        <Image className={cn('size-14 rounded-100')} alt="babySitter" src={img} />
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full items-center justify-between">
            <Paragraph variant="body-300" size="size-title-md">
              {name}
            </Paragraph>
            <LucideHeart className="text-secondary" />
          </div>

          <Paragraph variant="body-200" size="size-body-sm">
            {BabySitterStatusLabels[status][locale]}
          </Paragraph>
        </div>
      </div>
    )
  }
)
BabySitterCardHeader.displayName = 'BabySitterCardHeader'

const BabySitterCardContent = React.forwardRef<HTMLDivElement, BabySitterCardHeaderProps>(
  ({ locale, img, name, status, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-stretch gap-2', className)} {...props}>
        <Image className={cn('size-14 rounded-100')} alt="babySitter" src={img} />
        <div className="flex w-full flex-col justify-between">
          <div className="flex w-full items-center justify-between">
            <Paragraph variant="body-300" size="size-title-md">
              {name}
            </Paragraph>
            <LucideHeart className="text-secondary" />
          </div>

          <Paragraph variant="body-200" size="size-body-sm">
            {BabySitterStatusLabels[status][locale]}
          </Paragraph>
        </div>
      </div>
    )
  }
)
BabySitterCardContent.displayName = 'BabySitterCardContent'

export { BabySitterCard, BabySitterCardHeader }
