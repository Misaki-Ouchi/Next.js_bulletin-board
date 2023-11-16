import Link from 'next/link'
import useFetch from '@/features/hooks/getAPI/useFetch'
import useFetch_col from '@/features/hooks/getAPI/useFetch_col'

export default function Comment_list({title_id}) {
  const { data, isLoading, error } = useFetch(`/comments/title_id/${title_id}`)
  const { data_col, isLoading_col, error_col } = useFetch_col(`/titles/${title_id}/title_name`)

  if (isLoading || isLoading_col) {
    return <p>Loading...</p>
  }
  if (error || error_col) {
    return <p>Error occurred.</p>
  }
  return (
    <>
      {/* タイトル名 */}
      <h2>{data_col[0].title_name}</h2>

      {/* コメントリスト */}
      {data.map((item, index) => {
          return (
            <ul>
              <li key={item.comment_id}>
                {item.comment_content}
              </li>
            </ul>
          )
        })}
    </>
  )
}
