'use client'

import { PARENT_ROUTES } from '@/data/mocks/routers.data'
import { useLocaleWithProps } from '@/i18n/i18n-configs'
import { getSplitPathname } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export function DynamicRouteName() {
  const pathname = usePathname()
  const { locale } = useLocaleWithProps()

  const routeName = useMemo(() => {
    const currentPathName = getSplitPathname(pathname, locale)

    const matchingRoute = PARENT_ROUTES.find(
      (route) =>
        route.link === currentPathName ||
        (route.subLinks &&
          route.subLinks.some((subLink) => currentPathName.startsWith(subLink.link)))
    )

    return matchingRoute ? matchingRoute.name[locale] : null
  }, [pathname, locale])

  return <span>{routeName}</span>
}
