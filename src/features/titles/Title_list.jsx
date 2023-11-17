import useFetch from '@/features/hooks/getAPI/useFetch'
import useFetch_col from '@/features/hooks/getAPI/useFetch_col'
import ATitle from './ATitle'

export default function Title_list({ category_id }) {
  const titles = useFetch(`/titles/category_id/${category_id}`)
  const category = useFetch(`/categories/${category_id}`)

  if (titles.isLoading || category.isLoading) {
    return <p>Loading...</p>
  }
  if (titles.error || category.error) {
    return <p>Error occurred.</p>
  }

  const titlesD = titles.data
  const categoryD = category.data[0]

  return (
    <>
      {/* カテゴリー名 */}
      <h2>{categoryD.category_name}</h2>

      {/* タイトルリスト */}
      <ul className='border-t border-gray-400'>
        {titlesD.map((item, index) => {
          return (
            <li className='p-1 border-b border-l border-r border-gray-400'>
              <ATitle title={item} category={categoryD} />
              {/* <Link
                href={`/SomeTitle/${item.title_id}`}
                key={item.title_id}
              >
                {item.title_name}
                {item.outline}
                {item.created_at}
              </Link> */}
            </li>
          )
        })}
      </ul>
    </>
  )
}
