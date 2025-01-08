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
      {
        id: 2,
        name: { en: 'Calendar', fa: '' },
        link: '/dashboard/parent/babysitter/calendar',
        icon: LucideHome,
      },
      {
        id: 3,
        name: { en: 'Booking', fa: '' },
        link: '/dashboard/parent/babysitter/booking',
        icon: LucideHome,
      },
      {
        id: 4,
        name: { en: 'Checkout', fa: '' },
        link: '/dashboard/parent/babysitter/checkout',
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
