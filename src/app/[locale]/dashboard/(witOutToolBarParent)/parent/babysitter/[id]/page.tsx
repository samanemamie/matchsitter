import { LucideCalendarDays } from '@/components/icons'
import BabySitterToolbar from '@/components/pages/dashboard/parentHome/BabySitterToolbar'
import SingleBabySitterCertificationsAndMedia from '@/components/pages/dashboard/parentHome/SingleBabySitterAllMedia'
import SingleBabysitterAudioPlayer from '@/components/pages/dashboard/parentHome/SingleBabysitterAudioPlayer'
import SingleBabysitterHero from '@/components/pages/dashboard/parentHome/SingleBabysitterHero'
import SingleBabySitterReviews from '@/components/pages/dashboard/parentHome/SingleBabySitterReviews'
import SingleBabySitterWorkExperiences from '@/components/pages/dashboard/parentHome/SingleBabySitterWorkExperiences'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button, buttonVariants } from '@/components/ui/button'
import LargeHeading from '@/components/ui/LargeHeading'

import { BABY_SITTER } from '@/data/mocks/babySitters'
import { getLocaleWithProps } from '@/i18n/i18n-configs'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

interface Props {
  params: Promise<{ id: number }>
}

export default async function SingleBabysitterPage({ params }: Props) {
  const { id } = await params
  const data = BABY_SITTER.find((item) => item.id === id.toString())

  const { locale } = await getLocaleWithProps()
  const t = await getTranslations('SingleBabysitter')
  if (!data) return

  return (
    <>
      <div className="flex flex-col gap-6 px-4">
        <SingleBabysitterHero t={t} locale={locale} data={data} />
        <SingleBabysitterAudioPlayer audioUrl={data.audioUrl} />

        {data.about && (
          <div className="flex flex-col gap-4">
            <LargeHeading as="h3" variant="body-300">
              {t('about')}
            </LargeHeading>
            <Accordion type="single" collapsible>
              <AccordionItem value={data.name[locale]} variant="default">
                <AccordionContent>{data.about[locale]}</AccordionContent>
                <AccordionTrigger />
              </AccordionItem>
            </Accordion>
          </div>
        )}
        <div className="flex flex-col gap-6">
          {data.workExperiences && (
            <SingleBabySitterWorkExperiences locale={locale} data={data.workExperiences} />
          )}

          <SingleBabySitterCertificationsAndMedia
            t={t}
            mediaData={data.madias!}
            certificationsData={data.certifications!}
          />
          {data.reviews && (
            <SingleBabySitterReviews review={data.review} data={data.reviews!} locale={locale} />
          )}
        </div>
      </div>

      <BabySitterToolbar className="h-[95px]">
        <div className="flex flex-col gap-2">
          <Button size="md" className="h-10 w-full">
            {t('book_now')}
          </Button>

          <Link
            className={cn(buttonVariants({ variant: 'link', size: 'link-md' }), 'h-10')}
            href={`/dashboard/parent/babysitter/calendar/${data.id}`}
          >
            <LucideCalendarDays className="size-6" />
            {t('view_calendar')}
          </Link>
        </div>
      </BabySitterToolbar>
    </>
  )
}
