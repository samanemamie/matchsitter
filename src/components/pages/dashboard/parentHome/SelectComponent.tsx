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
import type { SelecBabysitterStateTypeItemType } from '@/lib/typescript/types/select'
import { useTranslations } from 'next-intl'

export default function SelectComponent({
  setBabysittersState,
  babysittersState,
}: ParentHomeSelectProps) {
  const t = useTranslations('')
  const { locale } = useLocaleWithProps()

  return (
    <Select
      defaultValue={SELECT_BABY_SITTER[0].value}
      onValueChange={(value) => setBabysittersState(value as SelecBabysitterStateTypeItemType)}
    >
      <SelectTrigger isSelected={babysittersState} className="w-full">
        <SelectValue placeholder="role_placeholder" />
      </SelectTrigger>
      <SelectContent>
        {SELECT_BABY_SITTER.map((item) => (
          <SelectItem key={item.id} value={item.value}>
            {item.title[locale]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
