'use client'

import {
  BabySitterCard,
  BabySitterCardContent,
  BabySitterCardFooter,
  BabySitterCardHeader,
} from '@/components/common/cards/BabySitterCard'
import MapComponent from '@/components/pages/dashboard/parentHome/map/MapComponent'
import { useLocaleWithProps } from '@/i18n/i18n-configs'
import { useBookingStore } from '@/lib/store/useBookingStore'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function LocationBabySitterComponent({
  babySittersData,
  role,
}: {
  babySittersData: BabySitterInterface[]
  role: string
}) {
  const [id, setId] = useState<string | null>(null)
  const { locale } = useLocaleWithProps()
  const [loading, setLoading] = useState(true)

  const { completedBookings } = useBookingStore()

  return (
    <div className="relative mb-24 h-[60dvh] w-full">
      <MapComponent setLoading={setLoading} data={babySittersData} id={id} />

      <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t from-gray-100 to-transparent"></div>
      {!loading && (
        <div className="container-overflow absolute -bottom-24 z-20 flex w-full max-w-full gap-4 overflow-x-auto px-2">
          {babySittersData.map((item: BabySitterInterface) => (
            <BabySitterCard
              className={cn('min-w-[272px]', { 'border border-primary': id == item.id })}
              onClick={() => setId(item.id)}
              key={item.id}
            >
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
          ))}
        </div>
      )}
    </div>
  )
}
