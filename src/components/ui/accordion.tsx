'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { LucideChevronDown } from '@/components/icons'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { useTranslations } from 'next-intl'

const Accordion = AccordionPrimitive.Root

const accordionVariants = cva('flex flex-col items-center', {
  variants: {
    variant: {
      default: 'rounded-100 bg-background-50 p-2',
      ghost: '[&>div>hr]:hidden',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionVariants> {}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionVariants({ className, variant }))}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const t = useTranslations('Accordion')

  return (
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        '-mt-1 flex items-center justify-center gap-2 pb-3 text-size-button-md-mb text-primary transition-all duration-300 ease-in-out sm:text-size-button-md-ds [&[data-state=closed]>.close-button]:hidden [&[data-state=open]>.open-button]:hidden [&[data-state=open]>.trigger-icon]:rotate-180 [&[data-state=open]]:pt-4',
        className
      )}
      {...props}
    >
      <div className="close-button trigger-button">{t('read_less')}</div>
      <div className="open-button trigger-button">{t('read_more')}</div>

      <LucideChevronDown className="trigger-icon shrink-0 text-xl transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  )
})
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionHeader = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Header>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Header
    ref={ref}
    className={cn('flex w-full items-center justify-between pb-2', className)}
    {...props}
  />
))
AccordionHeader.displayName = 'AccordionHeader'

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  lines?: 3 | 6
}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, lines = 6, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    forceMount
    className={cn(
      'text-size-body-lg-mb text-body-300 data-[state=open]:line-clamp-none sm:text-size-body-lg-ds',
      'relative',
      '[&[data-state=closed]]:before:absolute [&[data-state=closed]]:before:bottom-0 [&[data-state=closed]]:before:left-0 [&[data-state=closed]]:before:h-12 [&[data-state=closed]]:before:w-full',
      '[&[data-state=closed]]:before:bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_39.5%)]',
      className,
      {
        ['data-[state=closed]:line-clamp-4']: lines === 3,
        ['data-[state=closed]:line-clamp-6']: lines === 6,
      }
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger }
