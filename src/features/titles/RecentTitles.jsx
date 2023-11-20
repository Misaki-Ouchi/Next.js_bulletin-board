import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useFetch from '@/features/hooks/getAPI/useFetch'
import ATitle from './ATitle'

const RecentTitles = () => {
  let recentTitles = useFetch(`/titles`)
  const [count, setCount] = useState(0)

  if (recentTitles.isLoading) {
    return <p>Loading...</p>
  }
  if (recentTitles.error) {
    return <p>データを読み込めませんでした。リロードしてください。</p>
  }

  const titles = recentTitles.data

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
        {titles.map((item, index) => {
          return (
            <li
              className='p-1 border-b border-l border-r border-gray-400'
              key={index}
            >
              <ATitle title={item} category={item.category_id} />
            </li>
          )
        })}
      </ul>

      {/* <button onClick={clickMore}>もっとよみこむ</button> */}
    </>
  )

}

export default RecentTitles
