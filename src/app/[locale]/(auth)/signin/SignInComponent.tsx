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
import { useUserStore } from '@/lib/context/AuthProvider'
import { signInSchema } from '@/lib/form/validations/auth.schema'
import type { SignInFormProps } from '@/lib/typescript/types/forms.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
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
                  placeholder="Enter at least 8 Character"
                  visiblePassword="suffix"
                  {...field}
                />
              </FormControl>
              <FormMessage translator={tFormErrors} />
            </FormItem>
          )}
        />
        <Link
          className="mt-4 flex justify-end self-end text-size-button-sm-mb text-primary sm:text-size-button-sm-ds"
          href="/forget-password"
        >
          {t('forget')}
        </Link>

        <div className="mt-auto flex w-full flex-col gap-4 pt-10">
          <Button disabled={!form.formState.isValid || !!user} loading={isPending}>
            {user !== null ? t('loading') : t('submit')}
          </Button>

          <p className="text-desk-body-lg flex items-center justify-center gap-1 text-gray-800">
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
