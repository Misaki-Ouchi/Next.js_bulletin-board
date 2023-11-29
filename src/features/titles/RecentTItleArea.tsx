import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RecentTitles from '@/features/titles/RecentTitles'
import RecentCount from '@/features/titles/RecentCount'
import useFetch from '@/features/hooks/getAPI/useFetch'
import Link from 'next/link'

const RecentTitleArea = () => {
  // titlesの行数を取得
  const titleData = useFetch(`/titles/count`)

  if (titleData.isLoading) {
    return <p>Loading...</p>
  }
  if (titleData.error) {
    return <p>データを読み込めませんでした。リロードしてください。</p>
  }

  const length = titleData.data[0].count

  return (
    <>
      <RecentTitles />
      <RecentCount length={length} />
    </>
  )
}

export default RecentTitleArea
