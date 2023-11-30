import Category_list from '@/features/categories/Category_list'
import Post_category from '@/features/categories/Post_category'
import Link from 'next/link'

const Aside = () => {
  return (
    <>
      <aside className="max-w-[160px] text-sm">
          <Link
            href="/NewTopics"
            className='block text-center p-1 mb-4 bg-green-300 hover:bg-green-500'>
            トピックを作成する
          </Link>
          <Post_category />
          <Category_list />
      </aside>
    </>
  )
}
export default Aside
