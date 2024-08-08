import { useCallback, useEffect, useState } from 'react'

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export function useDebounceClick(callback, delay) {
  const debouncedCallback = useCallback(() => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        callback(...args)
      }, delay)
    }
  }, [callback, delay])

  return debouncedCallback()
}
