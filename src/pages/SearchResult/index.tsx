import { useRouter } from 'next/router'
import Layout from '@/components/base/Layout'
import useFetch from '@/features/hooks/getAPI/useFetch'
import Search_titleName from '@/features/search/Search_titleName'
import Search_comment from '@/features/search/Search_comment'
import Search_outline from '@/features/search/Search_outline'

export default function SearchResult() {
  const router = useRouter()
  const columnName = router.query.columnName
  const word = router.query.word

  if (!columnName || !word) return <p>loading</p>

  const data = useFetch(`/search/${columnName}/${word}`)

  if (data.isLoading) {
    return <p>Loading...</p>
  }
  if (data.error) {
    return (
      <Layout>
        <p>該当するデータはありませんでした。</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <p className='mb-4 text-sm'>検索結果（全{data.data.length}件を表示）</p>

      {columnName === 'title_name' && (
        <Search_titleName titleData={data} word={word} />
      )}
      {columnName === 'outline' && <Search_outline outlineData={data} />}
      {columnName === 'comment_content' && (
        <Search_comment commentData={data} />
      )}
    </Layout>
  )
}
