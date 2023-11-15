import { useState, useEffect } from 'react'

const useFetch_option = (
  tableName: string,
  option_id: number
) => {
  const [isLoading_opt, setIsLoading_opt] = useState(true)
  const [error_opt, setError_opt] = useState(false)
  const [data_opt, setData_opt] = useState(null)

  const getData = async() => {
    try {
      const postData = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }

      let url = `${process.env.NEXT_PUBLIC_URL}/api/${tableName}/${option_id}`

      const res = await fetch(url, postData)
      const data = await res.json()
      setData_opt(data)
      setIsLoading_opt(false)

    } catch (err) {
      setError_opt(true)
      setIsLoading_opt(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data_opt, isLoading_opt, error_opt }
}

export default useFetch_option
