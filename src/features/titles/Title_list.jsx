import useFetch from '@/features/hooks/getAPI/useFetch'
import ATitle from './ATitle'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Title_list({ category_id }) {
  const titles = useFetch(`/titles/category_id/${category_id}`)
  const category = useFetch(`/categories/${category_id}`)

  if (titles.isLoading || category.isLoading) {
    return <p>Loading...</p>
  }
  if (titles.error || category.error) {
    return <p>Error Occurred</p>
  }

  const titlesD = titles.data
  const categoryD = category.data[0]

  return (
    <>
      {/* カテゴリー名 */}
      <h2 className='mb-4'>{categoryD.category_name}</h2>

      {/* タイトルリスト */}
      <ul className='border-t border-gray-400'>
        {titlesD.map((item, index) => {
          return (
            <li
              className='p-1 border-b border-l border-r border-gray-400'
              key={item.title_id}
            >
              <ATitle title={item} category={categoryD} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
