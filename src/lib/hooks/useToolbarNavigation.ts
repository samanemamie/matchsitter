import { PARENT_ROUTES } from '@/data/mocks/routers.data'
import { useLocaleWithProps } from '@/i18n/i18n-configs'
import type { LinkInterface } from '@/lib/typescript/interfaces/routs'
import { getSplitPathname } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export type NavigationItem = LinkInterface & { isActive: boolean }

export function useToolbarNavigation() {
  const pathName = usePathname()
  const { locale } = useLocaleWithProps()
  const currentPathName = getSplitPathname(pathName, locale)

  const navigationItems: NavigationItem[] = PARENT_ROUTES.map((item) => ({
    ...item,
    isActive:
      currentPathName === item.link ||
      (item.subLinks ? item.subLinks.some((subLink) => pathName.startsWith(subLink.link)) : false),
  }))

  return { navigationItems, locale }
}
