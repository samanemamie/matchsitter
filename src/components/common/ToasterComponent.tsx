'use client'

import { LucideCircleCheck, LucideCircleX } from '@/components/icons'
import { Toaster } from 'sonner'

export default function ToasterComponent() {
  return (
    <Toaster
      toastOptions={{
        classNames: {
          success:
            '!border-[1.5px] !border-success !bg-success_light !text-size-body-lg-mb sm:!text-size-body-lg-ds !text-success_dark',
          error:
            '!border-[1.5px] !border-error !bg-error_light !text-size-body-lg-mb !text-error_dark sm:!text-size-body-lg-ds',
        },
      }}
      icons={{
        success: <LucideCircleCheck className="size-6 text-success" />,
        error: <LucideCircleX className="size-6 text-error" />,
      }}
      richColors
    />
  )
}
