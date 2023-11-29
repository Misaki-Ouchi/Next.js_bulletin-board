import useFetch from '@/features/hooks/getAPI/useFetch'
import Link from 'next/link'

const SimpleTitleList = ({ titles }) => {

  return titles.map((title, index) => {
    return (
      <div
        className='simpleTitle'
        key={index}
      >
        <Link
          href={`/SomeTitle/${title.title_id}`}
        >
          {title.title_name}
        </Link>
        <br />
      </div>
    )
  })
}

export default SimpleTitleList
