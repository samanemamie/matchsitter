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
import { useShowMore } from '@/lib/hooks/useShowMore.ts'
import type { WorkExperiencesInterface } from '@/lib/typescript/interfaces/babySitter'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function SingleBabySitterWorkExperiences({
  data,
  locale,
}: {
  data: WorkExperiencesInterface[]
  locale: I18nLocale
}) {
  const t = useTranslations('SingleBabysitter')
  const {
    displayedItems: displayedWorkExperiences,
    canShowMore,
    canShowLess,
    handleShowMore,
    handleShowLess,
    containerRef,
  } = useShowMore({
    data,
    initialDisplayCount: 2,
    increment: 2,
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <LargeHeading as="h3" variant="body-300">
          {t('workExperiences')}
        </LargeHeading>
        <motion.div
          ref={containerRef}
          initial={false}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex flex-col gap-4 overflow-hidden"
        >
          <AnimatePresence initial={false}>
            {displayedWorkExperiences.map((item) => (
              <motion.div
                key={item.id}
                id={`Review${item.id}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        {canShowMore && (
          <Button variant="outline" size="sm" className="w-full" onClick={handleShowMore}>
            {t('show_more_experiences')}
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
