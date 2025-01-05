import BackButton from '@/components/ui/backButton'
import Paragraph from '@/components/ui/Paragraph'
import { getPathNameFromHeaders } from '@/lib/hooks/useGetServerPageName'
import icon from '@public/icon.png'
import Image from 'next/image'
import { type PropsWithChildren } from 'react'
export default async function layoutwitOutToolbar({ children }: PropsWithChildren) {
  const dynamicRouteName = await getPathNameFromHeaders()
  return (
    <main className="flex flex-col items-center gap-3.5 py-8">
      <div className="flex items-center justify-center">
        <BackButton />
        <Image src={icon} alt="matchSitter logo" className="h-7 w-32" draggable={false} />
      </div>
      <Paragraph variant="heading" size="size-title-lg">
        {dynamicRouteName}
      </Paragraph>
      <main className="w-full px-4">{children}</main>
    </main>
  )
}
