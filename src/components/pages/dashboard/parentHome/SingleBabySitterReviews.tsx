'use client'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import type { I18nLocale } from '@/i18n/i18n-configs'
import type { ReviewsInterface } from '@/lib/typescript/interfaces/babySitter'
import { useState } from 'react'

import { LucideChevronDown, LucideChevronUp } from '@/components/icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function SingleBabySitterReviews({
  data,
  review,
  locale,
}: {
  data: ReviewsInterface[]
  locale: I18nLocale
  review: number
}) {
  const initialDisplayCount = 2
  const [displayCount, setDisplayCount] = useState(initialDisplayCount)
  const t = useTranslations('SingleBabysitter')

  const handleShowMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 2, data.length))
  }

  const handleShowLess = () => {
    setDisplayCount(initialDisplayCount)
  }

  const displayedExperiences = data.slice(0, displayCount)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <LargeHeading as="h3" variant="body-300">
          {t('reviews')}
        </LargeHeading>
        <Paragraph size="size-body-lg" variant="body-300">
          {`(${review} ${t('review')})`}
        </Paragraph>
      </div>

      {displayedExperiences.map((item) => {
        return (
          <Accordion key={item.id} type="single" collapsible>
            <AccordionItem value={item.name[locale]} variant="default">
              <AccordionContent>{item.desk[locale]}</AccordionContent>
              <AccordionTrigger />
            </AccordionItem>
          </Accordion>
        )
      })}

      <div className="flex flex-col gap-4">
        {displayCount < data.length && (
          <Button variant="outline" size="sm" className="w-full" onClick={handleShowMore}>
            {t('show_more_reviews')}
            <LucideChevronDown className="size-5" />
          </Button>
        )}
        {displayCount === data.length && displayCount > initialDisplayCount && (
          <Button variant="outline" size="sm" className="w-full" onClick={handleShowLess}>
            {t('show_less')}
            <LucideChevronUp className="ml-2 size-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
