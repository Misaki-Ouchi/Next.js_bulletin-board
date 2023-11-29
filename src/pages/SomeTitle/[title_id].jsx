import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import Layout from '@/components/base/Layout'
import useFetch from '@/features/hooks/getAPI/useFetch'
import Comment_list from '@/features/comments/Comment_list'
import Post_comment from '@/features/comments/Post_comment'

function Title_ID() {
  const router = useRouter()
  const req = router.query.title_id
  const recentPostName = router.query.recentPost_userName

  if(!req) return

  return (
    <div className='postPage'>
        <Layout>
          <Comment_list title_id={req} recentPostName={recentPostName} />
        <Post_comment title_id={req} />
        </Layout>
    </div>
  )

}
export default Title_ID
