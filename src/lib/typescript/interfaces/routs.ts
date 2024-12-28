import type { I18nLocale } from '@/i18n/i18n-configs'

export interface LinkInterface {
  id: number
  name: Record<I18nLocale, string>
  link: string
  icon: React.ElementType
  subLinks?: LinkInterface[]
}
