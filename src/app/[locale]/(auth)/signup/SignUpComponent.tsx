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
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const SignUpComponent = () => {
  const router = useRouter()
  const signUp = useUserStore((state) => state.signUp)
  const { mutate, isPending } = useMutation({
    mutationFn: (data: SignInFormProps) => signUp(data),
  })
  const t = useTranslations('Auth.SignUp')
  const tFormErrors = useTranslations('FormErrors.SignUp')
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
          toast.success('signup_success')
          return router.push('/signin')
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

        <div className="mt-auto flex w-full flex-col gap-4 pt-10">
          <Button disabled={!form.formState.isValid} loading={isPending}>
            {t('submit')}
          </Button>

          <p className="flex items-center justify-center gap-1 text-desk-body-lg text-gray-800">
            {t('have_account_message')}
            <Link role="button" className="text-desk-button-lg text-primary" href="/signin">
              {t('signIn')}
            </Link>
          </p>
        </div>
      </form>
    </Form>
  )
}

export default SignUpComponent
