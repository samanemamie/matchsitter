import { headers } from 'next/headers'

export const getPathNameFromHeaders = async (): Promise<string | null> => {
  const headerList = await headers()
  const pathname = headerList.get('x-current-path')

  try {
    return pathname
  } catch (error) {
    return '/'
  }
}
