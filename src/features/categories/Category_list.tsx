import useFetch from '@/features/hooks/getAPI/useFetch'
import Link from 'next/link'

export default function Category_list() {
  const { data, isLoading, error } = useFetch('/categories')

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error occurred.</p>

  return (
    <>
      <ul>
        {data.map((item, index) => {
          return (
            <li>
              <Link
                className="category_links"
                href={`/SomeCategory/${item.category_id}`}
                key={item.category_id}
              >
                {item.category_name}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
