'use client'
import BookingPickDateComponent from '@/components/pages/dashboard/booking/BookingPickDateComponent'
import BookingPickHours from '@/components/pages/dashboard/booking/BookingPickHours'
import BabySitterToolbar from '@/components/pages/dashboard/parentHome/BabySitterToolbar'
import { buttonVariants } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { useBookingStore } from '@/lib/store/useBookingStore'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect } from 'react'

interface Props {
  locale: I18nLocale
  data: BabySitterInterface
}
export default function BookingComponent({ data, locale }: Props) {
  const { hour, setTotal, total } = useBookingStore()

  const t = useTranslations('SingleBabysitter.Booking')

  useEffect(() => {
    setTotal(hour * data.price)
  }, [hour, data.price, setTotal])

  return (
    <div className="flex flex-col gap-12">
      <BookingPickDateComponent id={data.id} data={data.onCallDate!} locale={locale} />
      <BookingPickHours />
      <BabySitterToolbar className="h-[72px]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Paragraph variant="body-300" size="size-body-lg">
              {t('rate_per_hour')}
            </Paragraph>
            <Paragraph variant="body-400" size="size-title-md">
              {t('price_symbol')}
              {data.price}
            </Paragraph>
          </div>
          <div className="flex items-center justify-between">
            <Paragraph variant="body-300" size="size-body-lg">
              {t('your_hours')}
            </Paragraph>
            <Paragraph variant="body-400" size="size-title-md">
              {hour}
            </Paragraph>
          </div>
          <div className="flex items-center justify-between rounded-100 bg-background-100 px-3 py-2">
            <Paragraph variant="body-300" size="size-body-lg">
              {t('your_hours')}
            </Paragraph>
            <Paragraph variant="body-400" size="size-title-md">
              {t('price_symbol')} {total}
            </Paragraph>
          </div>
          <Link
            className={cn(buttonVariants({ variant: 'default', size: 'md' }), 'h-10')}
            href={`/dashboard/parent/babysitter/booking/${data.id}`}
          >
            {t('checkout')}
          </Link>
        </div>
      </BabySitterToolbar>
    </div>
  )
}
