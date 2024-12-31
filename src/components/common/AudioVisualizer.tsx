'use client'

import { cn } from '@/lib/utils'
import { Pause, Play } from 'lucide-react'

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
    <div className={cn('flex w-full max-w-2xl items-center gap-4', className)}>
      <button
        onClick={onPlay}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6b6b] transition-colors hover:bg-[#ff5252]"
        aria-label={isPausedRecordedAudio ? 'Play' : 'Pause'}
      >
        {isPausedRecordedAudio ? (
          <Play className="h-6 w-6 fill-current text-white" />
        ) : (
          <Pause className="h-6 w-6 fill-current text-white" />
        )}
      </button>

      <div className="relative flex h-6 flex-1 flex-col items-center justify-center rounded-350 bg-background-300 px-2">
        <div className="relative h-2 w-full rounded-350 bg-background-50">
          <div
            className="absolute left-0 top-0 h-full rounded-350 bg-[#ff6b6b]"
            style={{ width: `${calculatedProgress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
