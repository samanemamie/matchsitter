import { Toolbar } from '@/components/layout/Toolbar'
import Paragraph from '@/components/ui/Paragraph'
import { getPathNameFromHeaders } from '@/lib/hooks/useGetServerPageName'

import icon from '@public/icon.png'
import Image from 'next/image'
import { type PropsWithChildren } from 'react'
export default async function layoutwitToolbar({ children }: PropsWithChildren) {
  const dynamicRouteName = await getPathNameFromHeaders()

  return (
    <main className="flex flex-col items-center gap-3.5 py-8">
      <Image src={icon} alt="matchSitter logo" className="h-7 w-32" draggable={false} />
      <Paragraph variant="heading" size="size-title-lg">
        {dynamicRouteName}
      </Paragraph>
      <main className="w-full px-4">{children}</main>
      <Toolbar />
    </main>
  )
}
