import {
  LucideCircleDollarSign,
  LucideHeart,
  LucideVerified,
  LucidStarFill,
} from '@/components/icons'
import { LucidHeartFill } from '@/components/icons/fiil/LucidHeartFill'
import { Button } from '@/components/ui/button'
import Paragraph from '@/components/ui/Paragraph'
import { BabySitterStatusEnum, BabySitterStatusLabels } from '@/data/enums/dashboard'
import type { I18nLocale } from '@/i18n/i18n-configs'
import { useAnimationOnChange } from '@/lib/hooks/useAnimationOnChange'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import * as React from 'react'

interface BabySitterCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  status: BabySitterStatusEnum
  img: StaticImageData
  locale: I18nLocale
}

interface BabySitterCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  star: number
  review: number
  price: number
  age: number
  experience: number
  distance: number
}
interface BabySitterCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  bookLink: string
  moreLink: string
}

const BabySitterCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col gap-4 rounded-100 bg-background-50 p-3 [box-shadow:0px_18px_20px_-12px_rgba(92,104,128,0.1)]',
        className
      )}
      {...props}
    />
  )
)

BabySitterCard.displayName = 'BabySitterCard'

const BabySitterCardHeader = React.forwardRef<HTMLDivElement, BabySitterCardHeaderProps>(
  ({ locale, img, name, status, className, ...props }, ref) => {
    const [isFavorite, setIsFavorite] = React.useState(false)
    const [isAnimating, triggerAnimation] = useAnimationOnChange({ duration: 500 })
    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite)
      triggerAnimation()
    }
    return (
      <div ref={ref} className={cn('flex items-center gap-2', className)} {...props}>
        <Image className={cn('size-14 rounded-100')} alt="babySitter" src={img} />
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <Paragraph variant="body-300" size="size-title-md">
              {name}
            </Paragraph>
            <Button
              variant="none"
              size="none"
              onClick={handleFavoriteClick}
              className={cn(isAnimating && 'animate-ping')}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? (
                <LucidHeartFill
                  onClick={() => {
                    setIsFavorite(!isFavorite)
                  }}
                  className="iconify-normal size-5 text-secondary"
                />
              ) : (
                <LucideHeart
                  onClick={() => {
                    setIsFavorite(!isFavorite)
                  }}
                  className="iconify-normal size-5 text-secondary"
                />
              )}
            </Button>
          </div>
          <Paragraph variant="body-200" size="size-body-sm" className="flex items-center gap-1">
            {status === BabySitterStatusEnum.CERTIFIED && (
              <LucideVerified className="iconify-normal size-4 text-success" />
            )}

            {BabySitterStatusLabels[status][locale]}
          </Paragraph>
        </div>
      </div>
    )
  }
)
BabySitterCardHeader.displayName = 'BabySitterCardHeader'

const BabySitterCardContent = React.forwardRef<HTMLDivElement, BabySitterCardContentProps>(
  ({ star, review, price, age, experience, distance, className, ...props }, ref) => {
    const t = useTranslations('BabySitterCard')

    return (
      <div ref={ref} className={cn('flex flex-col gap-3.5', className)} {...props}>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="mark"
              size="none"
              className="text-size-title-sm-mb sm:text-size-title-sm-ds"
            >
              <LucidStarFill className="size-3 text-warning" />
              {star}
            </Button>
            <Paragraph size="size-body-sm" variant="primary">
              {`(${review} ${t('review')})`}
            </Paragraph>
          </div>
          <Button variant="mark" size="none">
            <LucideCircleDollarSign className="iconify-normal size-5" />
            {`${t('price')}${price}/${t('hour')}`}
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="mark" size="none" className="bg-background-100">
            <Paragraph variant="body-200" size="size-body-sm">
              {t('age')}
            </Paragraph>
            {age}
          </Button>
          <Button variant="mark" size="none" className="bg-background-100">
            <Paragraph variant="body-200" size="size-body-sm">
              {t('experience')}
            </Paragraph>
            {experience}
          </Button>
          <Button variant="mark" size="none" className="bg-background-100">
            <Paragraph variant="body-200" size="size-body-sm">
              {t('distance')}
            </Paragraph>
            {`${distance}${t('distance_unit')}`}
          </Button>
        </div>
      </div>
    )
  }
)
BabySitterCardContent.displayName = 'BabySitterCardContent'

const BabySitterCardFooter = React.forwardRef<HTMLDivElement, BabySitterCardFooterProps>(
  ({ bookLink, moreLink, className, ...props }, ref) => {
    const t = useTranslations('BabySitterCard')
    return (
      <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props}>
        <Button size="sm">
          <Link href={bookLink}>{t('book')}</Link>
        </Button>
        <Button variant="link" size="link-sm">
          <Link href={moreLink}>{t('more')}</Link>
        </Button>
      </div>
    )
  }
)
BabySitterCardFooter.displayName = 'BabySitterCardFooter'

export { BabySitterCard, BabySitterCardContent, BabySitterCardFooter, BabySitterCardHeader }
