import { useFetch } from '@/features/hooks/useFetch'
import { useState, useEffect } from 'react'

// type Category = {
//   id: number
//   category: string
// }

export default function Category_list() {
  
  // const { data, isLoading, isError } = useFetch('categories')
  // console.log(data)

  // if (isLoading || isError) {
  //   return null
  // }

  const [categories, setCategories] = useState<Category[] | undefined>()

  async function getCategories() {
    const postData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/categories`,
      postData,
    )
    const response = await res.json()
    setCategories(response.categories)
    console.log(response.categories)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      {categories !== undefined &&
        categories[0].map((item, index) => {
          return (
            <ul>
              <li key={item.category_id}>{item.category_name}</li>
            </ul>
          )
        })}
    </>
  )
}
