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
    <div className="space-y-6">
      <LargeHeading as="h4" variant="body-400">
        {t('password')}
      </LargeHeading>

      <Form {...form}>
        <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)} ref={formRef}>
          <div className="contents">
            <FormField
              control={form.control}
              name="current_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel disabled={isDisable}>{t('current_password')}</FormLabel>
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
                  <FormLabel disabled={isDisable}>{t('new_password')}</FormLabel>
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
                  <FormLabel disabled={isDisable}>{t('confirm_new_password')}</FormLabel>
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
            <Button onClick={() => setIsDisable(false)} type="button" size="sm">
              {t('edit_profile')}
            </Button>
          ) : (
            <Button type="submit" loading={loading} onClick={form.handleSubmit(onSubmit)} size="sm">
              {t('save_changes')}
            </Button>
          )}
        </form>
      </Form>
    </div>
  )
}
