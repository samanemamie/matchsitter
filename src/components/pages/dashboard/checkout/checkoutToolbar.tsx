'use client'
import BabySitterToolbar from '@/components/pages/dashboard/parentHome/BabySitterToolbar'
import { buttonVariants } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import { useClientBooking } from '@/lib/hooks/useClientBooking'
import { useBookingStore } from '@/lib/store/useBookingStore'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

interface Props {
  data: BabySitterInterface
}

export default function CheckoutToolbar({ data }: Props) {
  const t = useTranslations('SingleBabysitter.Checkout')
  const { booking, isClient, completedBookings } = useClientBooking(data.id)

  const completeBooking = useBookingStore((state) => state.completeBooking)
  const router = useRouter()

  const handlePlaceBooking = () => {
    completeBooking(data)
    // router.push('/dashboard/parent/my-bookings')
  }

  return (
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
            {t('your_hours')}
          </Paragraph>
          <Paragraph variant="body-400" size="size-title-md">
            {t('price_symbol')} {isClient ? (booking?.total ?? 1) : 1}
          </Paragraph>
        </div>
        <button
          className={cn(buttonVariants({ variant: 'default', size: 'md' }), 'h-10')}
          onClick={handlePlaceBooking}
        >
          {t('place_booking')}
        </button>
      </div>
    </BabySitterToolbar>
  )
}
