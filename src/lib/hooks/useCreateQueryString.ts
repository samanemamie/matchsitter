'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function useQueryString() {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )

  const createUrl = useCallback(
    (name: string, value: string) => {
      return `${pathname}?${createQueryString(name, value)}`
    },
    [pathname, createQueryString]
  )

  return {
    createUrl,
  }
}
