import { useState, useEffect } from 'react'

const useFetch_recent = (
  url_end: string
) => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  const getData = async() => {
    try {
      const postData = {
        method: 'GET_RECENT',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const url = `${process.env.NEXT_PUBLIC_URL}/api${url_end}/recent`
      const res = await fetch(url, postData)
      const data = await res.json()
      setData(data)
      setIsLoading(false)

    } catch (err) {
      setError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, isLoading, error }
}

export default useFetch_recent
