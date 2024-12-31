'use client'
import { LucideEye, LucideEyeOff } from '@/components/icons'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { type ReactElement, useId, useState } from 'react'

const inputContainer = cva(
  [
    'box-border overflow-hidden',
    'group flex rounded-100 outline-none', //temporary
    'relative w-auto bg-background-50',
    'border-2 text-body-400 placeholder-body-200', //override
  ],
  {
    variants: {
      color: {
        error: [
          'error border-error',
          'focus-within:border-error', //override
        ],
        success: [
          'success border-success',
          'text-gray-600 focus-within:border-success', //override
        ],
        default: [
          'default',
          'border-border-100 focus-within:border-primary', //override
        ],
      },
      variant: {
        default: ['focus-within:border-2'],
      },
      size: {
        default: ['h-[48px] text-input'],
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
      color: 'default',
    },
  }
)

type TInputProps = {
  visiblePassword?: 'prefix' | 'suffix'
  prefixIcon?: ReactElement
  suffixIcon?: ReactElement
} & React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputContainer>

export default function Input({
  type: Type,
  className,
  prefixIcon,
  suffixIcon,
  visiblePassword,
  color,
  id,
  variant,
  disabled,
  ...props
}: TInputProps) {
  const _id = useId()
  id = id || _id
  const [isVisible, setIsVisible] = useState(false)
  const [type] = useState(() => Type)
  const inputClassNames = inputContainer({ color, variant })

  const PasswordToggle = (
    <IconBox onClick={() => setIsVisible((p) => !p)} role="button">
      {isVisible ? <LucideEyeOff /> : <LucideEye />}
    </IconBox>
  )
  const PrefixIcon =
    visiblePassword === 'prefix'
      ? PasswordToggle
      : prefixIcon && <IconBox htmlFor={id}>{prefixIcon}</IconBox>

  const SuffixIcon =
    visiblePassword === 'suffix'
      ? PasswordToggle
      : suffixIcon && <IconBox htmlFor={id}>{suffixIcon}</IconBox>

  return (
    <div
      className={cn(
        inputClassNames,
        className,
        { disabled: disabled },
        { prefix: !!PrefixIcon, suffix: !!SuffixIcon }
      )}
    >
      {PrefixIcon}
      <input
        disabled={disabled}
        id={id}
        type={isVisible ? (type === 'password' ? 'text' : type) : type}
        className={cn([
          'w-full border-none px-3 text-size-input-mb placeholder-body-200 outline-none sm:text-size-input-ds',
          'bg-transparent text-body-400',
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
        'flex h-full w-12 flex-shrink-0 items-center justify-center text-icon-700',
        className
      )}
    />
  )
}
