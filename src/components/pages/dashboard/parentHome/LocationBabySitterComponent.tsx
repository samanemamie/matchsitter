'use client'

import {
  BabySitterCard,
  BabySitterCardContent,
  BabySitterCardFooter,
  BabySitterCardHeader,
} from '@/components/common/cards/BabySitterCard'
import MapComponent from '@/components/pages/dashboard/parentHome/map/MapComponent'
import { useLocaleWithProps } from '@/i18n/i18n-configs'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function LocationBabySitterComponent({
  babySittersData,
}: {
  babySittersData: BabySitterInterface[]
}) {
  const [id, setId] = useState<number | null>(null)
  const { locale } = useLocaleWithProps()

  return (
    <div>
      <div className="relative mb-28 h-[60dvh] w-full">
        <MapComponent data={babySittersData} id={id} />

        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t from-gray-100 to-transparent"></div>

        <div className="container-overflow absolute -bottom-24 z-20 flex w-screen gap-4 overflow-y-auto px-2">
          {babySittersData.map((item: BabySitterInterface) => (
            <BabySitterCard
              className={cn('min-w-[272px]', { 'border border-primary': id == item.id })}
              onClick={() => setId(item.id)}
              key={item.id}
            >
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
          ))}
        </div>
      </div>
    </div>
  )
}
