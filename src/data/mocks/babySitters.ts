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
    id: 1,
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
        id: 11,
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 111,
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 112,
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 113,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 114,
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 12,
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 121,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 122,
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
        id: 1212,
        img: certification1,
      },
      {
        id: 1213,
        img: certification2,
      },
      {
        id: 1214,
        img: certification3,
      },
      {
        id: 1215,
        img: certification2,
      },
      {
        id: 1216,
        img: certification1,
      },
    ],
    madias: [
      {
        id: 1313,
        img: media1,
      },
      {
        id: 1314,
        img: media2,
      },
      {
        id: 1315,
        img: media3,
      },
    ],

    reviews: [
      {
        id: 4040,
        name: { en: 'Sara Bing', fa: '' },
        score: 5.0,
        date: { en: '12/03/2024', fa: '' },
        desk: {
          en: 'Highly recommend! Alice was amazing with our 2-year-old. She instantly connected with him, and we felt so comfortable leaving him in her care. She was punctual, responsible, and had a wonderful way of engaging our child with fun activities. We can’t wait to have her back!',
          fa: '',
        },
      },
      {
        id: 4041,
        name: { en: 'John Parker', fa: '' },
        score: 4.8,
        date: { en: '12/15/2024', fa: '' },
        desk: {
          en: 'Alice is a fantastic babysitter. She was very patient and caring with our three kids, who can be a handful. They loved her creative games and stories. Definitely booking her again!',
          fa: '',
        },
      },
      {
        id: 4042,
        name: { en: 'Emily Johnson', fa: '' },
        score: 4.5,
        date: { en: '12/18/2024', fa: '' },
        desk: {
          en: 'Alice did a good job taking care of our 1-year-old. She was attentive and followed all our instructions. We appreciated her professionalism. Highly recommend!',
          fa: '',
        },
      },
      {
        id: 4043,
        name: { en: 'Michael Roberts', fa: '' },
        score: 5.0,
        date: { en: '12/20/2024', fa: '' },
        desk: {
          en: 'We couldn’t be happier with Alice’s care for our children. She has an incredible way of making them feel at ease and keeping them entertained. A true professional!',
          fa: '',
        },
      },
      {
        id: 4044,
        name: { en: 'Laura Smith', fa: '' },
        score: 4.7,
        date: { en: '12/22/2024', fa: '' },
        desk: {
          en: 'Alice was wonderful! She handled our 4-year-old and 6-year-old perfectly, keeping them engaged with educational activities. Highly reliable and great with kids!',
          fa: '',
        },
      },
    ],

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
    audioUrl: '/voice/me.weba',
    price: 25,
    workExperiences: [
      {
        id: 13,
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 131,
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 132,
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 133,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 134,
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 14,
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 141,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 142,
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
    audioUrl: '/voice/me.weba',
    price: 28,
    workExperiences: [
      {
        id: 15,
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 151,
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 152,
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 153,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 154,
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 16,
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 161,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 162,
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
    audioUrl: '/voice/me.weba',
    price: 35,
    workExperiences: [
      {
        id: 17,
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 171,
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 172,
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 173,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 174,
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 18,
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 181,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 182,
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
    audioUrl: '/voice/me.weba',
    price: 22,
    workExperiences: [
      {
        id: 19,
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 191,
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 192,
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 193,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 194,
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 20,
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 201,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 202,
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
    audioUrl: '/voice/me.weba',
    price: 40,
    workExperiences: [
      {
        id: 211,
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 211,
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 212,
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 213,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 214,
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 221,
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 221,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 222,
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
    audioUrl: '/voice/me.weba',
    price: 30,
    workExperiences: [
      {
        id: 231,
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 231,
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 232,
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 233,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 234,
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 241,
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 241,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 242,
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
    audioUrl: '/voice/me.weba',
    price: 27,
    workExperiences: [
      {
        id: 251,
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 251,
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 252,
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 253,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 254,
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 261,
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 261,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 262,
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
    audioUrl: '/voice/me.weba',
    price: 50,
    workExperiences: [
      {
        id: 271,
        title: { en: 'Nanny', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'April 2, 2023 - March 5, 2024', fa: ' ' },
        responsibilities: [
          {
            id: 271,
            title: { en: 'Provided care for two children aged 3 and 5.', fa: ' ' },
          },
          {
            id: 272,
            title: {
              en: 'Planned and supervised educational and recreational activities.',
              fa: ' ',
            },
          },
          {
            id: 273,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 274,
            title: { en: 'Assisted with school assignments and learning activities.', fa: ' ' },
          },
        ],
      },
      {
        id: 281,
        title: { en: 'Babysitter', fa: ' اسمیت' },
        name: { en: 'Smith Family', fa: ' اسمیت' },
        location: { en: 'Toronto, Ontario', fa: ' ' },
        date: { en: 'Jan 2, 2023 - Apr 5, 2023', fa: ' ' },
        responsibilities: [
          {
            id: 281,
            title: { en: 'Prepared nutritious meals and snacks.', fa: ' ' },
          },
          {
            id: 282,
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
