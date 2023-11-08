import { useState, useEffect } from 'react'

type State<T> = {
  data?: T
  loading: boolean
  error?: Error
}

const useFetch = <T,>(url: string): State<T> => {
  const [state, setState] = useState<State<T>>({
    data: undefined,
    loading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setState({ data, loading: false })
      } catch (error) {
        setState({ loading: false, error })
      }
    }

    fetchData()
  }, [url])

  return state
}

export default useFetch
