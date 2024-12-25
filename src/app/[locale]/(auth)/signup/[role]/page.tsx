import type { AuthRoleProps } from '@/app/[locale]/(auth)/layout'
import SignUpComponent from '@/app/[locale]/(auth)/signup/SignUpComponent'
import LargeHeading from '@/components/ui/LargeHeading'
import { getTranslations } from 'next-intl/server'

const SignUpPage = async ({ params }: { params: Promise<{ role: AuthRoleProps }> }) => {
  const { role } = await params
  const t = await getTranslations('Auth.SignUp')
  return (
    <div className="space-y-6">
      <LargeHeading className="text-center" as="h2">
        {role === 'parent' ? t('parent_title') : t('babysitter_title')}
      </LargeHeading>
      <SignUpComponent role={role} />
    </div>
  )
}

export default SignUpPage
