'use client'

import Paragraph from '@/components/ui/Paragraph'
import { type I18nLocale } from '@/i18n/i18n-configs'
import { useToolbarNavigation, type NavigationItem } from '@/lib/hooks/useToolbarNavigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function Toolbar() {
  const { navigationItems, locale } = useToolbarNavigation()

  return (
    <>
      <div className="h-[72px] w-full flex-none" />
      <nav className="fixed bottom-0 start-0 z-50 flex w-full items-center justify-center rounded-t-150 bg-background-50 p-5 px-6 [box-shadow:0px_-4px_10px_0px_rgba(92,104,128,0.05)]">
        <div className="flex w-full items-center justify-between">
          {navigationItems.map((item) => (
            <ToolbarItem key={item.id} {...item} locale={locale} />
          ))}
        </div>
      </nav>
    </>
  )
}

type ToolbarItemProps = NavigationItem & {
  locale: I18nLocale
}

function ToolbarItem({ isActive, icon: Icon, name, link, locale }: ToolbarItemProps) {
  return (
    <Link
      href={link}
      className={cn('flex flex-col items-center gap-2 text-icon-600', { 'text-primary': isActive })}
    >
      <Icon className="size-6" />
      {isActive && (
        <Paragraph variant="primary" size="size-title-sm">
          {name[locale]}
        </Paragraph>
      )}
    </Link>
  )
}
