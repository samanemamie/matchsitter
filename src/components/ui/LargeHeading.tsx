import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const headingVariants = cva('font-romeliosans', {
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
  },
})

interface LargeHeadingItemProps {
  h1?: string
  h2?: string
  h3?: string
  h4?: string
  h5?: string
  h6?: string
  span?: string
}

export interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: keyof LargeHeadingItemProps
}

const LargeHeading: React.FC<LargeHeadingProps> = ({
  className,
  as: Component = 'h1',
  children,
  variant,
  ...props
}) => {
  return (
    <Component
      {...props}
      className={cn(headingVariants({ variant, className }), {
        'text-size-heading-1-mb sm:text-size-heading-1-ds': Component === 'h1',
        'text-size-heading-2-mb sm:text-size-heading-2-ds': Component === 'h2',
        'text-size-heading-3-mb sm:text-size-heading-3-ds': Component === 'h3',
        'text-size-heading-4-mb sm:text-size-heading-4-ds':
          Component === 'h4' || Component === 'span',
        'text-size-heading-5-mb sm:text-size-heading-5-ds': Component === 'h5',
        'text-size-heading-6-mb sm:text-size-heading-6-ds': Component === 'h6',
      })}
    >
      {children}
    </Component>
  )
}

export default LargeHeading
