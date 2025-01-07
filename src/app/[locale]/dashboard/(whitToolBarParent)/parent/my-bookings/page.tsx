import MyBookingsComponent from '@/components/pages/dashboard/myBookings/MyBookingsComponent'
import { getLocaleWithProps } from '@/i18n/i18n-configs'

export default async function MyBookingsPage() {
  const { locale } = await getLocaleWithProps()

  return <MyBookingsComponent locale={locale} />
}
