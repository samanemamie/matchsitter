export enum BabySitterStatusEnum {
  GENERAL = 'GENERAL',
  CERTIFIED = 'CERTIFIED',
}

export const BabySitterStatusLabels: Record<BabySitterStatusEnum, { en: string; fa: string }> = {
  [BabySitterStatusEnum.GENERAL]: {
    en: 'General Babysitter',
    fa: 'پرستار کودک عمومی',
  },
  [BabySitterStatusEnum.CERTIFIED]: {
    en: 'Certified Babysitter',
    fa: 'پرستار کودک گواهی‌شده',
  },
}
