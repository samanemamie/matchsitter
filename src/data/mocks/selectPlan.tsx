import type { I18nLocale } from '@/i18n/i18n-configs'

import elips1 from '@public/elips1.png'
import elips2 from '@public/elips2.png'
import elips3 from '@public/elips3.png'
import { type StaticImageData } from 'next/image'

interface SelectPlanInterface {
  id: number
  img: StaticImageData
  title: Record<I18nLocale, string>
  desk: Record<I18nLocale, string>
}

export const SELECT_PLAN: SelectPlanInterface[] = [
  {
    id: 1,
    img: elips1,
    title: { en: 'General Babysitters', fa: '' },
    desk: { en: 'Someone can only hold your child for amount of time.', fa: '' },
  },
  {
    id: 2,
    img: elips2,
    title: { en: 'Certified Babysitters', fa: '' },
    desk: { en: 'Babysitter with certified skills who can teach your child.', fa: '' },
  },
  {
    id: 3,
    img: elips3,
    title: { en: 'SOS Babysitters', fa: '' },
    desk: { en: 'Babysitters who can assist you in emergencies.', fa: '' },
  },
]
