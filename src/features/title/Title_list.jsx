import { useFetch } from '@/features/hooks/useFetch'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Title_list({category_id}) {
  const [titles, setTitles] = useState()

  async function getTitles() {
    const postData = {
      method: 'GET_id',
      headers: {
        'Content-Type': 'application/json',
      },
      body: category_id
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/titles`,
      postData,
    )
    const response = await res.json()
    setTitles(response)
  }

  useEffect(() => {
    getTitles()
  }, [])

  return (
    <>
      {titles !== undefined &&
        titles.map((item, index) => {
          return (
            <ul>
              <li>
                <Link
                  href={`/api/comments/${item.title_id}`}
                  key={item.title_id}>
                  {item.title_name}
                </Link>
              </li>
            </ul>
          )
        })}
    </>
  )
}
