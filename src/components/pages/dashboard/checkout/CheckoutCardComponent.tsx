'use client'
import { CheckoutCard, CheckoutCardContent } from '@/components/common/cards/CheckoutCard'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { useClientBooking } from '@/lib/hooks/useClientBooking'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import type { User } from '@supabase/supabase-js'
import { useTranslations } from 'next-intl'

interface Props {
  user: User | null
  data: BabySitterInterface
  locale: I18nLocale
}

export default function CheckoutCardComponent({ user, data, locale }: Props) {
  const t = useTranslations('SingleBabysitter.Checkout')

  const { booking } = useClientBooking(data.id)

  const currentYear = new Date().getFullYear()
  const formattedDate = booking?.dateValue ? `${booking.dateValue}/${currentYear},` : '...'

  return (
    <>
      <CheckoutCard>
        <CheckoutCardContent firstTitle={t('babysitter')} secondTitle={data.name[locale]} />
        <CheckoutCardContent firstTitle={t('age')} secondTitle={data.age} />
        <CheckoutCardContent
          firstTitle={t('date')}
          secondTitle={`${formattedDate} ${booking?.time ? booking?.time : ''} `}
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
