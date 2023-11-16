import useFetch from '@/features/hooks/getAPI/useFetch'
import { useRouter } from "next/router";
import Link from 'next/link'
import Layout from '@/components/base/Layout'
import SomeCategory_parts from '@/components/main_parts/SomeCategory_parts'
import Title_list from '@/features/titles/Title_list'

function Category_ID() {
  const router = useRouter()
  const req = router.query.category_id

  return (
    <>
      <Layout>
        <SomeCategory_parts category_id={req} />
      </Layout>
    </>
  )

}
export default Category_ID
