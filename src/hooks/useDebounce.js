import { useCallback, useEffect, useState } from 'react'

export function useDebouce (ms) {
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId)
    }
  }, [timeoutId])

  const debounce = useCallback((callback) => {
    const id = setTimeout(callback, ms)
    setTimeoutId(id)
  }, [])

  return debounce
}
