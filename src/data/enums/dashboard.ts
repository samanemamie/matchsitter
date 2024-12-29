export enum BabySitterStatusEnum {
  GENERAL = 'GENERAL',
  CERTIFIED = 'CERTIFIED',
  SOS = 'SOS',
}

export const BabySitterStatusLabels: Record<BabySitterStatusEnum, { en: string; fa: string }> = {
  [BabySitterStatusEnum.GENERAL]: {
    en: 'General Babysitters',
    fa: 'پرستار کودک عمومی',
  },
  [BabySitterStatusEnum.CERTIFIED]: {
    en: 'Certified Babysitters',
    fa: 'پرستار کودک گواهی‌شده',
  },
  [BabySitterStatusEnum.SOS]: {
    en: 'SOS Babysitters',
    fa: 'پرستار کودک گواهی‌شده',
  },
}
