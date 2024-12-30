// export const ROUTES = [
//   {
//     name: 'dashboard',
//     path: '',
//     exact: true,
//     // Icon: SolarWidgetLinear,
//     // ActiveIcon: SolarWidgetBold,
//   },
//   {
//     name: 'analyze',
//     path: 'analyze',
//     exact: true,
//     // Icon: SolarGraphLinear,
//     // ActiveIcon: SolarGraphBold,
//   },
//   {
//     name: 'leads',
//     path: 'leads',
//     exact: true,
//     // Icon: SolarUsersGroupRoundedLinear,
//     // ActiveIcon: SolarUsersGroupRoundedBold,
//   },
//   {
//     name: 'practice',
//     path: 'practice',
//     exact: true,
//     // Icon: SolarMicrophone3Linear,
//     // ActiveIcon: SolarMicrophone3Bold,
//   },
//   {
//     name: 'targets',
//     path: 'targets',
//     exact: true,
//     // Icon: SolarGraphNewUpLinear,
//     // ActiveIcon: SolarGraphNewUpBold,
//   },
//   {
//     name: 'subscription',
//     path: 'subscription',
//     exact: true,
//     // Icon: SolarCrownStarLinear,
//     // ActiveIcon: SolarCrownStarBold,
//   },
// ]

import { LucideCalendarCheck, LucideHome, LucideSettings, LucideUser } from '@/components/icons'
import type { LinkInterface } from '@/lib/typescript/interfaces/routs'

export const PARENT_ROUTES: LinkInterface[] = [
  {
    id: 1,
    name: { en: 'Home', fa: '' },
    link: '/dashboard/parent',
    icon: LucideHome,
    subLinks: [
      {
        id: 1,
        name: { en: 'More Details', fa: '' },
        link: '/dashboard/parent/babysitter',
        icon: LucideHome,
      },
    ],
  },
  {
    id: 2,
    name: { en: 'My Bookings', fa: '' },
    link: '/dashboard/parent/my-bookings',
    icon: LucideCalendarCheck,
  },
  {
    id: 3,
    name: { en: 'Settings', fa: '' },
    link: '/dashboard/parent/settings',
    icon: LucideSettings,
  },
  {
    id: 4,
    name: { en: 'Profile', fa: '' },
    link: '/dashboard/parent/profile',
    icon: LucideUser,
  },
]
