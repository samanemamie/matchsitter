import BookingComponent from '@/components/pages/dashboard/booking/BookingComponent'
import { BABY_SITTER } from '@/data/mocks/babySitters'
import { getLocaleWithProps } from '@/i18n/i18n-configs'

interface Props {
  params: Promise<{ id: string }>
}

export default async function BookingPage({ params }: Props) {
  const { id } = await params
  const data = BABY_SITTER.find((item) => item.id === id.toString())
  const { locale } = await getLocaleWithProps()
  if (!data) return
  return <BookingComponent data={data} locale={locale} />
}
