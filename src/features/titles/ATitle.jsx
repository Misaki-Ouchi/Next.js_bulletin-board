import Link from 'next/link'
import useFetch from '@/features/hooks/getAPI/useFetch'
import useFetch_col from '@/features/hooks/getAPI/useFetch_col'

export default function ATitle({ title, category }) {
  const comment_recent = useFetch(`/comments/title_id/${title.title_id}/recent`)
  const postUser = useFetch(`/users/${title.user_id}/user_name`)
  let categoryD

  if (typeof category !== 'number') {
    categoryD = category

    if (comment_recent.isLoading || categoryD.isLoading || postUser.isLoading) {
      return <p>Loading...</p>
    }
    if (comment_recent.error || categoryD.error || postUser.error) {
      return <p>Error occurred.</p>
    }
  }

  return (
    <>
      <Link href={{ pathname: `/SomeTitle/${title.title_id}`, query: {recentPost_userName: postUser.data[0].user_name}}} as={`/SomeTitle/${title.title_id}`}>
        {title.title_name}
      </Link>
      <Link
        href={`/SomeCategory/${categoryD.category_id}`}
        className='ml-1 text-xs text-blue-600'
      >
        {categoryD.category_name}
      </Link>
      <div className='flex justify-between'>
        <p className='w-[50%] text-sm'>
          {title.outline}
        </p>
        {comment_recent.data.length > 0 && (
          <span
            className='text-[0.7rem]'
          >最終更新：{comment_recent.data[0].created_at} {postUser.data[0].user_name}</span>
        )}
      </div>
    </>
  )
}
