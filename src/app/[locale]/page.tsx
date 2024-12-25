import { Button } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

import icon from '@public/icon.png'
import Link from 'next/link'

const RolePage = async () => {
  const t = await getTranslations('UserRole')
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <div className="flex flex-shrink-0 justify-center pt-6">
        <Image src={icon} alt="matchSitter logo" className="h-7 w-auto" draggable={false} />
      </div>
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-6 px-4">
        <Paragraph variant="body-400" size="size-title-md">
          {t('title')}
        </Paragraph>
        <div className="w-full max-w-md space-y-3.5">
          <Button className="w-full">
            <Link href={`/signin/parent`}>{t('parent')}</Link>
          </Button>
          <Button variant="outline" className="w-full text-primary">
            <Link href={`/signin/babysitter`}>{t('babysitter')}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RolePage
