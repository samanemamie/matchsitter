import { LucideBell } from '@/components/icons'
import { SignOutDrawer } from '@/components/pages/dashboard/SignOutDrawer'
import Paragraph from '@/components/ui/Paragraph'
import { Switch } from '@/components/ui/switch'
import type { ReactNode } from 'react'

export default function SettingsComponent({ t }: { t: (body: string) => ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 rounded-100 bg-background-50 px-3.5 py-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LucideBell className="size-5 text-icon-700" />
            <Paragraph variant="body-300" size="size-body-lg">
              {t('notifications')}
            </Paragraph>
          </div>
          <Switch id="airplane-mode" />
        </div>
        <Paragraph variant="body-200" size="size-body-sm">
          {t('desk')}
        </Paragraph>
      </div>
      <SignOutDrawer />
    </div>
  )
}
