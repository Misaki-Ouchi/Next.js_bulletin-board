import { useFetch } from '@/features/hooks/useFetch'
import { useState, useEffect } from 'react'
import Link from 'next/link'

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
    setCategories(response)
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      {categories !== undefined &&
        categories.map((item, index) => {
          return (
            <ul>
              <li>
                <Link
                  className='category_links'
                  href={`/api/titles/${item.category_id}`}
                  key={item.category_id}>
                  {item.category_name}
                </Link>
              </li>
            </ul>
          )
        })}
    </>
  )
}
