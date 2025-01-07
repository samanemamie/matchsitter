'use client'

import { TextArea } from '@/components/form/elements'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/Drawer'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

import Paragraph from '@/components/ui/Paragraph'
import { Slider } from '@/components/ui/Slider'

import { reviewSchema } from '@/lib/form/validations/review'

import { useSubmitHandler } from '@/lib/hooks/useSubmitHandler'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

export default function MyBookingReviewDrawer() {
  const t = useTranslations('MyBookingReviewDrawer')
  const { loading, delayedSubmit } = useSubmitHandler()

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      rating: 1,
      comment: '',
    },
  })

  function onSubmit(values: z.infer<typeof reviewSchema>) {
    delayedSubmit(() => {
      toast.success(t('toast'))
      setIsDrawerOpen(false)
    })
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button size="md" variant="outline" className="h-10 w-full px-0">
          {t('title')}
        </Button>
      </DrawerTrigger>

      <DrawerContent overlayClassName="z-10" className="bottom-20 z-10">
        <div className="mx-auto flex w-full flex-col gap-3">
          <DrawerHeader>
            <DrawerTitle className="text-center">{t('title')}</DrawerTitle>

            <DrawerDescription />
          </DrawerHeader>

          <div className="flex flex-col gap-6">
            <Paragraph size="size-label" variant="body-300">
              {t('score')}
            </Paragraph>

            <div className="flex flex-col gap-1.5">
              <Slider defaultValue={[1]} min={1} max={5} step={1} />

              <Paragraph
                size="size-body-sm"
                variant="body-300"
                className="flex justify-between px-2.5"
              >
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </Paragraph>
            </div>

            <Form {...form}>
              <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <TextArea
                          placeholder="Write your review here"
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
            <DrawerFooter>
              <Button
                type="submit"
                onClick={form.handleSubmit(onSubmit)}
                size="md"
                disabled={!form.formState.isValid || loading}
                loading={loading}
              >
                {t('submit')}
              </Button>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
