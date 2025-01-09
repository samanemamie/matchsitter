'use client'

import { LucidePen } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

import type { StaticImageData } from 'next/image'
import * as React from 'react'

export interface SecondFileInputProps {
  file?: File | null
  setFile: (file: File) => void
  className?: string
  setIsfileUpload: (val: boolean) => void
}

export interface UploadDivProps extends React.HTMLAttributes<HTMLDivElement> {
  file?: File | null | StaticImageData
  setFile: (file: File) => void
  className?: string
  setIsfileUpload: (val: boolean) => void
}

const SecondFileInput = React.forwardRef<HTMLDivElement, UploadDivProps>(
  ({ className, file, setFile, setIsfileUpload, ...props }, ref) => {
    const t = useTranslations('SecondFileInput')
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      const fileList = event.target.files
      setIsfileUpload(true)
      if (fileList && fileList[0]) {
        setFile(fileList[0])
      }
    }
    //TODO:shadow does not work
    return (
      <div className="relative">
        {file ? (
          <Button
            variant="none"
            size="none"
            className={cn(
              'absolute bottom-[18px] start-4 flex size-8 flex-col items-center justify-center rounded-3600 bg-gray-50 shadow-lg'
            )}
          >
            <LucidePen className="size-5 text-info" />
          </Button>
        ) : (
          <Button size="sm">{t('change_logo')}</Button>
        )}
        <input
          onChange={handleFileChange}
          className="absolute inset-0 cursor-pointer opacity-0"
          type="file"
          accept="image/*"
        />
      </div>
    )
  }
)

SecondFileInput.displayName = 'SecondFileInput'

export { SecondFileInput }
