'use client'
import {
  MyBookingCard,
  MyBookingCardContent,
  MyBookingCardFooter,
  MyBookingCardHeader,
} from '@/components/common/cards/MyBookingCard'
import LoadingSection from '@/components/common/LoadingSection'
import MyBookingDropdownMenu from '@/components/pages/dashboard/myBookings/MyBookingDropdownMenu'
import MyBookingReviewDrawer from '@/components/pages/dashboard/myBookings/MyBookingReviewDrawer'
import { Button } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { useSubmitHandler } from '@/lib/hooks/useSubmitHandler'
import { useBookingStore } from '@/lib/store/useBookingStore'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import { useTranslations } from 'next-intl'
import { useEffect, useState, type ReactNode } from 'react'

function formatDate(dateValue: string, time: string): string {
  const currentYear = new Date().getFullYear()
  const formattedDate = dateValue ? `${dateValue}/${currentYear}` : '...'
  return `${formattedDate}${time ? `, ${time}` : ''}`
}

export default function MyBookingsComponent({ locale }: { locale: I18nLocale }) {
  const t = useTranslations('MyBookings')
  const { completedBookings } = useBookingStore()
  const deleteBooking = useBookingStore((state) => state.deleteBooking)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="space-y-4">
      {isLoading ? (
        <LoadingSection />
      ) : completedBookings && completedBookings.length !== 0 ? (
        completedBookings.map((item) => (
          <BookingCard
            t={t}
            key={item.babySitter.id}
            item={item}
            locale={locale}
            deleteBooking={deleteBooking}
          />
        ))
      ) : (
        <div className="text-center">
          <Paragraph size="size-title-lg" variant="body-300">
            {t('noData')}
          </Paragraph>
        </div>
      )}
    </div>
  )
}

interface BookingCardProps {
  item: {
    babySitter: BabySitterInterface
    booking: { dateId: string; dateValue: string; time: string; hour: number; total: number }
  }
  locale: I18nLocale
  t: (body: string) => ReactNode
  deleteBooking: (id: string) => void
}

function BookingCard({ item, locale, t, deleteBooking }: BookingCardProps) {
  const [satisfied, setSatisfied] = useState(item.babySitter.satisfied)
  const [isSatisfied, setIsSatisfied] = useState(false)

  const { loading, delayedSubmit } = useSubmitHandler()
  const { loading: loadingIsSatisfied, delayedSubmit: delayedSubmitIsSatisfied } =
    useSubmitHandler()

  const handleIsSatisfiedChange = () => {
    delayedSubmitIsSatisfied(() => {
      setSatisfied(true)
      setIsSatisfied(true)
    })
  }

  const handleIsNotSatisfiedChange = () => {
    delayedSubmit(() => {
      setSatisfied(true)
      setIsSatisfied(false)
    })
  }

  return (
    <MyBookingCard>
      <MyBookingCardHeader
        name={item.babySitter.name[locale]}
        status={item.babySitter.status}
        img={item.babySitter.img}
        locale={locale}
        dropdownMenu={
          <MyBookingDropdownMenu deleteBooking={deleteBooking} id={item.babySitter.id} t={t} />
        }
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
          >{`${t('are_you')} ${item.babySitter.name[locale]}?`}</Paragraph>
        ) : isSatisfied ? (
          <Paragraph
            size="size-body-lg"
            variant="body-300"
          >{`${t('satisfied')} ${item.babySitter.name[locale]}`}</Paragraph>
        ) : (
          <Paragraph
            size="size-body-lg"
            variant="body-300"
          >{`${t('not_satisfied')} ${item.babySitter.name[locale]}`}</Paragraph>
        )}
        {!satisfied ? (
          <div className="flex items-center justify-between gap-3">
            <Button
              size="md"
              variant="outline"
              className="h-10 w-full px-0"
              onClick={handleIsNotSatisfiedChange}
              loading={loading}
              disabled={loading}
            >
              {t('no')}
            </Button>
            <Button
              loading={loadingIsSatisfied}
              disabled={loadingIsSatisfied}
              onClick={handleIsSatisfiedChange}
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
