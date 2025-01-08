'use client'

import { Input } from '@/components/form/elements'
import ProfileChangePassword from '@/components/pages/dashboard/profile/ProfileChangePassword'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Paragraph from '@/components/ui/Paragraph'
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

  const [showPassword, setShowPassword] = useState(false)
  const [isDisable, setIsDisable] = useState(true)
  const { data: profileData, refetch } = useGetProfile()
  const { mutate: mutateProfile, isPending } = useUpdateProfile()

  const form = useForm<z.infer<typeof profile>>({
    resolver: zodResolver(profile),
    defaultValues: {
      full_name: profileData?.full_name ?? '',
      // nick_name: profileData?.nick_name ?? '',
      email: profileData?.email ?? '',
    },
  })

  function onSubmit(value: z.infer<typeof profile>) {
    mutateProfile(
      {
        full_name: value.full_name,
        // nick_name: value.nick_name,
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
      <form className="w-full space-y-6" onSubmit={form.handleSubmit(onSubmit)} ref={formRef}>
        <div className="space-y-8">
          <div className="flex w-full flex-col items-center gap-6 lg:flex-row">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem className="lg:w-72">
                  <FormLabel>{t('name')}</FormLabel>
                  <FormControl>
                    <Input disabled={isDisable} placeholder={t('placeholderName')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nick_name"
              render={({ field }) => (
                <FormItem className="lg:w-72">
                  <FormLabel>{t('nick_name')}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isDisable}
                      placeholder={t('nick_name_placeholderName')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="lg:w-72">
                  <FormLabel>{t('email')}</FormLabel>
                  <FormControl>
                    <Input disabled placeholder={t('placeholderEmail')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox onCheckedChange={() => setShowPassword(!showPassword)} />
            <Paragraph variant="background-100" size="size-body-sm">
              {t('change_password')}
            </Paragraph>
          </div>
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
            loading={isPending}
            onClick={form.handleSubmit(onSubmit)}
            className="w-full px-4 py-3.5 sm:w-auto"
          >
            {t('save_changes')}
          </Button>
        )}
      </form>
      <div className="w-full">{showPassword && <ProfileChangePassword />}</div>
    </Form>
  )
}
