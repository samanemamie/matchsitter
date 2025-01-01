import LargeHeading from '@/components/ui/LargeHeading'
import type { CertificationsInterface } from '@/lib/typescript/interfaces/babySitter'
import Image from 'next/image'
import type { ReactNode } from 'react'

export default function SingleBabySitterCertificationsAndMedia({
  mediaData,
  certificationsData,
  t,
}: {
  mediaData: CertificationsInterface[]
  certificationsData: CertificationsInterface[]

  t: (body: string) => ReactNode
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <LargeHeading as="h3" variant="body-300">
          {t('certifications')}
        </LargeHeading>
        <div className="container-overflow flex w-full max-w-full items-center gap-2 overflow-x-auto">
          {certificationsData.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.img}
                alt="card"
                className="h-[78px] w-[101px] object-cover object-center"
              />
            )
          })}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <LargeHeading as="h3" variant="body-300">
          {t('media')}
        </LargeHeading>
        <div className="container-overflow flex w-full max-w-full items-center gap-2 overflow-x-auto">
          {mediaData.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.img}
                alt="card"
                className="h-[78px] w-[101px] object-cover object-center"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
