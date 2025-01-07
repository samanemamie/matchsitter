import type { BabySitterStatusEnum } from '@/data/enums/dashboard'
import type { I18nLocale } from '@/i18n/i18n-configs'
import type { StaticImageData } from 'next/image'

export interface BabySitterInterface {
  id: string
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
  completed?: boolean
  satisfied?: boolean
  location?: {
    lat: number
    lng: number
  }
  onCallDate?: OnCallDateInterface[]
  workExperiences: WorkExperiencesInterface[]
  certifications?: CertificationsInterface[]
  madias?: CertificationsInterface[]
  reviews?: ReviewsInterface[]
}

export interface WorkExperiencesInterface {
  id: string
  title: Record<I18nLocale, string>
  name: Record<I18nLocale, string>
  location: Record<I18nLocale, string>
  date: Record<I18nLocale, string>
  responsibilities: ResponsibilitiesInterface[]
}

export interface ResponsibilitiesInterface {
  id: string
  title: Record<I18nLocale, string>
}

export interface CertificationsInterface {
  id: string
  img: StaticImageData
}
export interface ReviewsInterface {
  id: string
  name: Record<I18nLocale, string>
  score: number
  date: Record<I18nLocale, string>
  desk: Record<I18nLocale, string>
}
export interface OnCallDateInterface {
  id: string
  day: Record<I18nLocale, string>
  date: Record<I18nLocale, string>
  time: Record<I18nLocale, string>[]
}
