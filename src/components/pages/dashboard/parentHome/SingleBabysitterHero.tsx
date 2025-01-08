import { LucideCircleDollarSign, LucideVerified, LucidStarFill } from '@/components/icons'
import FavoriteComponent from '@/components/pages/dashboard/parentHome/FavoriteComponent'
import { Button } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import { BabySitterStatusEnum, BabySitterStatusLabels } from '@/data/enums/dashboard'
import type { I18nLocale } from '@/i18n/i18n-configs'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'
import Image from 'next/image'
import type { ReactNode } from 'react'
export default function SingleBabysitterHero({
  data,
  locale,
  t,
}: {
  data: BabySitterInterface
  locale: I18nLocale
  t: (body: string) => ReactNode
}) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={data.img}
        alt="authimg"
        className="aspect-square w-full rounded-100 object-cover object-center"
        draggable={false}
      />
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center justify-between">
          <Paragraph variant="body-300" size="size-title-md">
            {data.name[locale]}
          </Paragraph>
          <FavoriteComponent id={data.id} />
        </div>
        <Paragraph variant="body-200" size="size-body-lg" className="flex items-center gap-1">
          {data.status === BabySitterStatusEnum.CERTIFIED && (
            <LucideVerified className="iconify-normal size-4 text-success" />
          )}

          {BabySitterStatusLabels[data.status][locale]}
        </Paragraph>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="mark"
              size="none"
              className="bg-success_light text-size-title-md-mb text-success_dark hover:!bg-success_light sm:text-size-title-md-ds"
            >
              <LucidStarFill className="size-4 text-success" />
              {data.star}
            </Button>
            <Paragraph size="size-body-lg" variant="primary-500">
              {`(${data.review} ${t('review')})`}
            </Paragraph>
          </div>
          <Button variant="mark" size="none">
            <LucideCircleDollarSign className="iconify-normal size-5" />
            {`${t('price')}${data.price}/${t('hour')}`}
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <Paragraph size="size-body-lg" variant="body-300">
            <span className="me-1 text-size-body-lg-mb text-body-200 sm:text-size-body-lg-ds">
              {t('age')}
            </span>
            {data.age}
          </Paragraph>
          <Paragraph size="size-body-lg" variant="body-300">
            <span className="me-1 text-size-body-lg-mb text-body-200 sm:text-size-body-lg-ds">
              {t('experience')}
            </span>
            {data.experience}
          </Paragraph>
          <Paragraph size="size-body-lg" variant="body-300">
            <span className="me-1 text-size-body-lg-mb text-body-200 sm:text-size-body-lg-ds">
              {t('bookings')}
            </span>
            {data.bookings}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
