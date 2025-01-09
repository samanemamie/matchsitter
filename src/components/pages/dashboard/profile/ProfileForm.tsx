'use client'

import { Input } from '@/components/form/elements'
import ProfileChangePassword from '@/components/pages/dashboard/profile/ProfileChangePassword'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { profile } from '@/lib/form/validations/profile'

import useUpdateProfile from '@/lib/mutations/useUpdateProfile'
import useGetProfile from '@/lib/queries/useGetProfile'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

export default function ProfileForm() {
  const t = useTranslations('Profile')

  const [isDisable, setIsDisable] = useState(true)
  const { data: profileData, refetch } = useGetProfile()
  const { mutate: mutateProfile, isPending } = useUpdateProfile()

  const form = useForm<z.infer<typeof profile>>({
    resolver: zodResolver(profile),
    defaultValues: {
      full_name: profileData?.full_name ?? '',
      email: profileData?.email ?? '',
    },
  })

  function onSubmit(value: z.infer<typeof profile>) {
    mutateProfile(
      {
        full_name: value.full_name,
        id: profileData?.id,
      },
      {
        onSuccess: () => {
          toast.success(t('toast'))

          setIsDisable(true)
          refetch()
        },
        onError: () => {
          toast.success(t('toast_error'))
        },
      }
    )
  }
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <Form {...form}>
      <form
        className="flex w-full flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
        ref={formRef}
      >
        <div className="space-y-8">
          <div className="flex w-full flex-col gap-6">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel disabled={isDisable}>{t('name')}</FormLabel>
                  <FormControl>
                    <Input disabled={isDisable} placeholder={t('placeholderName')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel disabled>{t('email')}</FormLabel>
                  <FormControl>
                    <Input disabled placeholder={t('placeholderEmail')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {isDisable ? (
          <Button onClick={() => setIsDisable(false)} type="button" size="sm">
            {t('edit_profile')}
          </Button>
        ) : (
          <Button loading={isPending} onClick={form.handleSubmit(onSubmit)} size="sm">
            {t('save_changes')}
          </Button>
        )}
      </form>
      <div className="w-full">
        <ProfileChangePassword />
      </div>
    </Form>
  )
}
