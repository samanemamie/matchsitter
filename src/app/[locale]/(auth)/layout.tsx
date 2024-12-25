import Image from 'next/image'
import type { PropsWithChildren } from 'react'

import BackButton from '@/components/ui/backButton'
import authimg from '@public/auth/authimg.png'
import icon from '@public/icon.png'

type AuthLayoutProps = PropsWithChildren

export type AuthRoleProps = 'parent' | 'babysitter'

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-dvh w-dvw flex-col items-center justify-center px-4 py-8">
      <AuthHeader />
      {children}
    </div>
  )
}
export default AuthLayout

function AuthHeader() {
  return (
    <div className="flex flex-col items-center gap-5 pb-10">
      <div className="flex items-center justify-center">
        <BackButton />
        <Image src={icon} alt="matchSitter logo" className="h-7 w-32" draggable={false} />
      </div>
      <Image src={authimg} alt="authimg" className="h-auto w-[270px]" draggable={false} />
    </div>
  )
}
