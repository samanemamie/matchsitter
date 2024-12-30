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

    // Get base path without the ID
    const basePath = currentPathName.split('/').slice(0, -1).join('/')

    // First check main routes
    const matchingRoute = PARENT_ROUTES.find((route) => {
      // Check main route
      if (route.link === currentPathName) return true

      // Check sublinks
      if (route.subLinks) {
        const matchingSubLink = route.subLinks.find((subLink) => subLink.link === basePath)
        if (matchingSubLink) {
          // Return the subLink's name instead of the parent route's name
          return matchingSubLink
        }
      }

      return false
    })

    // If we found a matching sublink, return its name, otherwise return the route name
    if (matchingRoute && 'subLinks' in matchingRoute) {
      const matchingSubLink = matchingRoute.subLinks?.find((subLink) => subLink.link === basePath)
      if (matchingSubLink) {
        return matchingSubLink.name[locale]
      }
    }

    return matchingRoute ? matchingRoute.name[locale] : null
  }, [pathname, locale])

  return <span>{routeName}</span>
}
