import { useCallback, useState } from 'react'

export function useSubmitHandler(timeout: number = 2000) {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const delayedSubmit = useCallback(
    (callback: () => void = () => {}) => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setOpen(false)
        callback()
      }, timeout)
    },
    [timeout]
  )

  return {
    loading,
    setLoading,
    open,
    setOpen,
    delayedSubmit,
  }
}
