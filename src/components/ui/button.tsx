import type { ReactNode } from 'react'
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { SvgSpinner12Dots } from '@/components/icons/SvgSpinner12Dots'

const buttonVariants = cva(
  [
    'group relative flex w-auto select-none items-center justify-center gap-2',
    'rounded-100', //not organized
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-gradient-to-b from-[#1DB4FF] to-[#1B6BED] text-gray-50',
          'hover:bg-primary-600 hover:text-gray-50', //hover
          'text-gray-50 focus:bg-primary-700', //focus
          'disabled:bg-primary-50 disabled:text-primary-100', //disabled
          'hover:from-transparent hover:to-transparent focus:from-transparent focus:to-transparent disabled:from-transparent disabled:to-transparent', //hidden gradient
        ],
        outline: [
          'border-2 border-primary text-primary',
          'hover:border-primary hover:bg-primary hover:text-gray-50', //hover
          'text-primary focus:border-primary-600 focus:bg-primary-600 focus:text-gray-50', //focus
          'disabled:border-primary-100 disabled:bg-transparent disabled:text-primary-100', //disabled
        ],
        flat: ['bg-gray-200'],
        none: [],
      },
      size: {
        lg: 'h-12 px-8 text-desk-button-lg',
        sm: 'h-10 px-4 text-desk-button-sm',
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
        <div className="invisible absolute inset-0 flex items-center justify-center text-gray-50 group-[.loading]:!visible">
          {loader ? loader : <SvgSpinner12Dots className="size-7" />}
        </div>
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
