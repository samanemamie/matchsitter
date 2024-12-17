import React from 'react'
import { getTranslations } from 'next-intl/server'
import SignInComponent from '@/app/[locale]/(auth)/signin/SignInComponent'

const SignInPage = async () => {
  const t = await getTranslations('Auth.SignIn')
  return (
    <React.Fragment>
      <h2 className="text-center text-desk-h1 text-primary-800">{t('title')}</h2>
      <SignInComponent />
    </React.Fragment>
  )
}

export default SignInPage
