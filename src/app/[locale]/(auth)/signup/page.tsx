import SignUpComponent from '@/app/[locale]/(auth)/signup/SignUpComponent'
import { getTranslations } from 'next-intl/server'
import React from 'react'

const SignUpPage = async () => {
  const t = await getTranslations('Auth.SignUp')
  return (
    <React.Fragment>
      <h2 className="text-desk-h1 text-center text-primary-800">{t('title')}</h2>
      <SignUpComponent />
    </React.Fragment>
  )
}

export default SignUpPage
