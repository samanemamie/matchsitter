'use client'

import {
  MyBookingCard,
  MyBookingCardContent,
  MyBookingCardFooter,
  MyBookingCardHeader,
} from '@/components/common/cards/MyBookingCard'
import MyBookingReviewDrawer from '@/components/pages/dashboard/myBookings/MyBookingReviewDrawer'
import { Button } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { useSubmitHandler } from '@/lib/hooks/useSubmitHandler'
import { useBookingStore } from '@/lib/store/useBookingStore'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import { useTranslations } from 'next-intl'
import { useState, type ReactNode } from 'react'

function formatDate(dateValue: string, time: string): string {
  const currentYear = new Date().getFullYear()
  const formattedDate = dateValue ? `${dateValue}/${currentYear}` : '...'
  return `${formattedDate}${time ? `, ${time}` : ''}`
}

interface BookingCardProps {
  item: {
    babySitter: BabySitterInterface
    booking: { dateId: string; dateValue: string; time: string; hour: number; total: number }
  }
  locale: I18nLocale
  t: (body: string) => ReactNode
}

function BookingCard({ item, locale, t }: BookingCardProps) {
  const [satisfied, setSatisfied] = useState(item.babySitter.satisfied)
  const { loading, delayedSubmit } = useSubmitHandler()

  function handleSatisfiedChange() {
    delayedSubmit(() => {
      setSatisfied(true)
    })
  }

  return (
    <MyBookingCard>
      <MyBookingCardHeader
        name={item.babySitter.name[locale]}
        status={item.babySitter.status}
        img={item.babySitter.img}
        locale={locale}
      />
      <MyBookingCardContent
        dateOfVisit={formatDate(item.booking.dateValue, item.booking.time)}
        cost={item.booking.total}
        distance={item.babySitter.distance}
        status={item.babySitter.completed}
      />
      <MyBookingCardFooter>
        {!satisfied ? (
          <Paragraph
            size="size-body-lg"
            variant="body-300"
          >{`Are you satisfied with ${item.babySitter.name[locale]}?`}</Paragraph>
        ) : (
          <Paragraph
            size="size-body-lg"
            variant="body-300"
          >{`You are satisfied with ${item.babySitter.name[locale]}`}</Paragraph>
        )}
        {!satisfied ? (
          <div className="flex items-center justify-between gap-3">
            <Button size="md" variant="outline" className="h-10 w-full px-0">
              {t('no')}
            </Button>
            <Button
              loading={loading}
              disabled={loading}
              onClick={handleSatisfiedChange}
              size="md"
              className="h-10 w-full px-0"
            >
              {t('yes')}
            </Button>
          </div>
        ) : (
          <MyBookingReviewDrawer />
        )}
      </MyBookingCardFooter>
    </MyBookingCard>
  )
}

export default function MyBookingsComponent({ locale }: { locale: I18nLocale }) {
  const { completedBookings } = useBookingStore()

  const t = useTranslations('MyBookings')

  return (
    <div className="space-y-4">
      {completedBookings && completedBookings.length !== 0 ? (
        completedBookings.map((item) => (
          <BookingCard t={t} key={item.babySitter.id} item={item} locale={locale} />
        ))
      ) : (
        <div className="text-center">
          <Paragraph size="size-title-lg" variant="body-300">
            No completed bookings yet.
          </Paragraph>
        </div>
      )}
    </div>
  )
}
