'use client'
import BookingPickDateComponent from '@/components/pages/dashboard/booking/BookingPickDateComponent'
import BookingPickHours from '@/components/pages/dashboard/booking/BookingPickHours'
import BabySitterToolbar from '@/components/pages/dashboard/parentHome/BabySitterToolbar'
import { Button } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { useClientBooking } from '@/lib/hooks/useClientBooking'
import { useBookingStore } from '@/lib/store/useBookingStore'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

interface Props {
  locale: I18nLocale
  data: BabySitterInterface
}
export default function BookingComponent({ data, locale }: Props) {
  const t = useTranslations('SingleBabysitter.Booking')
  const { setTotal } = useBookingStore()
  const { booking, isClient } = useClientBooking(data.id)

  const { push } = useRouter()

  useEffect(() => {
    if (booking?.hour) {
      setTotal(data.id, booking.hour * data.price)
    }
  }, [booking?.hour, data.price, setTotal, data.id])

  const handleCheckout = () => {
    if (!booking?.dateId || !booking?.time) {
      toast.error(t('toast'))
      return
    }
    push(`/dashboard/parent/babysitter/checkout/${data.id}`)
  }

  return (
    <div className="flex flex-col gap-12">
      <BookingPickDateComponent id={data.id} data={data.onCallDate!} locale={locale} />
      <BookingPickHours id={data.id} />

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
              {isClient ? (booking?.hour ?? 1) : 1}
            </Paragraph>
          </div>
          <div className="flex items-center justify-between rounded-100 bg-background-100 px-3 py-2">
            <Paragraph variant="body-300" size="size-body-lg">
              {t('total')}
            </Paragraph>
            <Paragraph variant="body-400" size="size-title-md">
              {t('price_symbol')} {booking?.total ?? data.price}
            </Paragraph>
          </div>

          <Button onClick={handleCheckout} size="md" className="h-10">
            {t('checkout')}
          </Button>
        </div>
      </BabySitterToolbar>
    </div>
  )
}
