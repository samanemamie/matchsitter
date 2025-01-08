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
      <div className="bg-custom-profile-image-gradient relative flex h-[10rem] w-[10rem] cursor-pointer items-center justify-center overflow-hidden rounded-[35px]">
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
        <Button onClick={() => setFileImage(null)} className="px-4 py-3.5">
          {t('delete')}
        </Button>
      )}
      <div className="flex flex-col items-start gap-4">
        {isfileUpload && (
          <div className="space-x-3">
            <Button
              type="button"
              className="!text-size_title_md_ds !px-5 !py-1.5"
              loading={loading}
              onClick={onSubmit}
            >
              {t('submit')}
            </Button>
            <Button
              // onClick={() => {
              //   setFileImage(null), setIsfileUpload(false)
              // }}`
              className="!text-size_title_md_ds !px-4 !py-1"
            >
              {t('cancel')}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
