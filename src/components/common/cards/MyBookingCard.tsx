import { LucideVerified } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import { BabySitterStatusEnum, BabySitterStatusLabels } from '@/data/enums/dashboard'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

import Image, { type StaticImageData } from 'next/image'
import * as React from 'react'

interface MyBookingCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  status: BabySitterStatusEnum
  img: StaticImageData
  locale: I18nLocale
  dropdownMenu: React.ReactElement
}

interface MyBookingCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  dateOfVisit: string
  cost: number
  distance: number
  status?: boolean
}

const MyBookingCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-2 rounded-100 bg-background-50 p-3 [box-shadow:0px_18px_20px_-12px_rgba(92,104,128,0.1)]',
        className
      )}
      {...props}
    />
  )
)

MyBookingCard.displayName = 'MyBookingCard'

const MyBookingCardHeader = React.forwardRef<HTMLDivElement, MyBookingCardHeaderProps>(
  ({ dropdownMenu, locale, img, name, status, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-center gap-2', className)} {...props}>
        <Image className={cn('size-14 rounded-100')} alt="babySitter" src={img} />
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <Paragraph variant="body-300" size="size-title-md">
              {name}
            </Paragraph>
            {dropdownMenu}
          </div>
          <Paragraph variant="body-200" size="size-body-sm" className="flex items-center gap-1">
            {status === BabySitterStatusEnum.CERTIFIED && (
              <LucideVerified className="iconify-normal size-4 text-success" />
            )}

            {BabySitterStatusLabels[status][locale]}
          </Paragraph>
        </div>
      </div>
    )
  }
)
MyBookingCardHeader.displayName = 'MyBookingCardHeader'

const MyBookingCardContent = React.forwardRef<HTMLDivElement, MyBookingCardContentProps>(
  ({ dateOfVisit, cost, distance, status, className, ...props }, ref) => {
    const t = useTranslations('MyBookings.MyBookingCard')

    return (
      <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props}>
        <div className="flex items-center justify-between">
          <Paragraph size="size-body-sm" variant="body-300">
            {t('date_of_visit')}
          </Paragraph>
          <Paragraph size="size-title-sm" variant="body-400">
            {dateOfVisit}
          </Paragraph>
        </div>
        <div className="flex items-center justify-between">
          <Paragraph size="size-body-sm" variant="body-300">
            {t('cost')}
          </Paragraph>
          <Paragraph size="size-title-sm" variant="body-400">
            {cost}
          </Paragraph>
        </div>
        <div className="flex items-center justify-between">
          <Paragraph size="size-body-sm" variant="body-300">
            {t('distance')}
          </Paragraph>
          <Paragraph size="size-title-sm" variant="body-400">
            {distance}
          </Paragraph>
        </div>
        {status && (
          <div className="flex items-center justify-between">
            <Paragraph size="size-body-sm" variant="body-300">
              {t('status')}
            </Paragraph>
            <Button
              size="none"
              variant="none"
              className="rounded-400 bg-success_light p-2 text-size-label-mb text-success sm:text-size-label-ds"
            >
              {t('completed')}
            </Button>
          </div>
        )}
      </div>
    )
  }
)
MyBookingCardContent.displayName = 'MyBookingCardContent'

const MyBookingCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props} />
  }
)
MyBookingCardFooter.displayName = 'MyBookingCardFooter'

export { MyBookingCard, MyBookingCardContent, MyBookingCardFooter, MyBookingCardHeader }
