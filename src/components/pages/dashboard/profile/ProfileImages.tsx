'use client'

import { LucideUser } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { SecondFileInput } from '@/components/ui/secondFileInput'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

export default function ProfileImages() {
  const [fileImage, setFileImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [isfileUpload, setIsfileUpload] = useState(false)
  const t = useTranslations('ProfileImages')

  function onSubmit() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsfileUpload(false)
    }, 2000)
  }

  return (
    <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-end">
      <div className="relative flex h-[80px] w-[80px] cursor-pointer items-center justify-center overflow-hidden rounded-200 border border-gray-200">
        {fileImage ? (
          <Image
            alt="user"
            src={URL.createObjectURL(fileImage)}
            width={500}
            height={500}
            className="h-full max-h-[11rem] max-w-[11rem] object-contain"
          />
        ) : (
          <LucideUser className="flex-none text-[5rem] text-gray-500" />
        )}
      </div>
      {!isfileUpload && (
        <SecondFileInput
          className={cn('cursor-pointer', {
            'absolute left-32 top-32 md:-bottom-4': fileImage,
          })}
          file={fileImage}
          setIsfileUpload={setIsfileUpload}
          setFile={setFileImage}
        />
      )}

      {fileImage && !isfileUpload && (
        <Button className="-mt-4" onClick={() => setFileImage(null)} size="sm">
          {t('delete')}
        </Button>
      )}
      <div className="flex flex-col items-start gap-4">
        {isfileUpload && (
          <div className="flex flex-col gap-2">
            <Button type="button" size="sm" loading={loading} onClick={onSubmit}>
              {t('submit')}
            </Button>
            <Button
              onClick={() => {
                setFileImage(null)
                setIsfileUpload(false)
              }}
              size="sm"
              variant="outline"
            >
              {t('cancel')}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
