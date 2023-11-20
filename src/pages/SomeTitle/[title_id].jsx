import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import Layout from '@/components/base/Layout'
import useFetch from '@/features/hooks/getAPI/useFetch'
import Comment_list from '@/features/comments/Comment_list'
import Post_comment from '@/features/comments/Post_comment'

function Title_ID() {
  const router = useRouter()
  const [req, setReq] = useState(router.query.title_id)

  useEffect(() => {
    setReq(router.query.title_id)
  }, [router])

  if(!req) return

  return (
    <>
        <Layout>
          <Comment_list title_id={req} />
          <Post_comment title_id={req} />
        </Layout>
    </>
  )

}
export default Title_ID
