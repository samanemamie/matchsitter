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
import { useUserStore } from '@/lib/context/AuthProvider'
import { useBookingStore } from '@/lib/store/useBookingStore'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'

export default function BabySitterCardsComponent({
  babysittersState,
}: {
  babysittersState: string | undefined
}) {
  const { locale } = useLocaleWithProps()
  const { user } = useUserStore((state) => state)
  const role = user?.user_metadata.role

  const defaultState = BabySitterStatusLabels[BabySitterStatusEnum.GENERAL][locale]
  const sosState = BabySitterStatusLabels[BabySitterStatusEnum.SOS][locale]

  const { completedBookings } = useBookingStore()

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
        return <LocationBabySitterComponent role={role} babySittersData={filteredBabySitters} />
      default:
        return filteredBabySitters.map((item: BabySitterInterface) => (
          <BabySitterCard key={item.id}>
            <BabySitterCardHeader
              isBooked={completedBookings.some((booking) => booking.babySitter.id === item.id)}
              name={item.name[locale]}
              status={item.status}
              img={item.img}
              locale={locale}
              id={item.id}
            />
            <BabySitterCardContent
              star={item.star}
              review={item.review}
              price={item.price}
              age={item.age}
              experience={item.experience}
              distance={item.distance}
            />
            <BabySitterCardFooter
              bookLink={`/dashboard/parent/babysitter/booking/${item.id}`}
              moreLink={`/dashboard/${role}/babysitter/${item.id}`}
            />
          </BabySitterCard>
        ))
    }
  }

  return <>{renderBabySitterCard()}</>
}
