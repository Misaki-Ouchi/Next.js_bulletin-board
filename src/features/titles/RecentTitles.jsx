import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useFetch from '@/features/hooks/getAPI/useFetch'
import ARecentTitle from './ARecentTitle'

const RecentTitles = () => {
  // title_id, category_id, recent_postを取得
  let recentTitleIds = useFetch(`/comments/recent/per_title`)

  // const [count, setCount] = useState(0)

  if (recentTitleIds.isLoading) {
    return <p>Loading...</p>
  }
  if (recentTitleIds.error) {
    return <p>データを読み込めませんでした。リロードしてください。</p>
  }

  const titlesIds = recentTitleIds.data

  // const clickMore = () => {
  //   setCount(count + 1)
  //   const moreTitles = useFetch(count * 20, 20)
  //   setTitles(moreTitles)
  // }

  return (
    <>
      <h2 className='mb-4'>最新投稿タイトル一覧</h2>

      {/* タイトルリスト */}
      <ul className='border-t border-gray-400'>
        {titlesIds.map((item, index) => {
          return (
            <li
              className='p-1 border-b border-l border-r border-gray-400'
              key={index}
            >
              <ARecentTitle recentData={item} />
            </li>
          )
        })}
      </ul>

      {/* <button onClick={clickMore}>もっとよみこむ</button> */}
    </>
  )

}

export default RecentTitles
