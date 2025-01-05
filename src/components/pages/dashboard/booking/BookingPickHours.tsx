'use client'

import { LucideMinus, LucidePlus } from '@/components/icons'
import { Button } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import { useBookingStore } from '@/lib/store/useBookingStore'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

export default function BookingPickHours() {
  const t = useTranslations('SingleBabysitter.Booking')
  const { hour, selectedDate, selectedTime, setHour } = useBookingStore()

  const handleHourChange = (change: number) => {
    if (!selectedDate || !selectedTime) {
      toast.error(t('toast'))
      return
    }

    const newHour = hour + change
    if (newHour >= 0 && newHour <= 24) {
      setHour(newHour)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Paragraph size="size-body-lg" variant="body-300">
        {t('how_many_hours')}
      </Paragraph>
      <div className="flex items-center gap-2">
        <Button
          variant="none"
          size="none"
          className="size-8 border border-border-200 text-icon-700"
          onClick={() => handleHourChange(-1)}
        >
          <LucideMinus className="iconify-thin w-4" />
        </Button>
        <Paragraph size="size-body-sm" variant="body-400">
          {hour} {t('hours')}
        </Paragraph>
        <Button
          variant="none"
          size="none"
          className="size-8 border border-border-200 text-icon-700"
          onClick={() => handleHourChange(1)}
        >
          <LucidePlus className="iconify-thin w-4" />
        </Button>
      </div>
    </div>
  )
}
