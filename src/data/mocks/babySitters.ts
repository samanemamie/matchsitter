import { BabySitterStatusEnum } from '@/data/enums/dashboard'
import type { BabySitterInterface } from '@/lib/typescript/interfaces/babySitter'

import alice from '@public/babySitter/alice.png'
import babySitter1 from '@public/babySitter/babySitter1.webp'
import babySitter2 from '@public/babySitter/babySitter2.webp'
import babySitter3 from '@public/babySitter/babySitter3.webp'
import babySitter4 from '@public/babySitter/babySitter4.webp'
import babySitter5 from '@public/babySitter/babySitter5.webp'
import babySitter6 from '@public/babySitter/babySitter6.png'
import babySitter7 from '@public/babySitter/babySitter7.webp'
import babySitter8 from '@public/babySitter/babySitter8.webp'

export const BABY_SITTER: BabySitterInterface[] = [
  {
    id: 1,
    img: alice,
    name: { en: 'Alice Smith', fa: 'آلیس اسمیت' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 5,
    review: 12,

    price: 30,

    age: 29,
    experience: 2,
    distance: 2.1,
  },
  {
    id: 2,
    img: babySitter6,
    name: { en: 'John Doe', fa: 'جان دو' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 4.5,
    review: 8,

    price: 25,

    age: 25,
    experience: 3,
    distance: 1.8,
  },
  {
    id: 3,
    img: babySitter2,
    name: { en: 'Emily Davis', fa: 'امیلی دیویس' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 4.8,
    review: 15,

    price: 28,

    age: 31,
    experience: 5,
    distance: 3.5,
  },
  {
    id: 4,
    img: babySitter3,
    name: { en: 'Olivia Taylor', fa: 'اولیویا تیلور' },
    status: BabySitterStatusEnum.CERTIFIED,
    bookings: 12,
    star: 5,
    review: 10,

    price: 35,

    age: 27,
    experience: 4,
    distance: 2.0,
  },
  {
    id: 5,
    img: babySitter4,
    name: { en: 'Isabella Johnson', fa: 'ایزابل جانسون' },
    status: BabySitterStatusEnum.CERTIFIED,
    bookings: 12,
    star: 4.2,
    review: 5,

    price: 22,

    age: 24,
    experience: 1,
    distance: 1.5,
  },
  {
    id: 6,
    img: babySitter5,
    name: { en: 'Mia Wilson', fa: 'میا ویلسون' },
    status: BabySitterStatusEnum.CERTIFIED,
    bookings: 12,
    star: 4.9,
    review: 18,

    price: 40,

    age: 33,
    experience: 6,
    distance: 4.2,

    location: {
      lat: 43.703729,
      lng: -79.429567,
    },
    sos: true,
  },
  {
    id: 7,
    img: babySitter1,
    name: { en: 'Ava Martinez', fa: 'اوا مارتینز' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 4.7,
    review: 14,

    price: 30,

    age: 28,
    experience: 3,
    distance: 2.5,
    location: {
      lat: 43.700111,
      lng: -79.416667,
    },
    sos: true,
  },
  {
    id: 8,
    img: babySitter7,
    name: { en: 'Sophia Hernandez', fa: 'سوفیا هرناندز' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 4.4,
    review: 7,

    price: 27,

    age: 26,
    experience: 2,
    distance: 1.9,
    location: {
      lat: 43.707789,
      lng: -79.423456,
    },
    sos: true,
  },
  {
    id: 9,
    img: babySitter8,
    name: { en: 'Charlotte Lopez', fa: 'شارلوت لوپز' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 5,
    review: 20,

    price: 50,

    age: 35,
    experience: 10,
    distance: 5.0,
    location: {
      lat: 43.705123,
      lng: -79.435678,
    },
    sos: true,
  },
]
