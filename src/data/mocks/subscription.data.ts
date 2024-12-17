import type { SubscriptionPlan } from '@/lib/typescript/interfaces/subscription.interface'

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: '1d8a8e9f-7eaa-4b9a-8f1e-2f3c7f6a5c01',
    name: 'Silver',
    monthlyPrice: 249.99,
    yearlyPrice: 2999,
    features: [
      'Pre-Sales Coaching for 5 Sales Reps',
      '3 Free Integrations',
      'Call Recording',
      'AI Call Summary',
      'AI Email Follow Up',
    ],
    buttonText: 'Subscribe to Silver',
  },
  {
    id: 'a5b5d7a1-7d2a-4f63-82c3-9fe7a9ea3c01',
    name: 'Gold',
    monthlyPrice: 499,
    yearlyPrice: 5988,
    features: [
      'Silver Plan +',
      '25 additional Coaching Plans',
      '10 Free Integrations',
      'AI Assistive Prediction',
    ],
    buttonText: 'Subscribe to Gold',
  },
  {
    id: '5c9f1a2b-60a1-4de5-8e9f-2f0d70f9d701',
    name: 'Custom',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ['For large enterprises that have specific needs.'],
    buttonText: 'Contact Us',
  },
]
