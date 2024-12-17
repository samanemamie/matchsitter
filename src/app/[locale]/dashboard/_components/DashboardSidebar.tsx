'use client'

export function DashboardSidebar() {
  return (
    <>
      {/* <motion.aside
        style={{ '--top': value } as CSSProperties}
        className={cn(
          [
            'fixed start-0 top-0 z-40 flex h-full w-64 flex-shrink-0 flex-col gap-8 bg-gray-100 p-6 transition-transform lg:gap-12',
            'overflow-y-auto overflow-x-visible [scrollbar-width:none] lg:rounded-250',
            'max-lg:-translate-x-full max-lg:duration-300 lg:sticky lg:top-6 lg:h-[calc(100dvh-var(--top))] lg:w-[88px]',
          ],
          { 'max-lg:!translate-x-0': isSidebarOpen }
        )}
      >
        {ROUTES.map((route) => (
          <SidebarItem
            onClick={() => toggleSidebarState(false)}
            active={(splitPathname(pathname, 3) || 'dashboard') === route.name}
            route={route}
            key={route.path}
          />
        ))}
        <SignOutAlert />
      </motion.aside> */}
    </>
  )
}

// interface SidebarItemProps extends ComponentProps<'button'> {
//   active?: boolean
//   route: (typeof ROUTES)[number]
// }

// function SidebarItem({ route, active, ...props }: SidebarItemProps) {
//   const t = useTranslations('Routes')
//   const { ActiveIcon, Icon } = route
//   return (
//     <TooltipProvider delayDuration={50}>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <Button
//             {...props}
//             variant="none"
//             size="none"
//             className={cn('w-auto text-gray-700 max-lg:justify-start', {
//               'text-primary': active,
//             })}
//           >
//             <Link className="contents" href={`/dashboard/${route.path}`}>
//               {active ? <ActiveIcon className="size-8" /> : <Icon className="size-8" />}
//               <span className="lg:hidden">{t(route.name)}</span>
//             </Link>
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent className="max-lg:hidden" side="right" sideOffset={10}>
//           {t(route.name)}
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   )
// }
