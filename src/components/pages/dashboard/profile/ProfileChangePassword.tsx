'use client'

import { Input } from '@/components/form/elements'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import LargeHeading from '@/components/ui/LargeHeading'
import { profilePassword } from '@/lib/form/validations/profile'
import { zodResolver } from '@hookform/resolvers/zod'

import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

export default function ProfileChangePassword() {
  const t = useTranslations('Profile')

  const [loading, setLoading] = useState(false)
  const [isDisable, setIsDisable] = useState(true)

  const form = useForm<z.infer<typeof profilePassword>>({
    resolver: zodResolver(profilePassword),
    defaultValues: {
      confirm_new_password: '',
      current_password: '',
      new_password: '',
    },
  })

  function onSubmit() {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      form.reset({
        new_password: '',
        confirm_new_password: '',
        current_password: '',
      })
      setIsDisable(true)
    }, 2000)
  }

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <div className="space-y-6 pt-2">
      <LargeHeading
        as="h3"
        className="clipped-text text-size_heading_1_mb md:text-size_heading_1_ds text-center !text-2xl"
        style={{ '--from': '#F5F7FB', '--to': '#919395' } as React.CSSProperties}
      >
        {t('password')}
      </LargeHeading>

      <Form {...form}>
        <form className="w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)} ref={formRef}>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <FormField
              control={form.control}
              name="current_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('current_password')}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      disabled={isDisable}
                      placeholder={t('placeholder_password')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="new_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('new_password')}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      disabled={isDisable}
                      placeholder={t('placeholder_password')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_new_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('confirm_new_password')}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      disabled={isDisable}
                      placeholder={t('placeholder_password')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {isDisable ? (
            <Button
              onClick={() => setIsDisable(false)}
              type="button"
              className="w-full px-4 py-3.5 sm:w-auto"
            >
              {t('edit_profile')}
            </Button>
          ) : (
            <Button
              type="submit"
              loading={loading}
              onClick={form.handleSubmit(onSubmit)}
              className="w-full px-4 py-3.5 sm:w-auto"
            >
              {t('save_changes')}
            </Button>
          )}
        </form>
      </Form>
    </div>
  )
}
