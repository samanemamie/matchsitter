import SchedulerComponent from '@/components/pages/dashboard/calendar/SchedulerComponent'
import BabySitterToolbar from '@/components/pages/dashboard/parentHome/BabySitterToolbar'
import { buttonVariants } from '@/components/ui/button'
import { BABY_SITTER } from '@/data/mocks/babySitters'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

interface Props {
  params: Promise<{ id: string }>
}
export default async function CalendarPage({ params }: Props) {
  const { id } = await params
  const data = BABY_SITTER.find((item) => item.id === id.toString())
  const t = await getTranslations('SingleBabysitter')
  if (!data) return

  return (
    <div>
      <SchedulerComponent />
      <BabySitterToolbar className="h-[95px]">
        <Link
          className={cn(buttonVariants({ variant: 'default', size: 'md' }), 'h-10')}
          href={`/dashboard/parent/babysitter/booking/${data.id}`}
        >
          {t('book_now')}
        </Link>
      </BabySitterToolbar>
    </div>
  )
}
