import { useState } from 'react'
import useFetch from '@/features/hooks/getAPI/useFetch'
import Link from 'next/link'
import SimpleTitleList from '@/features/titles/SimpleTitleList'
import ACategory from '@/features/categories/ACategory'

export default function Category_list() {
  const { data, isLoading, error } = useFetch('/categories')

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error occurred.</p>

  return (
    <>
      <ul className='aside_list'>
        {data.map((item, index) => {
          return (
            <li
              className='category_list'
              key={item.category_id}
            >
              <ACategory category={item} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
