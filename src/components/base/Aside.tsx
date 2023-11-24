import Category_list from '@/features/categories/Category_list'
import Post_category from '@/features/categories/Post_category'
import LogoutButton from '@/features/users/LogoutButton'
import Link from 'next/link'

const Aside = () => {
  return (
    <>
      <aside className="container_box max-w-[160px] bg-yellow-50 text-sm">
        <div>
          <Link href="/NewTopics" className='block text-center p-1 mb-2 bg-green-300 hover:bg-green-500'>トピックを作成する</Link>
          <Post_category />
          <Category_list />
          <LogoutButton />
        </div>
      </aside>
    </>
  )
}
export default Aside
