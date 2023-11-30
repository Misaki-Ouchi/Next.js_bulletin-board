import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useFetch from '@/features/hooks/getAPI/useFetch'
import ARecentTitle from './ARecentTitle'

const RecentTitles = () => {
  const router = useRouter()
  const page = router.query.page
  let recentTitles = useFetch(`/titles/recent/${page}/10`)

  if (recentTitles.isLoading) {
    return <p>Loading...</p>
  }
  if (recentTitles.error) {
    return <p>データを読み込めませんでした。リロードしてください。</p>
  }

  recentTitles = recentTitles.data

  return (
    <>
      <h2 className='mb-4'>最新投稿タイトル一覧</h2>

      <ul className='border-t border-gray-400'>
        {recentTitles.map((item, index) => {
          return (
            <li
              className='p-1 border-b border-l border-r border-gray-400'
              key={item.title_id}
            >
              <ARecentTitle recentData={item} />
            </li>
          )
        })}
      </ul>
    </>
  )

}

export default RecentTitles
