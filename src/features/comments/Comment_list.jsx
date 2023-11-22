import Link from 'next/link'
import useFetch from '@/features/hooks/getAPI/useFetch'
import AComment from './AComment'

export default function Comment_list({title_id}) {
  const comments = useFetch(`/comments/title_id/${title_id}`)
  const recentComment = useFetch(`/comments/title_id/${title_id}/recent`)
  const title = useFetch(`/titles/${title_id}`)

  if (comments.isLoading || title.isLoading || recentComment.isLoading) {
    return <p>Loading...</p>
  }
  if (comments.error || title.error || recentComment.error) {
    return <p>Error occurred.</p>
  }

  const commentLen = comments.data.length
  const titleD = title.data[0]
  let recent_post
  if (recentComment.data.length > 0) {
    recent_post = recentComment.data[0].created_at
  }

  return (
    <>
      {/* タイトル情報 */}
      <div>
        <h2>{titleD.title_name}</h2>
        <hr className='mt-6 mb-6'/>
        <p className='text-sm'>{titleD.outline}</p>
      </div>

      <div className='m-4'>
        <hr className='mb-1'/>
        <p className='text-[0.7rem]'>
          {recentComment.data.length > 0 && (<span>更新：{recent_post}</span>)}
        <br/>
          登録：{titleD.created_at}
        </p>
      </div>

      {/* コメントリスト */}
      <ul className='m-6'>
        {comments.data.map((item, index) => {
          return (
            <li
              className='mb-4'
              key={item.comment_id}
            >
              <AComment
                comment_id={item.comment_id}
                user_id={item.user_id}
                index={commentLen - index} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
