import useFetch from '@/features/hooks/getAPI/useFetch'
import Link from 'next/link'

const SimpleTitleList = ({ category_id }) => {
  const { data, isLoading, error } = useFetch(
    `/titles/category_id/${category_id}`,
  )

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error occurred.</p>

  return data.map((title, index) => {
    return (
      <div
        className='simpleTitle'
        key={index}
      >
        <Link
          href={`SomeTitle/${title.title_id}`}
        >
          {title.title_name}
        </Link>
        <br />
      </div>
    )
  })
}

export default SimpleTitleList
