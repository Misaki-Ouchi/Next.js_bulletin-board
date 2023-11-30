import Link from 'next/link'

export default function Search_comment({commentData}) {
  const data = commentData.data

  return (
    <>
      <ul className='border-t border-gray-400'>
        {data.map((data: any, index: number) => {
          return (
            <li
              className='p-1 border-b border-l border-r border-gray-400'
              key={data.comment_id}
            >
              <div>
                <Link href={{ pathname: `/SomeTitle/${data.title_id}`, query: {recentPost_userName: data.user_name}}} as={`/SomeTitle/${data.title_id}`}>
                  {data.title_name}
                </Link>
                <span className='text-[0.7rem]'>
                  {' '}{data.user_name}{' '}-{' '}{data.created_at}
                </span>
              </div>
              <p className='text-sm'>{data.comment_content}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}
