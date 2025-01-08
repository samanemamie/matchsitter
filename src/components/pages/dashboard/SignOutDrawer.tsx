'use client'
import { LucideLogOut } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/Drawer'
import Paragraph from '@/components/ui/Paragraph'
import { useUserStore } from '@/lib/context/AuthProvider'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export function SignOutDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const t = useTranslations('LogOut')
  const signOut = useUserStore((state) => state.signOut)
  const user = useUserStore((state) => state.user)
  const { mutate, isPending } = useMutation({
    mutationFn: () => signOut(),
  })

  function handleOnPressSignOut() {
    mutate(undefined, { onSettled: () => (window.location.href = '/') })
  }

  return (
    <>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>
          <div className="flex items-center gap-2 rounded-100 bg-background-50 px-3.5 py-2.5 text-error">
            <LucideLogOut className="size-5" />
            <Paragraph size="size-body-lg"></Paragraph>
            {t('logout')}
          </div>
        </DrawerTrigger>

        <DrawerContent>
          <div className="mx-auto flex w-full flex-col gap-6">
            <DrawerHeader>
              <DrawerTitle className="text-center text-size-body-lg-mb sm:text-size-body-lg-ds">
                {t('title')}
              </DrawerTitle>

              <DrawerDescription />
            </DrawerHeader>

            <DrawerFooter>
              <Button loading={isPending} disabled={!user} onClick={handleOnPressSignOut} size="sm">
                {!user ? t('redirect') : t('confirm')}
              </Button>

              <DrawerClose asChild>
                <Button disabled={isPending || !user} variant="link" size="sm">
                  {t('cancel')}
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
