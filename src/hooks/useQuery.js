import { useCallback, useState } from 'react'
import { fetchAuth } from '../utils/fetchAuth'

export function useQuery (path) {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const query = useCallback(async (params) => {
    setLoading(true)

    try {
      const responseData = await fetchAuth(path, params)
      setData(responseData)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [path])

  const reset = useCallback(() => {
    setData(undefined)
    setError(undefined)
    setLoading(false)
  }, [])

  return {
    data,
    error,
    loading,
    query,
    reset
  }
}
