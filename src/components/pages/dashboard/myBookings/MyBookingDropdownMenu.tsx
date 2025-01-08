import { LucideCircleOff, LucideMoreVertical, LucideTrash } from '@/components/icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import Paragraph from '@/components/ui/Paragraph'
import type { ReactNode } from 'react'
import { toast } from 'sonner'

export default function MyBookingDropdownMenu({
  t,
  id,
  deleteBooking,
}: {
  t: (body: string) => ReactNode
  id: string
  deleteBooking: (id: string) => void
}) {
  const handleDelete = () => {
    deleteBooking(id)
    toast.success(t('toast_delete'))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <LucideMoreVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="me-8 flex w-[120px] flex-col gap-2">
        <div className="flex items-center gap-2 p-2 text-body-300">
          <LucideCircleOff className="size-4" />
          <Paragraph size="size-body-sm">{t('dropdownMenu.cancel')}</Paragraph>
        </div>
        <div onClick={handleDelete} className="flex items-center gap-2 p-2">
          <LucideTrash className="size-4" />
          <Paragraph size="size-body-sm">{t('dropdownMenu.delete')}</Paragraph>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
