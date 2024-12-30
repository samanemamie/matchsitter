'use client'

import type { ParentHomeSelectProps } from '@/components/pages/dashboard/parentHome/ParentHomePageComponent'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SELECT_BABY_SITTER } from '@/data/mocks/select'
import { useLocaleWithProps } from '@/i18n/i18n-configs'
import { useQueryString } from '@/lib/hooks/useCreateQueryString'
import type { SelecBabysitterStateTypeItemType } from '@/lib/typescript/types/select'
import Link from 'next/link'

export default function SelectComponent({
  setBabysittersState,
  babysittersState,
}: ParentHomeSelectProps) {
  const { locale } = useLocaleWithProps()
  const { createUrl } = useQueryString()

  return (
    <Select
      defaultValue={babysittersState ? babysittersState : SELECT_BABY_SITTER[0].value}
      onValueChange={(value) => setBabysittersState(value as SelecBabysitterStateTypeItemType)}
    >
      <SelectTrigger isSelected={babysittersState} className="w-full">
        <SelectValue placeholder="role_placeholder" />
      </SelectTrigger>
      <SelectContent>
        {SELECT_BABY_SITTER.map((item) => (
          <Link key={item.id} href={createUrl('babysitters_state', item.value)}>
            <SelectItem key={item.id} value={item.value}>
              {item.title[locale]}
            </SelectItem>
          </Link>
        ))}
      </SelectContent>
    </Select>
  )
}
