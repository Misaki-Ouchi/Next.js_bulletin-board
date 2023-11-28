import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Layout from '@/components/base/Layout'
import Title_list from '@/features/titles/Title_list'

export default function Category_ID() {
  const router = useRouter()
  const req = router.query.category_id

  if(!req) return <p>loading</p>

  return (
    <div>
      <Layout>
        <Title_list category_id={req} />
      </Layout>
    </div>
  )

}
