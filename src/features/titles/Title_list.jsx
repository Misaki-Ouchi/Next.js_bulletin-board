import useFetch from '@/features/hooks/getAPI/useFetch'
import useFetch_col from '@/features/hooks/getAPI/useFetch_col'
import Link from 'next/link'

export default function Title_list({ category_id }) {
  const { data, isLoading, error } = useFetch(`/titles/category_id/${category_id}`)
  const { data_col, isLoading_col, error_col } = useFetch_col(`/categories/${category_id}/category_name`)

  if (isLoading || isLoading_col) {
    return <p>Loading...</p>
  }
  if (error || error_col) {
    return <p>Error occurred.</p>
  }
  return (
    <>
      <h2>{data_col[0].category_name}</h2>
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
