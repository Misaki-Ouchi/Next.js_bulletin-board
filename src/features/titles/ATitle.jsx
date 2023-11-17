import Link from 'next/link'
import useFetch from '@/features/hooks/getAPI/useFetch'
import useFetch_col from '@/features/hooks/getAPI/useFetch_col'
import useFetch_recent from '@/features/hooks/getAPI/useFetch_recent'

export default function ATitle({title, category}) {
  // const comment = useFetch(`/titles/${title_id}`)
  // const category = useFetch_col(`/categories/${category_id}/category_name`)
  const comment_recent = useFetch_recent(`/comments/title_id/recent`)

  if (comment_recent.isLoading) {
    return <p>Loading...</p>
  }
  if (comment_recent.error) {
    return <p>Error occurred.</p>
  }

  return (
    <>
      <Link href={`/SomeTitle/${title.title_id}`}>
        {title.title_name}
      </Link>
      <Link
        href={`/SomeCategory/${category.category_id}`}
        className='ml-1 text-xs text-blue-600'
      >
        {category.category_name}
      </Link>
      <p className='text-sm'>{title.outline}</p>
      <small>{ }</small>
    </>
  )
}
