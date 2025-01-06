'use client'
import { CheckoutCard, CheckoutCardContent } from '@/components/common/cards/CheckoutCard'
import { useClientBooking } from '@/lib/hooks/useClientBooking'
import { useTranslations } from 'next-intl'

export default function CheckoutCardComponent({ user, data, locale }: any) {
  const t = useTranslations('SingleBabysitter.Checkout')

  const { booking } = useClientBooking(data.id)

  const currentYear = new Date().getFullYear()
  const formattedDate = booking?.dateValue ? `${booking.dateValue}/${currentYear}` : '...'

  return (
    <>
      <CheckoutCard>
        <CheckoutCardContent firstTitle={t('babysitter')} secondTitle={data.name[locale]} />
        <CheckoutCardContent firstTitle={t('age')} secondTitle={data.age} />
        <CheckoutCardContent
          firstTitle={t('date')}
          secondTitle={`${formattedDate}, ${booking?.time} `}
        />
      </CheckoutCard>
      <CheckoutCard>
        <CheckoutCardContent
          firstTitle={t('your_name')}
          secondTitle={user?.user_metadata.full_name ?? '...'}
        />

        <CheckoutCardContent
          firstTitle={t('location')}
          secondTitle={user?.user_metadata.location ?? '...'}
        />
      </CheckoutCard>
    </>
  )
}
