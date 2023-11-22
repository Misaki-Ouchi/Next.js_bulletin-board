import Link from 'next/link'
import useFetch from '@/features/hooks/getAPI/useFetch'
import useFetch_col from '@/features/hooks/getAPI/useFetch_col'

export default function ARecentTitle({ recentData }) {
  const comment_recent = useFetch(`/comments/title_id/${recentData.title_id}/recent`)
  const title = useFetch(`/titles/${recentData.title_id}`)
  const category = useFetch(`/categories/${recentData.category_id}`)

  if (comment_recent.isLoading || title.isLoading || category.isLoading) {
    return <p>Loading...</p>
  }
  if (comment_recent.error || title.error || category.error) {
    return <p>Error occurred.</p>
  }

  const titleD = title.data[0]
  const categoryD = category.data[0]

  return (
    <>
      <Link href={`/SomeTitle/${recentData.title_id}`}>
        {titleD.title_name}
      </Link>
      <Link
        href={`/SomeCategory/${categoryD.category_id}`}
        className='ml-1 text-xs text-blue-600'
      >
        {categoryD.category_name}
      </Link>
      <div className='flex justify-between'>
        <p className='w-[50%] text-sm'>
          {titleD.outline}
        </p>
        {comment_recent.data.length > 0 && (
          <span
            className='text-[0.7rem]'
          >最終更新：{comment_recent.data[0].created_at}</span>
        )}
      </div>
    </>
  )
}
