'use client'
import BabySitterCardsComponent from '@/components/pages/dashboard/parentHome/BabySitterCardsComponent'
import SelectComponent from '@/components/pages/dashboard/parentHome/SelectComponent'
import type { SelecBabysitterStateTypeItemType } from '@/lib/typescript/types/select'
import { useState } from 'react'

export interface ParentHomeSelectProps {
  setBabysittersState: (val: SelecBabysitterStateTypeItemType) => void
  babysittersState: SelecBabysitterStateTypeItemType
}

export default function ParentHomePageComponent({ searchParams }: { searchParams: string }) {
  const [babysittersState, setBabysittersState] = useState<SelecBabysitterStateTypeItemType>(
    searchParams as SelecBabysitterStateTypeItemType
  )

  return (
    <div className="flex w-full flex-col gap-4">
      <SelectComponent
        setBabysittersState={setBabysittersState}
        babysittersState={babysittersState}
      />
      <BabySitterCardsComponent babysittersState={babysittersState} />
    </div>
  )
}
