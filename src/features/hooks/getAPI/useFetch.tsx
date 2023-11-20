import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

const useFetch = (
  url_end: string
) => {

  const router = useRouter()
  
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  const getData = async() => {
    try {
      const postData = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const url = `${process.env.NEXT_PUBLIC_URL}/api${url_end}`
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
  }, [router])

  return { data, isLoading, error }
}

export default useFetch
