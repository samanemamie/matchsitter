import { SelectPlanCard, SelectPlanCardContent } from '@/components/common/cards/SelectPlanCard'
import Paragraph from '@/components/ui/Paragraph'
import { SELECT_PLAN } from '@/data/mocks/selectPlan'
import { getLocaleWithProps } from '@/i18n/i18n-configs'
import { getCurrentUser } from '@/lib/supabase/server'
import icon from '@public/icon.png'
import selectplan from '@public/selectplan.png'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function SelectPlanPage() {
  const { locale } = await getLocaleWithProps()
  const t = await getTranslations('SelectPlanPage')
  const {
    data: { user },
  } = await getCurrentUser()

  const role = user?.user_metadata.role

  return (
    <div className="py-6">
      <div className="flex flex-col items-center gap-5 pb-10">
        <Image src={icon} alt="matchSitter logo" className="h-7 w-32" draggable={false} />
        <Image src={selectplan} alt="authimg" className="h-auto w-[270px]" draggable={false} />
      </div>
      <Paragraph className="text-center" variant="body-300" size="size-title-lg">
        {t('title')}
      </Paragraph>

      <div className="flex flex-col gap-5 px-4 pt-5">
        {SELECT_PLAN.map((item) => {
          return (
            <SelectPlanCard
              href={`/dashboard/${role}/?babysitters_state=${item.title[locale]}`}
              key={item.id}
              img={item.img}
            >
              <SelectPlanCardContent desk={item.desk[locale]} title={item.title[locale]} />
            </SelectPlanCard>
          )
        })}
      </div>
    </div>
  )
}
