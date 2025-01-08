import SettingsComponent from '@/components/pages/dashboard/settings/SettingsComponent'
import { getTranslations } from 'next-intl/server'

export default async function SettingsPage() {
  const t = await getTranslations('Settings')
  return <SettingsComponent t={t} />
}
