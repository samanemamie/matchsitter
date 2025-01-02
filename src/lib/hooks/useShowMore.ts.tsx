'use client'

import { useCallback, useRef, useState } from 'react'

interface UseShowMoreOptions<T> {
  data: (T & { id: string })[]
  initialDisplayCount: number
  increment: number
}

export function useShowMore<T>({ data, initialDisplayCount, increment }: UseShowMoreOptions<T>) {
  const [displayCount, setDisplayCount] = useState(initialDisplayCount)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleShowMore = useCallback(() => {
    setDisplayCount((prevCount) => {
      const newCount = Math.min(prevCount + increment, data.length)

      if (newCount > prevCount && data.length > 0) {
        setTimeout(() => {
          const lastId = data[newCount - 1]?.id || null

          const element = document.getElementById(`Review${lastId}`)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }

      return newCount
    })
  }, [data, increment])

  const handleShowLess = useCallback(() => {
    setDisplayCount(initialDisplayCount)
  }, [initialDisplayCount])

  const displayedItems = data.slice(0, displayCount)
  const canShowMore = displayCount < data.length
  const canShowLess = displayCount === data.length && displayCount > initialDisplayCount

  return {
    displayedItems,
    canShowMore,
    canShowLess,
    handleShowMore,
    handleShowLess,
    containerRef,
  }
}
