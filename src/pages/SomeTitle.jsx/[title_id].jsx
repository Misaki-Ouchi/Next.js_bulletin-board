import useFetch from '@/features/hooks/getAPI/useFetch'
import { useRouter } from "next/router";
import Link from 'next/link'

function Title_ID() {
  const router = useRouter()
  const req = router.query.title_id
  const { data, isLoading, error } = useFetch(`/comments/title_id/${req}`)

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error occurred.</p>
  }
  return (
    <>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={item.comment_id}>
              {item.comment_content}
            </li>
          )
        })}
      </ul>
    </>
  )

}
export default Title_ID
