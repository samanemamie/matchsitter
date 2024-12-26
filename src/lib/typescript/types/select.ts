import type { I18nLocale } from '@/i18n/i18n-configs'

export interface SelectInterface<T> {
  id: number
  title: Record<I18nLocale, string>
  value: T
}

export type SelecBabysitterStateType = SelectInterface<SelecBabysitterStateTypeItemType>

export type SelecBabysitterStateTypeItemType =
  | 'General Babysitters'
  | 'Certified Babysitters'
  | 'SOS Babysitters'
