'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import type { StaticImageData } from 'next/image'
import * as React from 'react'

export interface SecondFileInputProps {
  file?: File | null
  setFile: (file: File) => void
  className?: string
  setIsfileUpload: (val: boolean) => void
}

const uploadDivVariants = cva('', {
  variants: {
    variant: {
      default:
        'text-size_button_sm sm:text-size_button_lg flex items-center justify-center rounded-150 border-2 border-primary bg-transparent px-4 py-3.5 text-primary duration-300 hover:bg-primary-50 focus:bg-primary-100 focus:text-primary disabled:border-gray-600 disabled:text-gray-600',
      mygame:
        'bg-custom-profile-image-gradient text-size_input flex items-center justify-center rounded-150 px-3 py-2 text-gray-50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface UploadDivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof uploadDivVariants> {
  file?: File | null | StaticImageData
  setFile: (file: File) => void
  className?: string
  setIsfileUpload: (val: boolean) => void
}

const SecondFileInput = React.forwardRef<HTMLDivElement, UploadDivProps>(
  ({ className, variant, file, setFile, setIsfileUpload, ...props }, ref) => {
    const t = useTranslations('SecondFileInput')

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      const fileList = event.target.files
      setIsfileUpload(true)
      if (fileList && fileList[0]) {
        setFile(fileList[0])
      }
    }

    return (
      <label className={`${className}`}>
        {file ? (
          <div
            className={clsx('shadow-tagButtonShadow rounded-3600 bg-gray-800 p-2.5', {
              'absolute bottom-[70px] start-24': variant === 'mygame',
            })}
          >
            {/* <HugeiconsEdit02 className="text-lg text-gray-100 sm:text-xl" /> */}
            <p>edit</p>
          </div>
        ) : (
          <div
            className={clsx({
              'relative isolate z-10 w-full text-gray-50 after:absolute after:-inset-[0.7px] after:-z-[1] after:rounded-3600 after:bg-gradient-to-t after:from-[#5C6066] after:via-transparent after:to-transparent focus:after:bg-gradient-to-t focus:after:from-[#C5CAD4]':
                variant === 'mygame',
            })}
          >
            <div className={clsx(uploadDivVariants({ variant }))}>{t('change_logo')}</div>
          </div>
        )}

        <input
          onChange={handleFileChange}
          className="absolute inset-0 hidden"
          type="file"
          accept="image/*"
        />
      </label>
    )
  }
)

SecondFileInput.displayName = 'SecondFileInput'

export { SecondFileInput }
