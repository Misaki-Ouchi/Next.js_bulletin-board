import Link from 'next/link'
import useFetch from '@/features/hooks/getAPI/useFetch'
import useFetch_col from '@/features/hooks/getAPI/useFetch_col'

export default function AComment({comment_id, user_id, index}) {
  const comment = useFetch(`/comments/${comment_id}`)
  const user = useFetch_col(`/users/${user_id}/user_name`)

  if (comment.isLoading || user.isLoading) {
    return <p>Loading...</p>
  }
  if (comment.error || user.error) {
    return <p>Error occurred.</p>
  }

  return (
    <>
      <div className='mb-1 flex items-baseline'>
        <h3>{index}：{user.data[0].user_name}</h3>
        <span className='text-[0.7rem] ml-4'>
          {comment.data[0].created_at}
        </span>
      </div>
      <p className='text-sm'>
        {comment.data[0].comment_content}
      </p>
    </>
  )
}
