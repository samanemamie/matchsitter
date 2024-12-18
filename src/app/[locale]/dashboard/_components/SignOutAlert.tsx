import { LucideLogOut } from '@/components/icons'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { useUserStore } from '@/lib/context/AuthProvider'
import { useMutation } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { type PropsWithChildren } from 'react'

export function SignOutAlert({ children }: PropsWithChildren) {
  const t = useTranslations('DashboardSidebar')
  const tAlert = useTranslations('LogOutAlert')
  const signOut = useUserStore((state) => state.signOut)
  const user = useUserStore((state) => state.user)
  const { mutate, isPending } = useMutation({
    mutationFn: () => signOut(),
  })

  function handleOnPressSignOut() {
    mutate(undefined, { onSettled: () => (window.location.href = '/') })
  }

  return (
    <AlertDialog>
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <AlertDialogTrigger asChild>
            {children ? (
              children
            ) : (
              <TooltipTrigger asChild>
                <Button
                  variant="none"
                  size="none"
                  className="mt-auto text-error max-lg:justify-start"
                >
                  <LucideLogOut className="size-8" />
                  <span className="lg:hidden">{t('log_out')}</span>
                </Button>
              </TooltipTrigger>
            )}
          </AlertDialogTrigger>
          <TooltipContent className="max-lg:hidden" side="right" sideOffset={10}>
            {t('log_out')}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertDialogContent className="!rounded-250 max-md:max-w-96">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center !text-desk-body-lg">
            {tAlert('title')}
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="lg:gap-4">
          <AlertDialogCancel asChild>
            <Button disabled={isPending || !user} variant="outline" className="lg:flex-1">
              {tAlert('cancel')}
            </Button>
          </AlertDialogCancel>
          <Button
            loading={isPending}
            disabled={!user}
            onClick={handleOnPressSignOut}
            className="lg:flex-1"
          >
            {!user ? tAlert('redirect') : tAlert('confirm')}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
