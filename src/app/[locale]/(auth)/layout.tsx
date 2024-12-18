import Image from 'next/image'
import type { PropsWithChildren } from 'react'

type AuthLayoutProps = PropsWithChildren

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-end gap-14 bg-gray-100 px-2 pt-12 duration-200 sm:px-6 md:gap-24">
      <h3 className="relative z-10 text-[clamp(1rem,5vw,3rem)] font-extralight">
        <div className="bg-gradient-to-r from-[#1B6BED] to-[#1DB4FF] bg-clip-text text-transparent">
          The best <strong className="font-bold">CRM Coaching</strong> and
        </div>
        <div className="bg-gradient-to-l from-[#1B6BED] to-[#1DB4FF] bg-clip-text text-transparent">
          <strong className="font-bold">Management</strong> system ever
          <strong className="font-bold">.</strong>
        </div>
      </h3>
      <div className="shadow-soft relative flex min-h-[650px] w-full flex-col items-center gap-16 rounded-t-250 bg-gray-50 px-5 py-8 shadow-[#6780B214] xl:max-w-7xl">
        <BackgroundImages />
        <div className="relative h-12 w-40">
          <Image
            src="/logo_full.png"
            fill
            alt="Cold Coach"
            className="object-contain object-center"
            draggable={false}
          />
        </div>
        <div className="flex w-full max-w-[480px] flex-1 flex-col gap-6 md:gap-12">{children}</div>
      </div>
    </main>
  )
}

export default AuthLayout

function BackgroundImages() {
  return (
    <>
      <Image
        src="/auth/ellipse.png"
        alt="Illustration"
        draggable={false}
        width={285}
        height={285}
        className="absolute bottom-full end-6 select-none lg:end-[clamp(2rem,6vw,8rem)]"
      />
      <Image
        src="/auth/ellipse-full.png"
        alt="Illustration"
        draggable={false}
        width={85}
        height={85}
        className="absolute bottom-[calc(100%+10rem)] start-[clamp(1rem,5vw,10rem)] z-20 select-none lg:bottom-[calc(100%+11rem)] lg:start-[clamp(2rem,16vw,15.5rem)]"
      />
    </>
  )
}
