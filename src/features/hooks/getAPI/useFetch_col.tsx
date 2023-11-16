import { useState, useEffect } from 'react'

const useFetch_col = (
  url_end: string
) => {
  
  const [isLoading_col, setIsLoading_col] = useState(true)
  const [error_col, setError_col] = useState(false)
  const [data_col, setData_col] = useState(null)

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
      setData_col(data)
      setIsLoading_col(false)

    } catch (err) {
      setError_col(true)
      setIsLoading_col(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data_col, isLoading_col, error_col }
}

export default useFetch_col
