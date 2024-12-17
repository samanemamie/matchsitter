import React from 'react'
import { getTranslations } from 'next-intl/server'
import SignUpComponent from '@/app/[locale]/(auth)/signup/SignUpComponent'

const SignUpPage = async () => {
  const t = await getTranslations('Auth.SignUp')
  return (
    <React.Fragment>
      <h2 className="text-center text-desk-h1 text-primary-800">{t('title')}</h2>
      <SignUpComponent />
    </React.Fragment>
  )
}

export default SignUpPage
