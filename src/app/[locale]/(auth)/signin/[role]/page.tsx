import type { AuthRoleProps } from '@/app/[locale]/(auth)/layout'
import SignInComponent from '@/app/[locale]/(auth)/signin/SignInComponent'
import LargeHeading from '@/components/ui/LargeHeading'
import { getTranslations } from 'next-intl/server'

const SignInPage = async ({ params }: { params: Promise<{ role: AuthRoleProps }> }) => {
  const { role } = await params
  const t = await getTranslations('Auth.SignIn')

  return (
    <div className="space-y-6">
      <LargeHeading className="text-center" as="h2">
        {role === 'parent' ? t('parent_title') : t('babysitter_title')}
      </LargeHeading>
      <SignInComponent role={role} />
    </div>
  )
}

export default SignInPage
