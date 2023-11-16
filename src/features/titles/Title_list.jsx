import useFetch from '@/features/hooks/getAPI/useFetch'
import Link from 'next/link'

export default function Title_list({ category_id }) {
  const { data, isLoading, error } = useFetch(`/titles/category_id/${category_id}`)
  const { ctg_data, ctg_isLoading, ctg_error } = useFetch(`/categories/${category_id}/name`)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error occurred.</p>
  }
  return (
    <>
      <ul>
        {data.map((item, index) => {
          return (
            <li>
              <Link
                href={`/SomeTitle/${item.title_id}`}
                key={item.title_id}
              >
                {item.title_name}
                {item.outline}
                {item.created_at}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
