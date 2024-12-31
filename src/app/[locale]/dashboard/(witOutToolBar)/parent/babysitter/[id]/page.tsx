import SingleBabysitterAudioPlayer from '@/components/pages/dashboard/parentHome/SingleBabysitterAudioPlayer'
import SingleBabysitterHero from '@/components/pages/dashboard/parentHome/SingleBabysitterHero'
import { BABY_SITTER } from '@/data/mocks/babySitters'
import { getLocaleWithProps } from '@/i18n/i18n-configs'
import { getTranslations } from 'next-intl/server'

interface Props {
  params: Promise<{ id: number }>
}

export default async function SingleBabysitterPage({ params }: Props) {
  const { id } = await params
  const data = BABY_SITTER.find((item) => item.id == id)
  const { locale } = await getLocaleWithProps()
  const t = await getTranslations('SingleBabysitter')

  if (!data) return

  return (
    <div className="px-4">
      <SingleBabysitterHero t={t} locale={locale} data={data} />
      <SingleBabysitterAudioPlayer />
    </div>
  )
}
