import { BabySitterCard, BabySitterCardHeader } from '@/components/common/cards/BabySitterCard'
import type { ParentHomeSelectProps } from '@/components/pages/dashboard/parentHome/ParentHomePageComponent'
import { BABY_SITTER } from '@/data/mocks/babySitters'
import { useLocaleWithProps } from '@/i18n/i18n-configs'

export default function BabySitterCardsComponent({
  babysittersState,
}: Pick<ParentHomeSelectProps, 'babysittersState'>) {
  const { locale } = useLocaleWithProps()
  return (
    <>
      {BABY_SITTER.map((item) => {
        return (
          <BabySitterCard key={item.id}>
            <BabySitterCardHeader
              name={item.name[locale]}
              status={item.status}
              img={item.img}
              locale={locale}
            />
          </BabySitterCard>
        )
      })}
    </>
  )
}
