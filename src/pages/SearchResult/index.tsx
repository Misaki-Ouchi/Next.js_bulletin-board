import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Layout from '@/components/base/Layout'
import Title_list from '@/features/titles/Title_list'
import useFetch from '@/features/hooks/getAPI/useFetch'

export default function Category_ID() {
  const router = useRouter()
  const word = router.query.word
  const type = router.query.type

  // if (!req) return <p>loading</p>
  
  if (type === 'タイトル') {
    // titles(ループ)と categoryをATitleに渡す
    const titles = useFetch(`/search/titles/title_name/${word}`)
  }
  if (type === '本文') {
    //
  }
  if (type === 'コメント') {
    // t
  }

  return (
    <>
      <Layout>
        {/* <Title_list category_id={req} /> */}
      </Layout>
    </>
  )

}
