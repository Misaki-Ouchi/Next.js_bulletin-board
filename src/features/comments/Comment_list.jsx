import Link from 'next/link'
import useFetch from '@/features/hooks/getAPI/useFetch'
import AComment from './AComment'

export default function Comment_list({title_id, recentPostName}) {
  const comments = useFetch(`/comments/title_id/${title_id}`)
  const recentComment = useFetch(`/comments/title_id/${title_id}/recent`)
  let title = useFetch(`/titles/${title_id}`)
  let resisterUser = useFetch(`/users/title_id/${title_id}/user_name`)

  if (comments.isLoading || title.isLoading || recentComment.isLoading || resisterUser.isLoading) {
    return <p>Loading...</p>
  }
  if (comments.error || title.error || recentComment.error || resisterUser.error) {
    return <p>Error occurred.</p>
  }

  const commentLen = comments.data.length
  title = title.data[0]
  resisterUser = resisterUser.data[0].user_name

  let recentPost
  if (recentComment.data.length > 0) {
    recentPost = recentComment.data[0].created_at
  }

  return (
    <div className='comment_list'>
      {/* タイトル情報 */}
      <div>
        <h2>{title.title_name}</h2>
        <hr className='mt-6 mb-6'/>
        <p className='text-sm'>{title.outline}</p>
      </div>

      <div className='m-4'>
        <hr className='mb-1'/>
        <p className='text-[0.7rem]'>
          {recentComment.data.length > 0 && (
            <span>更新：{recentPost} {recentPostName}</span>
          )}
        <br/>
          登録：{title.created_at} {resisterUser}
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
    </div>
  )
}
