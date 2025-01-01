'use client'

import {
  WorkExperiencesCard,
  WorkExperiencesContent,
  WorkExperiencesHeader,
} from '@/components/common/cards/WorkExperiencesCard'
import { LucideChevronDown, LucideChevronUp } from '@/components/icons'
import { Button } from '@/components/ui/button'
import LargeHeading from '@/components/ui/LargeHeading'
import type { I18nLocale } from '@/i18n/i18n-configs'
import type { WorkExperiencesInterface } from '@/lib/typescript/interfaces/babySitter'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function SingleBabySitterWorkExperiences({
  data,
  locale,
}: {
  data: WorkExperiencesInterface[]
  locale: I18nLocale
}) {
  const [showAll, setShowAll] = useState(false)
  const initialDisplayCount = 2
  const displayedExperiences = showAll ? data : data.slice(0, initialDisplayCount)

  const t = useTranslations('SingleBabysitter')

  const handleToggleShow = () => {
    setShowAll(!showAll)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <LargeHeading as="h3" variant="body-300">
          {t('workExperiences')}
        </LargeHeading>
        {displayedExperiences.map((item) => {
          return (
            <WorkExperiencesCard key={item.id}>
              <WorkExperiencesHeader
                title={item.title[locale]}
                name={item.name[locale]}
                location={item.location[locale]}
                date={item.date[locale]}
              />
              <WorkExperiencesContent
                t={t}
                locale={locale}
                responsibilities={item.responsibilities}
              />
            </WorkExperiencesCard>
          )
        })}
      </div>
      <div className="flex flex-col gap-4">
        {data.length > initialDisplayCount && (
          <Button variant="outline" size="sm" className="w-full" onClick={handleToggleShow}>
            {showAll ? t('show_less') : t('show_more_experiences')}
            {showAll ? (
              <LucideChevronUp className="size-5" />
            ) : (
              <LucideChevronDown className="size-5" />
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
