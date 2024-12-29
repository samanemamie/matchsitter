import type { BabySitterStatusEnum } from '@/data/enums/dashboard'
import type { I18nLocale } from '@/i18n/i18n-configs'
import type { StaticImageData } from 'next/image'

export interface BabySitterInterface {
  id: number
  name: Record<I18nLocale, string>
  status: BabySitterStatusEnum
  sos?: boolean
  img: StaticImageData
  star: number
  review: number
  price: number
  age: number
  experience: number
  distance: number
  location?: {
    lat: number
    lng: number
  }
}
