'use client'

import Paragraph from '@/components/ui/Paragraph'
import { HOST } from '@/config'

import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import QRCode from 'react-qr-code'

interface Props {
  className?: string
}

export default function QRCodeComponent({ className }: Props) {
  const t = useTranslations('QRCode')

  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      <QRCode
        size={256}
        className="w-full max-w-40"
        bgColor="#00000000"
        fgColor="#EDD4B6"
        radius={10}
        value={`${HOST}/`}
        viewBox={`0 0 256 256`}
      />

      <Paragraph variant="heading" size="size-title-lg" className="-mt-4 max-w-96 text-center">
        {t('title')}
      </Paragraph>
    </div>
  )
}
