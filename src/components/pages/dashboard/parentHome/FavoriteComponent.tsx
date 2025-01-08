'use client'
import { LucideHeart } from '@/components/icons'
import { LucidHeartFill } from '@/components/icons/fiil/LucidHeartFill'
import { Button } from '@/components/ui/button'
import { useAnimationOnChange } from '@/lib/hooks/useAnimationOnChange'
import { useClientBooking } from '@/lib/hooks/useClientBooking'
import { cn } from '@/lib/utils'

export default function FavoriteComponent({ id }: { id: string }) {
  const { isFavorite, addFavorite, removeFavorite, isClient } = useClientBooking(id)
  const [isAnimating, triggerAnimation] = useAnimationOnChange({ duration: 500 })

  const handleFavoriteClick = () => {
    if (isFavorite(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
    triggerAnimation()
  }

  return (
    <>
      {isClient ? (
        <Button
          variant="none"
          size="none"
          onClick={handleFavoriteClick}
          className={cn(isAnimating && 'animate-ping')}
          aria-label={isFavorite(id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isClient && isFavorite(id) ? (
            <LucidHeartFill className="iconify-normal size-5 text-secondary" />
          ) : (
            <LucideHeart className="iconify-normal size-5 text-secondary" />
          )}
        </Button>
      ) : null}
    </>
  )
}
