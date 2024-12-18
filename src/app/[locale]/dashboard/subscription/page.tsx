'use client'

import { LucideCircleCheck } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { SUBSCRIPTION_PLANS } from '@/data/mocks/subscription.data'
import type { SubscriptionPlan } from '@/lib/typescript/interfaces/subscription.interface'
import { cn } from '@/lib/utils'
import { useEffect, useId, useState } from 'react'

interface SwitchYearlyPlanProps {
  isYearly: boolean
  onChange: (isYearly: boolean) => void
}
function SwitchYearlyPlan({ isYearly: initialIsYearly, onChange }: SwitchYearlyPlanProps) {
  const id = useId()
  const [isYearly, setIsYearly] = useState(initialIsYearly)
  useEffect(() => {
    onChange(isYearly)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isYearly])
  return (
    <div className="flex items-center justify-center gap-2 text-gray-800">
      <Label htmlFor={id} className={`!text-desk-body-lg ${!isYearly && 'text-primary'}`}>
        Monthly
      </Label>
      <Switch
        id={id}
        checked={isYearly}
        onCheckedChange={setIsYearly}
        className="data-[state=checked]:bg-primary"
      />
      <Label htmlFor={id} className={`!text-desk-body-lg ${isYearly && 'text-primary'}`}>
        Yearly
      </Label>
    </div>
  )
}

export default function SubscriptionPage() {
  const [isYearly, setIsYearly] = useState(true)
  return (
    <div className="flex flex-col gap-12">
      <SwitchYearlyPlan isYearly={isYearly} onChange={setIsYearly} />
      <div className="flex flex-wrap justify-center gap-12">
        {SUBSCRIPTION_PLANS.map((subscription) => (
          <SubscriptionCard key={subscription.id} subscription={subscription} isYearly={isYearly} />
        ))}
      </div>
    </div>
  )
}

function SubscriptionCard({
  subscription,
  isYearly,
}: {
  subscription: SubscriptionPlan
  isYearly: boolean
}) {
  const noPrice = [subscription.monthlyPrice, subscription.yearlyPrice].includes(0)
  return (
    <Card
      key={subscription.name}
      className="min-h-[450px] w-full space-y-0 rounded-250 border-none shadow-normal shadow-gray-500/20 md:max-w-[368px]"
    >
      <CardHeader className="flex-col gap-6">
        <CardTitle className="text-center text-desk-h1 text-primary-800">
          {subscription.name}
        </CardTitle>
        <div className="relative text-center">
          {noPrice && (
            <div className="absolute inset-0 z-10 flex items-center justify-center text-desk-body-lg text-gray-800">
              Please contact for price.
            </div>
          )}
          <div className={cn('flex flex-col gap-3', noPrice && 'opacity-0')}>
            <span className="text-desk-h1 text-primary-900">
              ${isYearly ? subscription.yearlyPrice.toLocaleString() : subscription.monthlyPrice}
            </span>
            {isYearly && (
              <div className="text-gray-800">
                <strong className="text-desk-title-md">${subscription.monthlyPrice}</strong>
                <span className="text-desk-body-lg">/mo</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <Button variant="outline">{subscription.buttonText}</Button>
        <div className="flex-1 space-y-6">
          {subscription.features.map((feature, index) => (
            <Feature key={index}>{feature}</Feature>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <LucideCircleCheck className="size-6 text-green-500" />
      <span className="text-desk-body-lg text-gray-800">{children}</span>
    </div>
  )
}
