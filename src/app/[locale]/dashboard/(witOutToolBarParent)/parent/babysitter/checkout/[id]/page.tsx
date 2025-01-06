import CheckoutCardComponent from '@/components/pages/dashboard/checkout/CheckoutCardComponent'
import CheckoutToolbar from '@/components/pages/dashboard/checkout/checkoutToolbar'
import { BABY_SITTER } from '@/data/mocks/babySitters'
import { getLocaleWithProps } from '@/i18n/i18n-configs'
import { getCurrentUser } from '@/lib/supabase/server'

interface Props {
  params: Promise<{ id: string }>
}

export default async function CheckoutPage({ params }: Props) {
  const { id } = await params
  const {
    data: { user },
  } = await getCurrentUser()
  const data = BABY_SITTER.find((item) => item.id === id.toString())
  const { locale } = await getLocaleWithProps()
  if (!data) return

  return (
    <div className="flex flex-col gap-6">
      <CheckoutCardComponent user={user} data={data} locale={locale} />
      <CheckoutToolbar data={data} />
    </div>
  )
}
