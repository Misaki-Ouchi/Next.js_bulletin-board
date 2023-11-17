import Link from 'next/link'
import { useRouter } from "next/router";
import useFetch from '@/features/hooks/getAPI/useFetch'
import Layout from '@/components/base/Layout'
import Comment_list from '@/features/comments/Comment_list'
import Post_comment from '@/features/comments/Post_comment'

import { useEffect, useState } from 'react';

function Title_ID() {
  const router = useRouter()
  const [req, setReq] = useState(router.query.title_id)
  
  useEffect(() => {
    setReq(router.query.title_id)
  }, [router.query.title_id])

  return (
    <>
      <Layout>
        <Comment_list title_id={req} />
        <Post_comment/>
      </Layout>
    </>
  )

}
export default Title_ID
