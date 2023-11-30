import Link from 'next/link'

export default function Search_titleName({titleData, word}) {
  const titles = titleData.data

  return (
    <>
      <ul className='border-t border-gray-400'>
        {titles.map((title: any, index: number) => {
          return (
            <li
              className='p-1 border-b border-l border-r border-gray-400'
              key={title.title_id}
            >
              <Link
                href={{ pathname: `/SomeTitle/${title.title_id}`, query: { recentPost_userName: title.user_name } }}
                as={`/SomeTitle/${title.title_id}`}
              >
                {title.title_name}
              </Link>
              <span className='text-[0.7rem]'>
                {' '}{title.user_name}{' '}-{' '}{title.created_at}
              </span>

              {titles.title_name}
            </li>
          )
        })}
      </ul>
    </>
  )
}
