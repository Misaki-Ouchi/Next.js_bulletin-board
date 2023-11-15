import useFetch from '@/features/hooks/useFetch'
import Link from 'next/link'

export default function Comment_list({title_id}) {
  const { data, isLoading, error } = useFetch('/comments')

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
