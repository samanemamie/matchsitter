import type { BabySitterStatusEnum } from '@/data/enums/dashboard'
import type { I18nLocale } from '@/i18n/i18n-configs'
import type { StaticImageData } from 'next/image'

export interface BabySitterInterface {
  id: number
  name: Record<I18nLocale, string>
  about: Record<I18nLocale, string>
  bookings: number
  status: BabySitterStatusEnum
  sos?: boolean
  img: StaticImageData
  star: number
  review: number
  price: number
  age: number
  audioUrl: string
  experience: number
  distance: number
  location?: {
    lat: number
    lng: number
  }
  workExperiences: WorkExperiencesInterface[]
  certifications?: CertificationsInterface[]
  madias?: CertificationsInterface[]
  reviews?: ReviewsInterface[]
}

export interface WorkExperiencesInterface {
  id: number
  title: Record<I18nLocale, string>
  name: Record<I18nLocale, string>
  location: Record<I18nLocale, string>
  date: Record<I18nLocale, string>
  responsibilities: ResponsibilitiesInterface[]
}

export interface ResponsibilitiesInterface {
  id: number
  title: Record<I18nLocale, string>
}

export interface CertificationsInterface {
  id: number
  img: StaticImageData
}
export interface ReviewsInterface {
  id: number
  name: Record<I18nLocale, string>
  score: number
  date: Record<I18nLocale, string>
  desk: Record<I18nLocale, string>
}
