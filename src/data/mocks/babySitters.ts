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

import certification1 from '@public/babySitter/media/certification1.png'
import certification2 from '@public/babySitter/media/certification2.png'
import certification3 from '@public/babySitter/media/certification3.png'
import media1 from '@public/babySitter/media/media1.png'
import media2 from '@public/babySitter/media/media2.png'
import media3 from '@public/babySitter/media/media3.png'

export const BABY_SITTER: BabySitterInterface[] = [
  {
    id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d',
    img: alice,
    name: { en: 'Alice Smith', fa: 'آلیس اسمیت' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 5,
    review: 12,
    audioUrl: '/voice/me.weba',
    price: 30,
    workExperiences: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d1',
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d2',
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d3',
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d4',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d5',
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d6',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d7',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d8',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d6991',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d7992',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d8993',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d6994',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d7995',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d8996',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d6997',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d7998',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d8999',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
    ],
    about: {
      en: 'I’m an experienced and passionate babysitter. I have been working with families for over 3 years, and I truly enjoy caring for children of all ages. My focus is on creating a safe, friendly, and educational environment tailored to the individual needs and interests of each child.I love engaging kids in creative and educational activities, from reading storybooks to interactive play and learning through fun games. Punctuality, responsibility, and open communication with parents are very important to me. My goal is to help you go about your daily tasks with peace of mind, knowing your child is in safe and loving hands.Im ready to collaborate and become a valuable part of your family team! If you are looking for someone who can provide your child with love, attention, and quality care, I would be delighted to assist.',
      fa: '',
    },
    certifications: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d9',
        img: certification1,
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d10',
        img: certification2,
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d11',
        img: certification3,
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d12',
        img: certification2,
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d13',
        img: certification1,
      },
    ],
    madias: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d14',
        img: media1,
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d15',
        img: media2,
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d16',
        img: media3,
      },
    ],

    reviews: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d17',
        name: { en: 'Sara Bing', fa: '' },
        score: 5.0,
        date: { en: '12/03/2024', fa: '' },
        desk: {
          en: 'Highly recommend! Alice was amazing with our 2-year-old. She instantly connected with him, and we felt so comfortable leaving him in her care. She was punctual, responsible, and had a wonderful way of engaging our child with fun activities. We can’t wait to have her back!',
          fa: '',
        },
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d18',
        name: { en: 'John Parker', fa: '' },
        score: 4.8,
        date: { en: '12/15/2024', fa: '' },
        desk: {
          en: 'Alice is a fantastic babysitter. She was very patient and caring with our three kids, who can be a handful. They loved her creative games and stories. Definitely booking her again!',
          fa: '',
        },
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d19',
        name: { en: 'Emily Johnson', fa: '' },
        score: 4.5,
        date: { en: '12/18/2024', fa: '' },
        desk: {
          en: 'Alice did a good job taking care of our 1-year-old. She was attentive and followed all our instructions. We appreciated her professionalism. Highly recommend!',
          fa: '',
        },
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d20',
        name: { en: 'Michael Roberts', fa: '' },
        score: 5.0,
        date: { en: '12/20/2024', fa: '' },
        desk: {
          en: 'We couldn’t be happier with Alice’s care for our children. She has an incredible way of making them feel at ease and keeping them entertained. A true professional!',
          fa: '',
        },
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d21',
        name: { en: 'Laura Smith', fa: '' },
        score: 4.7,
        date: { en: '12/22/2024', fa: '' },
        desk: {
          en: 'Alice was wonderful! She handled our 4-year-old and 6-year-old perfectly, keeping them engaged with educational activities. Highly reliable and great with kids!',
          fa: '',
        },
      },
    ],
    onCallDate: [
      {
        id: '7c2e0f0b-7ef7-4d28-90b4-92262ce4d9bb',
        day: {
          en: 'Sat',
          fa: '',
        },
        date: {
          en: '09/15',
          fa: '',
        },

        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '5975286e-1d7c-443c-a4ae-1233180bde91',
        day: {
          en: 'Sun',
          fa: '',
        },
        date: {
          en: '09/16',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'cd2d33ad-7a70-4775-bd65-2fa7c9604e71',
        day: {
          en: 'Mon',
          fa: '',
        },
        date: {
          en: '09/17',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'a6ff80a2-c6eb-40a0-aab2-005a208ee2c9',
        day: {
          en: 'Tue',
          fa: '',
        },
        date: {
          en: '09/18',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'b60100a5-6fe0-43f9-9a7a-229613de09ec',
        day: {
          en: 'Wed',
          fa: '',
        },
        date: {
          en: '09/19',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '9b21b985-959c-4ac3-8619-a6c5d7434b4f',
        day: {
          en: 'Thurs',
          fa: '',
        },
        date: {
          en: '09/20',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'd6a024a6-28d2-46bb-b34d-fb81fbecbf81',
        day: {
          en: 'Friday',
          fa: '',
        },
        date: {
          en: '09/21',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
    ],

    age: 29,
    experience: 2,
    distance: 2.1,
  },

  {
    id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d22',
    img: babySitter6,
    name: { en: 'John Doe', fa: 'جان دو' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 4.5,
    review: 8,
    audioUrl: '/voice/me.weba',
    price: 25,
    workExperiences: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d23',
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d24',
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d25',
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d26',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d27',
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d28',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d29',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d30',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
    ],
    about: {
      en: 'I’m an experienced and passionate babysitter. I have been working with families for over 3 years, and I truly enjoy caring for children of all ages. My focus is on creating a safe, friendly, and educational environment tailored to the individual needs and interests of each child.I love engaging kids in creative and educational activities, from reading storybooks to interactive play and learning through fun games. Punctuality, responsibility, and open communication with parents are very important to me. My goal is to help you go about your daily tasks with peace of mind, knowing your child is in safe and loving hands.Im ready to collaborate and become a valuable part of your family team! If you are looking for someone who can provide your child with love, attention, and quality care, I would be delighted to assist.',
      fa: '',
    },
    onCallDate: [
      {
        id: '7c2e0f0b-7ef7-4d28-90b4-92262ce4d9bb111',
        day: {
          en: 'Sat',
          fa: '',
        },
        date: {
          en: '09/15',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '5975286e-1d7c-443c-a4ae-1233180bde91111',
        day: {
          en: 'Sun',
          fa: '',
        },
        date: {
          en: '09/16',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'cd2d33ad-7a70-4775-bd65-2fa7c9604e711111',
        day: {
          en: 'Mon',
          fa: '',
        },
        date: {
          en: '09/17',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'a6ff80a2-c6eb-40a0-aab2-005a208ee2c911111',
        day: {
          en: 'Tue',
          fa: '',
        },
        date: {
          en: '09/18',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'b60100a5-6fe0-43f9-9a7a-229613de09ec11111',
        day: {
          en: 'Wed',
          fa: '',
        },
        date: {
          en: '09/19',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '9b21b985-959c-4ac3-8619-a6c5d7434b4f111111',
        day: {
          en: 'Thurs',
          fa: '',
        },
        date: {
          en: '09/20',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'd6a024a6-28d2-46bb-b34d-fb81fbecbf8111111',
        day: {
          en: 'Friday',
          fa: '',
        },
        date: {
          en: '09/21',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
    ],
    age: 25,
    experience: 3,
    distance: 1.8,
  },
  {
    id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d31',
    img: babySitter2,
    name: { en: 'Emily Davis', fa: 'امیلی دیویس' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 4.8,
    review: 15,
    audioUrl: '/voice/me.weba',
    price: 28,
    workExperiences: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d32',
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d33',
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d34',
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d35',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d36',
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d37',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d38',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d39',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
    ],
    about: {
      en: 'I’m an experienced and passionate babysitter. I have been working with families for over 3 years, and I truly enjoy caring for children of all ages. My focus is on creating a safe, friendly, and educational environment tailored to the individual needs and interests of each child.I love engaging kids in creative and educational activities, from reading storybooks to interactive play and learning through fun games. Punctuality, responsibility, and open communication with parents are very important to me. My goal is to help you go about your daily tasks with peace of mind, knowing your child is in safe and loving hands.Im ready to collaborate and become a valuable part of your family team! If you are looking for someone who can provide your child with love, attention, and quality care, I would be delighted to assist.',
      fa: '',
    },
    onCallDate: [
      {
        id: '7c2e0f0b-7ef7-4d28-90b4-92262ce4d9bb111222',
        day: {
          en: 'Sat',
          fa: '',
        },
        date: {
          en: '09/15',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '5975286e-1d7c-443c-a4ae-1233180bde91111222',
        day: {
          en: 'Sun',
          fa: '',
        },
        date: {
          en: '09/16',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'cd2d33ad-7a70-4775-bd65-2fa7c9604e711111222',
        day: {
          en: 'Mon',
          fa: '',
        },
        date: {
          en: '09/17',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'a6ff80a2-c6eb-40a0-aab2-005a208ee2c911111222',
        day: {
          en: 'Tue',
          fa: '',
        },
        date: {
          en: '09/18',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'b60100a5-6fe0-43f9-9a7a-229613de09ec11111222',
        day: {
          en: 'Wed',
          fa: '',
        },
        date: {
          en: '09/19',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '9b21b985-959c-4ac3-8619-a6c5d7434b4f11111122222',
        day: {
          en: 'Thurs',
          fa: '',
        },
        date: {
          en: '09/20',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'd6a024a6-28d2-46bb-b34d-fb81fbecbf8111222111',
        day: {
          en: 'Friday',
          fa: '',
        },
        date: {
          en: '09/21',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
    ],
    age: 31,
    experience: 5,
    distance: 3.5,
  },
  {
    id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d40',
    img: babySitter3,
    name: { en: 'Olivia Taylor', fa: 'اولیویا تیلور' },
    status: BabySitterStatusEnum.CERTIFIED,
    bookings: 12,
    star: 5,
    review: 10,
    audioUrl: '/voice/me.weba',
    price: 35,
    workExperiences: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d41',
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d42',
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d43',
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d44',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d45',
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d46',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d47',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d48',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
    ],
    about: {
      en: 'I’m an experienced and passionate babysitter. I have been working with families for over 3 years, and I truly enjoy caring for children of all ages. My focus is on creating a safe, friendly, and educational environment tailored to the individual needs and interests of each child.I love engaging kids in creative and educational activities, from reading storybooks to interactive play and learning through fun games. Punctuality, responsibility, and open communication with parents are very important to me. My goal is to help you go about your daily tasks with peace of mind, knowing your child is in safe and loving hands.Im ready to collaborate and become a valuable part of your family team! If you are looking for someone who can provide your child with love, attention, and quality care, I would be delighted to assist.',
      fa: '',
    },
    onCallDate: [
      {
        id: '7c2e0f0b-7ef7-4d28-90b4-92262ce4d9bb1112223',
        day: {
          en: 'Sat',
          fa: '',
        },
        date: {
          en: '09/15',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '5975286e-1d7c-443c-a4ae-1233180bde9111122233',
        day: {
          en: 'Sun',
          fa: '',
        },
        date: {
          en: '09/16',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'cd2d33ad-7a70-4775-bd65-2fa7c9604e711111222333',
        day: {
          en: 'Mon',
          fa: '',
        },
        date: {
          en: '09/17',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'a6ff80a2-c6eb-40a0-aab2-005a208ee2c9111112233332',
        day: {
          en: 'Tue',
          fa: '',
        },
        date: {
          en: '09/18',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'b60100a5-6fe0-43f9-9a7a-229613de09ec333311111222',
        day: {
          en: 'Wed',
          fa: '',
        },
        date: {
          en: '09/19',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '9b21b985-959c-4ac3-8619-a6c5d7434b4f111111333322222',
        day: {
          en: 'Thurs',
          fa: '',
        },
        date: {
          en: '09/20',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'd6a024a6-28d2-46bb-b34d-fb81fbecbf81112221113333333',
        day: {
          en: 'Friday',
          fa: '',
        },
        date: {
          en: '09/21',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
    ],
    age: 27,
    experience: 4,
    distance: 2.0,
  },
  {
    id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d49',
    img: babySitter4,
    name: { en: 'Isabella Johnson', fa: 'ایزابل جانسون' },
    status: BabySitterStatusEnum.CERTIFIED,
    bookings: 12,
    star: 4.2,
    review: 5,
    audioUrl: '/voice/me.weba',
    price: 22,
    workExperiences: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d50',
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d51',
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d52',
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d53',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d54',
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d55',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d56',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d57',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
    ],
    about: {
      en: 'I’m an experienced and passionate babysitter. I have been working with families for over 3 years, and I truly enjoy caring for children of all ages. My focus is on creating a safe, friendly, and educational environment tailored to the individual needs and interests of each child.I love engaging kids in creative and educational activities, from reading storybooks to interactive play and learning through fun games. Punctuality, responsibility, and open communication with parents are very important to me. My goal is to help you go about your daily tasks with peace of mind, knowing your child is in safe and loving hands.Im ready to collaborate and become a valuable part of your family team! If you are looking for someone who can provide your child with love, attention, and quality care, I would be delighted to assist.',
      fa: '',
    },
    onCallDate: [
      {
        id: '7c2e0f0b-7ef7-4d28-90b4-92262ce4d9bb5',
        day: {
          en: 'Sat',
          fa: '',
        },
        date: {
          en: '09/15',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '5975286e-1d7c-443c-a4ae-1233180bde55',
        day: {
          en: 'Sun',
          fa: '',
        },
        date: {
          en: '09/16',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'cd2d33ad-7a70-4775-bd65-2fa7c9604e555',
        day: {
          en: 'Mon',
          fa: '',
        },
        date: {
          en: '09/17',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'a6ff80a2-c6eb-40a0-aab2-005a208ee2c5555',
        day: {
          en: 'Tue',
          fa: '',
        },
        date: {
          en: '09/18',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'b60100a5-6fe0-43f9-9a7a-229613de09ec55555',
        day: {
          en: 'Wed',
          fa: '',
        },
        date: {
          en: '09/19',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '9b21b985-959c-4ac3-8619-a6c5d74534b45f5',
        day: {
          en: 'Thurs',
          fa: '',
        },
        date: {
          en: '09/20',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'd6a024a6-28d2-46bb-b34d-fb81f55becbf81',
        day: {
          en: 'Friday',
          fa: '',
        },
        date: {
          en: '09/21',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
    ],
    age: 24,
    experience: 1,
    distance: 1.5,
  },
  {
    id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d58',
    img: babySitter5,
    name: { en: 'Mia Wilson', fa: 'میا ویلسون' },
    status: BabySitterStatusEnum.CERTIFIED,
    bookings: 12,
    star: 4.9,
    review: 18,
    audioUrl: '/voice/me.weba',
    price: 40,
    workExperiences: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d59',
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d60',
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d61',
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d62',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d63',
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d64',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d64',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d65',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
    ],
    about: {
      en: 'I’m an experienced and passionate babysitter. I have been working with families for over 3 years, and I truly enjoy caring for children of all ages. My focus is on creating a safe, friendly, and educational environment tailored to the individual needs and interests of each child.I love engaging kids in creative and educational activities, from reading storybooks to interactive play and learning through fun games. Punctuality, responsibility, and open communication with parents are very important to me. My goal is to help you go about your daily tasks with peace of mind, knowing your child is in safe and loving hands.Im ready to collaborate and become a valuable part of your family team! If you are looking for someone who can provide your child with love, attention, and quality care, I would be delighted to assist.',
      fa: '',
    },

    onCallDate: [
      {
        id: '7c2e0f0b-7ef7-4d28-90b4-92262ce4d9bb56',
        day: {
          en: 'Sat',
          fa: '',
        },
        date: {
          en: '09/15',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '5975286e-1d7c-443c-a4ae-1233180bde5566',
        day: {
          en: 'Sun',
          fa: '',
        },
        date: {
          en: '09/16',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'cd2d33ad-7a70-4775-bd65-2fa7c9604e555666',
        day: {
          en: 'Mon',
          fa: '',
        },
        date: {
          en: '09/17',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'a6ff80a2-c6eb-40a0-aab2-005a208ee2c55556666',
        day: {
          en: 'Tue',
          fa: '',
        },
        date: {
          en: '09/18',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'b60100a5-6fe0-43f9-9a7a-229613de09ec5555566666',
        day: {
          en: 'Wed',
          fa: '',
        },
        date: {
          en: '09/19',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '9b21b985-959c-4ac3-8619-a6c5d74534b666645f5',
        day: {
          en: 'Thurs',
          fa: '',
        },
        date: {
          en: '09/20',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'd6a024a6-28d2-46bb-b34d-f666b81f55becbf81',
        day: {
          en: 'Friday',
          fa: '',
        },
        date: {
          en: '09/21',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
    ],
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
    id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d66',
    img: babySitter1,
    name: { en: 'Ava Martinez', fa: 'اوا مارتینز' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 4.7,
    review: 14,
    audioUrl: '/voice/me.weba',
    price: 30,
    workExperiences: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d67',
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d68',
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d69',
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d70',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d71',
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d72',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d73',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d74',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
    ],
    about: {
      en: 'I’m an experienced and passionate babysitter. I have been working with families for over 3 years, and I truly enjoy caring for children of all ages. My focus is on creating a safe, friendly, and educational environment tailored to the individual needs and interests of each child.I love engaging kids in creative and educational activities, from reading storybooks to interactive play and learning through fun games. Punctuality, responsibility, and open communication with parents are very important to me. My goal is to help you go about your daily tasks with peace of mind, knowing your child is in safe and loving hands.Im ready to collaborate and become a valuable part of your family team! If you are looking for someone who can provide your child with love, attention, and quality care, I would be delighted to assist.',
      fa: '',
    },
    onCallDate: [
      {
        id: '7c2e0f0b-7ef7-4d28-90b4-97772262ce4d9bb56',
        day: {
          en: 'Sat',
          fa: '',
        },
        date: {
          en: '09/15',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '5975286e-1d7c-447773c-a4ae-1233180bde5566',
        day: {
          en: 'Sun',
          fa: '',
        },
        date: {
          en: '09/16',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'cd2d33ad-7a77770-4775-bd65-2fa7c9604e555666',
        day: {
          en: 'Mon',
          fa: '',
        },
        date: {
          en: '09/17',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'a6ff87770a2-c6eb-40a0-aab2-005a208ee2c55556666',
        day: {
          en: 'Tue',
          fa: '',
        },
        date: {
          en: '09/18',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'b60107770a5-6fe0-43f9-9a7a-229613de09ec5555566666',
        day: {
          en: 'Wed',
          fa: '',
        },
        date: {
          en: '09/19',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '9b2777771b985-959c-4ac3-8619-a6c5d74534b666645f5',
        day: {
          en: 'Thurs',
          fa: '',
        },
        date: {
          en: '09/20',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'd6a024a6-28d2-46bb-b34d-f666b817777f55becbf81',
        day: {
          en: 'Friday',
          fa: '',
        },
        date: {
          en: '09/21',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
    ],
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
    id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d75',
    img: babySitter7,
    name: { en: 'Sophia Hernandez', fa: 'سوفیا هرناندز' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 4.4,
    review: 7,
    audioUrl: '/voice/me.weba',
    price: 27,
    workExperiences: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d76',
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d77',
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d78',
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d79',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d80',
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d81',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d82',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d83',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
    ],
    about: {
      en: 'I’m an experienced and passionate babysitter. I have been working with families for over 3 years, and I truly enjoy caring for children of all ages. My focus is on creating a safe, friendly, and educational environment tailored to the individual needs and interests of each child.I love engaging kids in creative and educational activities, from reading storybooks to interactive play and learning through fun games. Punctuality, responsibility, and open communication with parents are very important to me. My goal is to help you go about your daily tasks with peace of mind, knowing your child is in safe and loving hands.Im ready to collaborate and become a valuable part of your family team! If you are looking for someone who can provide your child with love, attention, and quality care, I would be delighted to assist.',
      fa: '',
    },
    onCallDate: [
      {
        id: '77778c2e0f0b-7ef7-4d28-90b4-97772262ce4d9bb56',
        day: {
          en: 'Sat',
          fa: '',
        },
        date: {
          en: '09/15',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '5975788286e-1d7c-447773c-a4ae-1233180bde5566',
        day: {
          en: 'Sun',
          fa: '',
        },
        date: {
          en: '09/16',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'cd2888d33ad-7a77770-4775-bd65-2fa7c9604e555666',
        day: {
          en: 'Mon',
          fa: '',
        },
        date: {
          en: '09/17',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'a6f888f87770a2-c6eb-40a0-aab2-005a208ee2c55556666',
        day: {
          en: 'Tue',
          fa: '',
        },
        date: {
          en: '09/18',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'b60107770888a5-6fe0-43f9-9a7a-229613de09ec5555566666',
        day: {
          en: 'Wed',
          fa: '',
        },
        date: {
          en: '09/19',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '9b2777888771b985-959c-4ac3-8619-a6c5d74534b666645f5',
        day: {
          en: 'Thurs',
          fa: '',
        },
        date: {
          en: '09/20',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'd6a02488a6-28d2-46bb-b34d-f666b817777f55becbf81',
        day: {
          en: 'Friday',
          fa: '',
        },
        date: {
          en: '09/21',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
    ],
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
    id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d84',
    img: babySitter8,
    name: { en: 'Charlotte Lopez', fa: 'شارلوت لوپز' },
    status: BabySitterStatusEnum.GENERAL,
    bookings: 12,
    star: 5,
    review: 20,
    audioUrl: '/voice/me.weba',
    price: 50,
    workExperiences: [
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d85',
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d86',
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d87',
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d88',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d89',
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d90',
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d91',
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 'c38e7179-a980-49bb-8778-e7a42c1aaf5d92',
            title: {
              en: 'Assisted with school assignments and learning activities',
              fa: ' ',
            },
          },
        ],
      },
    ],
    about: {
      en: 'I’m an experienced and passionate babysitter. I have been working with families for over 3 years, and I truly enjoy caring for children of all ages. My focus is on creating a safe, friendly, and educational environment tailored to the individual needs and interests of each child.I love engaging kids in creative and educational activities, from reading storybooks to interactive play and learning through fun games. Punctuality, responsibility, and open communication with parents are very important to me. My goal is to help you go about your daily tasks with peace of mind, knowing your child is in safe and loving hands.Im ready to collaborate and become a valuable part of your family team! If you are looking for someone who can provide your child with love, attention, and quality care, I would be delighted to assist.',
      fa: '',
    },
    onCallDate: [
      {
        id: '7c2e0f0b-7ef7-4d28-90b4-97772262ce4d999bb56',
        day: {
          en: 'Sat',
          fa: '',
        },
        date: {
          en: '09/15',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '5975286e-1d7c-447773c-a4ae-1233180bde556996',
        day: {
          en: 'Sun',
          fa: '',
        },
        date: {
          en: '09/16',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'cd2d33ad-7a77770-4775-bd9965-2fa7c9604e555666',
        day: {
          en: 'Mon',
          fa: '',
        },
        date: {
          en: '09/17',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'a6ff8777990a2-c6eb-40a0-aab2-005a208ee2c55556666',
        day: {
          en: 'Tue',
          fa: '',
        },
        date: {
          en: '09/18',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'b60107770a5-6fe0-43f9-9a7a-2296913de09ec559955566666',
        day: {
          en: 'Wed',
          fa: '',
        },
        date: {
          en: '09/19',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: '99999b2777771b985-959c-4ac3-8619-a6c5d74534b666645f5',
        day: {
          en: 'Thurs',
          fa: '',
        },
        date: {
          en: '09/20',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
      {
        id: 'd6a024a96-28d92-46bb-9b34d-f666b817777f55becbf81',
        day: {
          en: 'Friday',
          fa: '',
        },
        date: {
          en: '09/21',
          fa: '',
        },
        time: [
          {
            en: '12:00',
            fa: '',
          },
          {
            en: '13:00',
            fa: '',
          },
          {
            en: '14:00',
            fa: '',
          },
          {
            en: '15:00',
            fa: '',
          },
          {
            en: '16:00',
            fa: '',
          },
          {
            en: '17:00',
            fa: '',
          },
          {
            en: '18:00',
            fa: '',
          },
          {
            en: '19:00',
            fa: '',
          },
        ],
      },
    ],
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
