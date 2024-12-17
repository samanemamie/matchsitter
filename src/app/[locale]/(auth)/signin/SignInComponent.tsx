'use client'
import type { SignInFormProps } from '@/lib/typescript/types/forms.type'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { signInSchema } from '@/lib/form/validations/auth.schema'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/form/elements'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/lib/context/AuthProvider'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'

const SignInComponent = () => {
  const { signIn, user } = useUserStore((state) => state)
  const { mutate, isPending } = useMutation({
    mutationFn: (data: SignInFormProps) => signIn(data),
  })

  const t = useTranslations('Auth.SignIn')
  const tFormErrors = useTranslations('FormErrors.SignIn')

  const form = useForm<SignInFormProps>({
    mode: 'onChange',
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: SignInFormProps) {
    mutate(data, {
      onError(error) {
        toast.error(error.message)
      },
      onSuccess(result) {
        if (result.error) return toast.error(result.error.message || 'something_went_wrong')
        if (result.data.user) {
          toast.success('login_success')
          return (window.location.href = '/dashboard')
        }
      },
    })
  }

  return (
    <Form {...form}>
      <form className="flex h-full w-full flex-col sm:h-fit" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('email_label')}</FormLabel>
              <FormControl>
                <Input className="w-full" placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage translator={tFormErrors} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="mt-6">
              <FormLabel>{t('password_label')}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="w-full"
                  placeholder={t('password_label')}
                  visiblePassword="suffix"
                  {...field}
                />
              </FormControl>
              <FormMessage translator={tFormErrors} />
            </FormItem>
          )}
        />
        <p className="mt-4 flex justify-end">
          <Link className="text-desk-button-lg text-primary" href="/forget-password">
            {t('forget')}
          </Link>
        </p>

        <div className="mt-auto flex w-full flex-col gap-4 pt-10">
          <Button disabled={!form.formState.isValid || !!user} loading={isPending}>
            {user !== null ? t('loading') : t('submit')}
          </Button>

          <p className="flex items-center justify-center gap-1 text-desk-body-lg text-gray-800">
            {t('dont_have_account')}
            <Link role="button" className="text-desk-button-lg text-primary" href="/signup">
              {t('signup')}
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}

export default SignInComponent
