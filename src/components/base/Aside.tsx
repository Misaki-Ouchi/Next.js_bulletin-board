import Category_list from '@/features/category/Category_list'
import Post_category from '@/features/category/Post_category'
import Link from 'next/link'

const Aside = () => {
  return (
    <>
      <aside className="container_box bg-yellow-50 text-sm">
        <div>
          <Link href="/NewTopics" className='block text-center p-1 mb-2 bg-green-300 hover:bg-green-500'>トピックを作成する</Link>
          <Post_category />
          <Category_list />
        </div>
      </aside>
    </>
  )
}
export default Aside
