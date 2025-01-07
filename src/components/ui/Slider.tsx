'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import IconSlider from '@/components/icons/slider'
import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn('relative flex w-full touch-none select-none items-center', className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-background-100">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />

      <div className="flex h-2 w-full items-center justify-between px-3 py-[1px]">
        <div />
        <div className="h-full w-[1px] rounded-full bg-body-300" />
        <div className="h-full w-[1px] rounded-full bg-body-300" />
        <div className="h-full w-[1px] rounded-full bg-body-300" />
        <div />
      </div>
    </SliderPrimitive.Track>

    <SliderPrimitive.Thumb className="relative mt-0.5 flex size-6 items-center justify-center rounded-full bg-primary text-primary-400 transition focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
      <IconSlider className="size-2.5 text-primary-50" />
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
