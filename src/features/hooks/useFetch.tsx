import { useState, useEffect } from 'react'

export const useFetch = (tableName: string) => {
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  async function getData() {
    try {
      const postData = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/${tableName}`,
        postData,
      )
      const response = await res.json()
      setData(response.data)
      console.log(response.data)
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setLoading(false)
      console.log(data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, isLoading, isError }
}

// type State<T> = {
//   data?: T
//   loading: boolean
//   error?: Error
// }

// const useFetch = <T,>(url: string): State<T> => {
//   const [state, setState] = useState<State<T>>({
//     data: undefined,
//     loading: true,
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url)
//         const data = await response.json()
//         setState({ data, loading: false })
//       } catch (error) {
//         setState({ loading: false, error })
//       }
//     }

//     fetchData()
//   }, [url])

//   return state
// }
