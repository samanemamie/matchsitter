import { BabySitterStatusEnum } from '@/data/enums/dashboard'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'

import alice from '@public/babySitter/alice.png'

export const BABY_SITTER: BabySitterInterface[] = [
  {
    id: 1,
    name: { en: 'Alice Smith', fa: '' },
    status: BabySitterStatusEnum.GENERAL,
    img: alice,
    sos: false,
    star: 5,
    review: 12,
    age: 29,
    experience: 2,
    distance: 2.1,
  },
]
