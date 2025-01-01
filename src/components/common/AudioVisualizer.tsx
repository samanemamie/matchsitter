'use client'

import { LucidePlay, LucidPause } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AudioVisualizerProps {
  onPlay?: () => void
  isPausedRecordedAudio?: boolean
  duration: number
  currentAudioTime: number
  className?: string
}

export function AudioVisualizer({
  onPlay,
  isPausedRecordedAudio,
  duration,
  currentAudioTime,
  className,
}: AudioVisualizerProps) {
  const calculatedProgress = (currentAudioTime / duration) * 100

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button
        onClick={onPlay}
        variant="none"
        size="none"
        className="flex h-8 w-8 items-center justify-center rounded-3600 bg-primary"
        aria-label={isPausedRecordedAudio ? 'Play' : 'Pause'}
      >
        {isPausedRecordedAudio ? (
          <LucidePlay className="size-5 text-background-50" />
        ) : (
          <LucidPause className="size-5 text-background-50" />
        )}
      </Button>

      <div className="relative flex h-[22px] flex-1 flex-col items-center justify-center rounded-350 bg-background-300 px-2">
        <div className="relative h-1 w-full rounded-350 bg-background-50">
          <div
            className="absolute left-0 top-0 h-full rounded-350 bg-primary transition-all duration-300 ease-out"
            style={{ width: `${calculatedProgress}%` }}
          >
            <div
              className="absolute -right-1 -top-[4px] size-3 rounded-full bg-primary shadow-md transition-all duration-300 ease-out"
              style={{ transform: 'translateX(50%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
