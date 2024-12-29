import tailwindConfig from '@/../tailwind.config'
import { type ClassValue, clsx } from 'clsx'
import type { ReadonlyURLSearchParams } from 'next/navigation'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      shadow: Object.keys(tailwindConfig.theme.extend.boxShadow).map((v) => `shadow-${v}`),
      rounded: Object.keys(tailwindConfig.theme.extend.borderRadius).map((v) => `rounded-${v}`),
      'font-weight': Object.keys(tailwindConfig.theme.extend.fontSize).map((v) => `text-${v}`),
      'font-size': [
        {
          text: Object.keys(tailwindConfig.theme.extend.fontSize),
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getErrorMessage = (error: any) => {
  if ('message' in error) return error['message']
  return String(error)
}

export const Sleep = (delay = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export function splitPathname(pathname: string, depth = 2) {
  return pathname.split('/').at(depth)
}

export function getSplitPathname(pathName: string, locale: string) {
  const localeRegex = new RegExp(`^/${locale}`)
  return pathName.replace(localeRegex, '')
}

export const createQueryString = (
  searchParams: ReadonlyURLSearchParams,
  name: string,
  value: string
) => {
  const params = new URLSearchParams(searchParams.toString())
  params.set(name, value)
  return params.toString()
}
