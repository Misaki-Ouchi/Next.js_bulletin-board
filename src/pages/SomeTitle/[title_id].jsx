import Link from 'next/link'
import { useRouter } from "next/router";
import useFetch from '@/features/hooks/getAPI/useFetch'
import Layout from '@/components/base/Layout'
import SomeTitle_parts from '@/components/main_parts/SomeTitle_parts'

function Title_ID() {
  const router = useRouter()
  const req = router.query.title_id

  return (
    <>
      <Layout>
        <SomeTitle_parts title_id={req} />
      </Layout>
    </>
  )

}
export default Title_ID
