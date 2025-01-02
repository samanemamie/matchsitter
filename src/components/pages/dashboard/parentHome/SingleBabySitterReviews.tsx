'use client'

import { LucideChevronDown, LucideChevronUp } from '@/components/icons'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { useShowMore } from '@/lib/hooks/useShowMore.ts'
import type { ReviewsInterface } from '@/lib/typescript/interfaces/babySitter'
import { AnimatePresence, motion } from 'framer-motion'
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
  const t = useTranslations('SingleBabysitter')
  const {
    displayedItems: displayedReviews,
    canShowMore,
    canShowLess,
    handleShowMore,
    handleShowLess,
    containerRef,
  } = useShowMore({
    data,
    initialDisplayCount: 3,
    increment: 2,
  })

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
      <motion.div
        ref={containerRef}
        initial={false}
        animate={{ height: 'auto' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex flex-col gap-4 overflow-hidden"
      >
        <AnimatePresence initial={false}>
          {displayedReviews.map((item) => (
            <motion.div
              key={item.id}
              id={`Review${item.id}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Accordion key={item.id} type="single" collapsible>
                <AccordionItem value={item.name[locale]} variant="default">
                  <AccordionHeader>
                    <div className="flex items-center gap-2">
                      <Paragraph variant="body-300" size="size-title-md">
                        {item.name[locale]}
                      </Paragraph>
                      <div className="rounded-50 bg-success px-2 py-0.5 text-size-title-sm-mb text-gray-50 sm:text-size-title-sm-ds">
                        {item.score}
                      </div>
                    </div>
                    <Paragraph variant="body-200" size="size-body-sm">
                      {item.date[locale]}
                    </Paragraph>
                  </AccordionHeader>
                  <AccordionContent lines={3}>{item.desk[locale]}</AccordionContent>
                  <AccordionTrigger />
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="flex flex-col gap-4">
        {canShowMore && (
          <Button variant="outline" size="sm" className="w-full" onClick={handleShowMore}>
            {t('show_more_reviews')}
            <LucideChevronDown className="size-5" />
          </Button>
        )}
        {canShowLess && (
          <Button variant="outline" size="sm" className="w-full" onClick={handleShowLess}>
            {t('show_less')}
            <LucideChevronUp className="ml-2 size-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
