import { useState } from 'react'
import useFetch from '@/features/hooks/getAPI/useFetch'
import Link from 'next/link'
import SimpleTitleList from '@/features/titles/SimpleTitleList'

export default function ACategory({ category }) {
  const { data, isLoading, error } = useFetch(
    `/titles/category_id/${category.category_id}`,
  )
  const [isTitlesShow, setIsTitlesShow] = useState(false)
  
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error occurred.</p>

  const downClick = () => {
    setIsTitlesShow(!isTitlesShow)
  }

  return (
    <>
      <button
        onClick={downClick}
        className={`category_down ${isTitlesShow && 'isDown'}`}
      >
        &gt;
      </button>
      <Link
        className="category_links"
        href={`/SomeCategory/${category.category_id}`}
      >
        {category.category_name}
        ({data.length})
      </Link>
      {isTitlesShow && <SimpleTitleList titles={data} />}
    </>
  )
}
