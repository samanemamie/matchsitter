'use client'
import type { AuthRoleProps } from '@/app/[locale]/(auth)/layout'
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
import Paragraph from '@/components/ui/Paragraph'
import { useUserStore } from '@/lib/context/AuthProvider'
import { signInSchema } from '@/lib/form/validations/auth.schema'
import type { SignInFormProps } from '@/lib/typescript/types/forms.type'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

const SignUpComponent = ({ role }: { role: AuthRoleProps }) => {
  const router = useRouter()

  const signUp = useUserStore((state) => state.signUp)
  const { user } = useUserStore((state) => state)

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
    mutate(
      { ...data, role },
      {
        onError(error) {
          toast.error(error.message)
        },
        onSuccess(result) {
          if (result.error) return toast.error(result.error.message || 'something_went_wrong')
          if (result.data.user) {
            return router.replace(role === 'parent' ? '/dashboard/parent' : '/dashboard/babysitter')
          }
        },
      }
    )
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

        <div className="mt-auto flex w-full flex-col gap-4 pt-8">
          <Button disabled={!form.formState.isValid || !!user} loading={isPending}>
            {user !== null ? t('loading') : t('submit')}
          </Button>

          <Paragraph
            variant="body-300"
            size="size-body-sm"
            className="flex items-center justify-center gap-2"
          >
            {t('have_account_message')}
            <Link
              role="button"
              className="text-size-button-sm-mb text-primary sm:text-size-button-sm-ds"
              href={`/signin/${role}`}
            >
              {t('signIn')}
            </Link>
          </Paragraph>
        </div>
      </form>
    </Form>
  )
}

export default SignUpComponent
