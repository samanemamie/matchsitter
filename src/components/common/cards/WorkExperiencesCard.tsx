import Paragraph from '@/components/ui/Paragraph'
import type { I18nLocale } from '@/i18n/i18n-configs'
import type { ResponsibilitiesInterface } from '@/lib/typescript/interfaces/babySitter'
import { cn } from '@/lib/utils'
import clsx from 'clsx'

import * as React from 'react'

interface WorkExperiencesHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  name: string
  location: string
  date: string
}
interface WorkExperiencesContentProps extends React.HTMLAttributes<HTMLDivElement> {
  responsibilities: ResponsibilitiesInterface[]
  locale: I18nLocale
  t: (body: string) => React.ReactNode
}

const WorkExperiencesCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col items-start gap-2 rounded-100 bg-background-50 p-2', className)}
      {...props}
    />
  )
)

WorkExperiencesCard.displayName = 'WorkExperiencesCard'

const WorkExperiencesHeader = React.forwardRef<HTMLDivElement, WorkExperiencesHeaderProps>(
  ({ title, name, date, location, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('flex flex-col gap-2', className)} {...props}>
        <Paragraph variant="body-300" size="size-title-lg">
          {title}
        </Paragraph>
        <div className="flex flex-col gap-1">
          <Paragraph variant="body-300" size="size-body-sm">
            {name}
          </Paragraph>
          <Paragraph variant="body-200" size="size-body-sm">
            {location}
          </Paragraph>
          <Paragraph variant="body-200" size="size-body-sm">
            {date}
          </Paragraph>
        </div>
      </div>
    )
  }
)
WorkExperiencesHeader.displayName = 'WorkExperiencesHeader'

const WorkExperiencesContent = React.forwardRef<HTMLDivElement, WorkExperiencesContentProps>(
  ({ t, locale, responsibilities, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('flex flex-col gap-2', className)} {...props}>
        <Paragraph variant="body-300" size="size-title-md">
          {t('responsibilities')}
        </Paragraph>

        {responsibilities.map((item) => {
          return (
            <ul className="list-disc pl-5 text-body-200" key={item.id}>
              <li>
                <Paragraph variant="body-200" size="size-body-sm">
                  {item.title[locale]}
                </Paragraph>
              </li>
            </ul>
          )
        })}
      </div>
    )
  }
)
WorkExperiencesContent.displayName = 'WorkExperiencesContent'

export { WorkExperiencesCard, WorkExperiencesContent, WorkExperiencesHeader }
