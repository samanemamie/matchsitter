import { useState } from 'react'

interface UseAnimationOnChangeOptions {
  duration?: number
  delay?: number
}

export function useAnimationOnChange(
  options: UseAnimationOnChangeOptions = {}
): [boolean, () => void] {
  const [isAnimating, setIsAnimating] = useState(false)
  const { duration = 500, delay = 0 } = options

  const triggerAnimation = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), duration + delay)
  }

  return [isAnimating, triggerAnimation]
}
