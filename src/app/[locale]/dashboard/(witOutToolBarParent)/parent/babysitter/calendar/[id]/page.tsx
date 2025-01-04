import BabySitterToolbar from '@/components/pages/dashboard/parentHome/BabySitterToolbar'
import SchedulerComponent from '@/components/pages/dashboard/parentHome/SchedulerComponent'
import { Button } from '@/components/ui/button'
import { BABY_SITTER } from '@/data/mocks/babySitters'
import { getLocaleWithProps } from '@/i18n/i18n-configs'
import { getTranslations } from 'next-intl/server'

interface Props {
  params: Promise<{ id: string }>
}
export default async function CalendarPage({ params }: Props) {
  const { id } = await params
  const data = BABY_SITTER.find((item) => item.id === id.toString())

  const { locale } = await getLocaleWithProps()
  const t = await getTranslations('SingleBabysitter')
  if (!data) return

  return (
    <div>
      <SchedulerComponent />
      <BabySitterToolbar className="h-[95px]">
        <Button size="md" className="h-10 w-full">
          {t('book_now')}
        </Button>
      </BabySitterToolbar>
    </div>
  )
}
