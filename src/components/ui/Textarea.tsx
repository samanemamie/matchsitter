'use client'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { type ReactElement, useId } from 'react'

const textareaContainer = cva(
  [
    'box-border overflow-hidden',
    'group flex rounded-100 outline-none',
    'relative w-auto bg-background-50',
    'border-2 text-body-400 placeholder-body-200',
  ],
  {
    variants: {
      color: {
        error: ['error border-error', 'focus-within:border-error'],
        success: ['success border-success', 'text-gray-600 focus-within:border-success'],
        default: ['default', 'border-border-100 focus-within:border-primary'],
      },
      variant: {
        default: ['focus-within:border-2'],
      },
      size: {
        default: ['min-h-[96px] text-input'],
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
      color: 'default',
    },
  }
)

type TTextareaProps = {
  prefixIcon?: ReactElement
  suffixIcon?: ReactElement
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaContainer>

export default function Textarea({
  className,
  prefixIcon,
  suffixIcon,
  color,
  id,
  variant,
  disabled,
  ...props
}: TTextareaProps) {
  const _id = useId()
  id = id || _id
  const textareaClassNames = textareaContainer({ color, variant })

  const PrefixIcon = prefixIcon && <IconBox htmlFor={id}>{prefixIcon}</IconBox>
  const SuffixIcon = suffixIcon && <IconBox htmlFor={id}>{suffixIcon}</IconBox>

  return (
    <div
      className={cn(
        textareaClassNames,
        className,
        { disabled: disabled },
        { prefix: !!PrefixIcon, suffix: !!SuffixIcon }
      )}
    >
      {PrefixIcon}
      <textarea
        disabled={disabled}
        id={id}
        className={cn([
          'w-full border-none px-3 py-2 text-size-input-mb placeholder-body-200 outline-none sm:text-size-input-ds',
          'resize-none bg-transparent text-body-400',
          {
            'ps-0': !!PrefixIcon,
            'pe-0': !!SuffixIcon,
          },
        ])}
        {...props}
      />
      {SuffixIcon}
    </div>
  )
}

function IconBox({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      {...props}
      className={cn(
        'flex h-12 w-12 flex-shrink-0 items-center justify-center text-icon-700',
        className
      )}
    />
  )
}
