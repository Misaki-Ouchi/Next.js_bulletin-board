import useFetch from '@/features/hooks/getAPI/useFetch'

async function Category_ID() {
  const {
    query: { category_id }
  } = req

  const { data, isLoading, error } = useFetch(`/categories/${req}`)

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
                  className='category_links'
                  href={`/api/titles/${item.category_id}`}
                  key={item.category_id}>
                  {item.category_name}
                </Link>
              </li>
            </ul>
          )
        })}
    </>
  )

}
export default Category_ID
