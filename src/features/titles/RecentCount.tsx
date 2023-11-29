import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const RecentCount = ({ length }) => {
  const router = useRouter()
  const [count, setCount] = useState(10) // 表示タイトル数
  const [pages, setPages] = useState([]) // ページ番号

  const cutNum = Math.ceil(length / count)

  useEffect(() => {
    let list = []
    for (let i = 1; i <= cutNum; i++) {
      list.push(i)
    }
    setPages(list)
  }, [])

  return (
    <div className='mt-2 text-center'>
      {pages.map((page, index) => {
        return (
          <Link
            className='p-1'
            key={index}
            href={`/Top/${page}`}
          >
            {page}
          </Link>
        )
      })}
    </div>
  )
}

export default RecentCount
