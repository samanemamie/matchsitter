'use client'

import { Button } from '@/components/ui/button'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { useBookingStore } from '@/lib/store/useBookingStore'
import type { OnCallDateInterface } from '@/lib/typescript/interfaces/babySitter'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

interface Props {
  locale: I18nLocale
  data: OnCallDateInterface[]
  id: string
}

export default function BookingPickDateComponent({ data, locale, id }: Props) {
  const t = useTranslations('SingleBabysitter.Booking')

  const { selectedDate, selectedTime, setSelectedDate, setSelectedTime } = useBookingStore()

  return (
    <div className="flex flex-col gap-3">
      <LargeHeading as="h3" variant="body-300">
        {t('date')}
      </LargeHeading>
      <div className="flex flex-col items-center gap-9">
        <div className="container-overflow flex w-full max-w-full items-center gap-4 overflow-x-auto pb-4 pt-2">
          {data.map((item) => (
            <Button
              key={item.id}
              variant="none"
              size="none"
              onClick={() => {
                setSelectedDate(id, item.id, item.date[locale])
              }}
              className={cn(
                'flex flex-col items-center gap-1 rounded-100 border border-border-200 px-3 py-1 text-body-300',
                {
                  '-translate-y-2 bg-primary text-body-50 shadow-[0px_14px_20px_-8px_rgba(244,93,69,0.5)]':
                    selectedDate === item.id,
                }
              )}
            >
              <Paragraph size="size-body-lg">{item.day[locale]}</Paragraph>
              <Paragraph size="size-body-lg">{item.date[locale]}</Paragraph>
            </Button>
          ))}
        </div>

        <div className="container-overflow flex w-full max-w-full items-center gap-4 overflow-x-auto">
          {selectedDate && (
            <>
              {data
                .find((item) => item.id === selectedDate)
                ?.time.map((timeSlot, index) => (
                  <Button
                    key={index}
                    onClick={() => setSelectedTime(id, timeSlot[locale])}
                    variant="none"
                    size="none"
                    className={cn(
                      'flex flex-col items-center rounded-100 border border-border-200 px-3 py-1.5 text-body-300',
                      {
                        'bg-primary text-body-50': selectedTime === timeSlot[locale],
                      }
                    )}
                  >
                    <Paragraph size="size-body-lg">{timeSlot[locale]}</Paragraph>
                  </Button>
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
