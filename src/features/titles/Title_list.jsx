import useFetch from '@/features/hooks/getAPI/useFetch'
import Link from 'next/link'

export default function Title_list({category_id}) {
  const { data, isLoading, error } = useFetch('/titles')

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error occurred.</p>
  }
  return (
    <>
      {data.map((item, index) => {
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
