import { SvgSpinners3DotsFade } from '@/components/icons/SvgSpinners3DotsFade'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'
import * as React from 'react'

const buttonVariants = cva(
  [
    'group relative flex w-auto select-none items-center justify-center gap-2',
    'rounded-100 duration-300', //not organized
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-primary text-body-50',
          'focus:bg-primary-300', //focus
          'disabled:bg-background-200 disabled:text-body-100', //disabled
        ],
        outline: [
          'border-[1.5px] border-primary text-primary',
          'focus:bg-background-100', //focus
          'disabled:border-border-100 disabled:text-body-100', //disabled
        ],
        link: [
          'text-primary',
          'focus:bg-background-100', //focus
          'disabled:text-body-100', //disabled
        ],
        backIcon: ['bg-background-200 text-icon-800'],
        flat: ['text-icon-800'],
        none: [],
      },
      size: {
        lg: 'h-14 px-[81px] text-size-button-lg-ds sm:text-size-button-lg-mb',
        md: 'h-12 px-[81px] text-size-button-md-mb sm:text-size-button-md-ds',
        sm: 'h-10 px-[81px] text-size-button-sm-mb sm:text-size-button-sm-ds',
        link: 'text-size-button-lg-ds sm:text-size-button-lg-mb',
        backIcon: 'h-9 w-9 text-xl',
        'icon-lg': 'size-10 md:size-12',
        'icon-md': 'size-10',
        'icon-sm': 'size-8',
        none: [],
      },
    },
    compoundVariants: [
      {
        variant: ['none'],
        size: ['lg', 'sm'],
        className: 'h-auto rounded-none px-2',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'lg',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  loader?: ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, loader, loading, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className: cn({ 'loading pointer-events-none [&>*]:invisible': loading }, className),
          })
        )}
        ref={ref}
        {...props}
      >
        <div className="contents">{children}</div>
        <div className="invisible absolute inset-0 flex items-center justify-center group-[.loading]:!visible">
          {loader ? loader : <SvgSpinners3DotsFade className="size-7" />}
        </div>
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
