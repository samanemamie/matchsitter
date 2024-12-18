import { cva, type VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import React, { forwardRef } from 'react'

export const paragraphVariants = cva('', {
  variants: {
    variant: {
      ring: 'text-ring',
      foreground: 'text-foreground',
      primary: 'text-primary',
      'primary-50': 'text-primary-50',
      'primary-100': 'text-primary-100',
      'primary-200': 'text-primary-200',
      'primary-300': 'text-primary-300',
      'primary-400': 'text-primary-400',
      'primary-500': 'text-primary-500',
      'primary-600': 'text-primary-600',
      'primary-700': 'text-primary-700',
      'primary-800': 'text-primary-800',
      'primary-900': 'text-primary-900',
      'primary-reverse': 'text-primary',
      'primary-50-reverse': 'text-primary-50',
      'primary-100-reverse': 'text-primary-100',
      'primary-200-reverse': 'text-primary-200',
      'primary-300-reverse': 'text-primary-300',
      'primary-400-reverse': 'text-primary-400',
      'primary-500-reverse': 'text-primary-500',
      'primary-600-reverse': 'text-primary-600',
      'primary-700-reverse': 'text-primary-700',
      'primary-800-reverse': 'text-primary-800',
      'primary-900-reverse': 'text-primary-900',
      surface: 'text-surface',
      border: 'text-border',
      'border-100': 'text-border-100',
      'border-200': 'text-border-200',
      'border-300': 'text-border-300',
      heading: 'text-heading',
      'body-100': 'text-body-100',
      'body-200': 'text-body-200',
      'body-300': 'text-body-300',
      'body-400': 'text-body-400',
      button: 'text-button',
      background: 'text-background',
      'background-100': 'text-background-100',
      'background-200': 'text-background-200',
      'background-300': 'text-background-300',
      'background-400': 'text-background-400',
      stale: 'text-stale',
      success: 'text-success',
      error: 'text-error',
      warning: 'text-warning',
      info: 'text-info',
      input: 'text-input',
      'icon-500': 'text-icon-500',
      'icon-800': 'text-icon-800',
      'neutral-100': 'text-neutral-100',
      'neutral-300': 'text-neutral-300',
      'neutral-500': 'text-neutral-500',
      'neutral-900': 'text-neutral-900',
      'neutral-themed': 'text-neutral-900 dark:text-neutral-100',
      destructive: 'text-destructive',
      'destructive-foreground': 'text-destructive-foreground',
      muted: 'text-muted',
      'muted-foreground': 'text-muted-foreground',
      accent: 'text-accent',
      'accent-foreground': 'text-accent-foreground',
      popover: 'text-popover',
      'popover-foreground': 'text-popover-foreground',
      card: 'text-card',
      'card-foreground': 'text-card-foreground',
    },
    size: {
      'size-heading-1': 'text-size-heading-1-mb sm:text-size-heading-1-ds',
      'size-heading-2': 'text-size-heading-2-mb sm:text-size-heading-2-ds',
      'size-heading-3': 'text-size-heading-3-mb sm:text-size-heading-3-ds',
      'size-heading-4': 'text-size-heading-4-mb sm:text-size-heading-4-ds',
      'size-heading-5': 'text-size-heading-5-mb sm:text-size-heading-5-ds',
      'size-heading-6': 'text-size-heading-6-mb sm:text-size-heading-6-ds',
      'size-title-lg': 'text-size-title-lg-mb sm:text-size-title-lg-ds',
      'size-title-md': 'text-size-title-md-mb sm:text-size-title-md-ds',
      'size-title-sm': 'text-size-title-sm-mb sm:text-size-title-sm-ds',
      'size-body-lg': 'text-size-body-lg-mb sm:text-size-body-lg-ds',
      'size-body-sm': 'text-size-body-sm-mb sm:text-size-body-sm-ds',
      'size-button-lg': 'text-size-button-lg-mb sm:text-size-button-lg-ds',
      'size-button-md': 'text-size-button-md-mb sm:text-size-button-md-ds',
      'size-button-sm': 'text-size-button-sm-mb sm:text-size-button-sm-ds',
      'size-label': 'text-size-label-mb sm:text-size-label-ds',
      'size-input': 'text-size-input-mb sm:text-size-input-ds',
      'size-caption': 'text-size-caption-mb sm:text-size-caption-ds',
    },
  },
})

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  span?: boolean
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, className, size, variant, span, ...props }, ref) => {
    const Comp = span ? 'span' : 'p'

    return (
      <Comp ref={ref} {...props} className={clsx(paragraphVariants({ size, className, variant }))}>
        {children}
      </Comp>
    )
  }
)

Paragraph.displayName = 'Paragraph'

export default Paragraph
