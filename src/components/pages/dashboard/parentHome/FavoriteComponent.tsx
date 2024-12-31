'use client'
import { LucideHeart } from '@/components/icons'
import { LucidHeartFill } from '@/components/icons/fiil/LucidHeartFill'
import { Button } from '@/components/ui/button'
import { useAnimationOnChange } from '@/lib/hooks/useAnimationOnChange'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export default function FavoriteComponent() {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAnimating, triggerAnimation] = useAnimationOnChange({ duration: 500 })
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite)
    triggerAnimation()
  }
  return (
    <Button
      variant="none"
      size="none"
      onClick={handleFavoriteClick}
      className={cn(isAnimating && 'animate-ping')}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? (
        <LucidHeartFill
          onClick={() => {
            setIsFavorite(!isFavorite)
          }}
          className="iconify-normal size-5 text-secondary"
        />
      ) : (
        <LucideHeart
          onClick={() => {
            setIsFavorite(!isFavorite)
          }}
          className="iconify-normal size-5 text-secondary"
        />
      )}
    </Button>
  )
}
