import useFetch from '@/features/hooks/getAPI/useFetch'
import { useRouter } from "next/router";
import Link from 'next/link'
import Layout from '@/components/base/Layout'
import SomeCategory_parts from '@/components/main_parts/SomeCategory_parts'
import Title_list from '@/features/titles/Title_list'

function Category_ID() {
  const router = useRouter()
  const req = router.query.category_id
  // const { data, isLoading, error } = useFetch(`/titles/category_id/${req}`)

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }
  // if (error) {
  //   return <p>Error occurred.</p>
  // }
  return (
    <>
      <SomeCategory_parts category_id={req} />
      {/* <ul>
        {data.map((item, index) => {
          return (
              <li>
                <Link
                  href={`/SomeTitle/${item.title_id}`}
                  key={item.title_id}>
                  {item.title_name}
                </Link>
              </li>
          )
        })}
      </ul> */}
    </>
  )

}
export default Category_ID
