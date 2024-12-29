import {
  BabySitterCard,
  BabySitterCardContent,
  BabySitterCardFooter,
  BabySitterCardHeader,
} from '@/components/common/cards/BabySitterCard'
import LocationBabySitterComponent from '@/components/pages/dashboard/parentHome/LocationBabySitterComponent'
import { BabySitterStatusEnum, BabySitterStatusLabels } from '@/data/enums/dashboard'
import { BABY_SITTER } from '@/data/mocks/babySitters'
import { useLocaleWithProps } from '@/i18n/i18n-configs'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'

export default function BabySitterCardsComponent({
  babysittersState,
}: {
  babysittersState: string | undefined
}) {
  const { locale } = useLocaleWithProps()

  const defaultState = BabySitterStatusLabels[BabySitterStatusEnum.GENERAL][locale]
  const sosState = BabySitterStatusLabels[BabySitterStatusEnum.SOS][locale]

  const filteredBabySitters = BABY_SITTER.filter((item) => {
    const itemStatusLabel = BabySitterStatusLabels[item.status][locale]
    return (
      (babysittersState === undefined && itemStatusLabel === defaultState) ||
      (babysittersState === sosState && item.sos === true) ||
      (babysittersState !== undefined && itemStatusLabel === babysittersState)
    )
  })

  const renderBabySitterCard = () => {
    switch (babysittersState) {
      case sosState:
        return <LocationBabySitterComponent babySittersData={filteredBabySitters} />
      default:
        return filteredBabySitters.map((item: BabySitterInterface) => (
          <BabySitterCard key={item.id}>
            <BabySitterCardHeader
              name={item.name[locale]}
              status={item.status}
              img={item.img}
              locale={locale}
            />
            <BabySitterCardContent
              star={item.star}
              review={item.review}
              price={item.price}
              age={item.age}
              experience={item.experience}
              distance={item.distance}
            />
            <BabySitterCardFooter bookLink="/dashboard" moreLink="/dashboard" />
          </BabySitterCard>
        ))
    }
  }

  return <>{renderBabySitterCard()}</>
}
