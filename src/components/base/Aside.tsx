import Category_list from '@/features/category/Category_list'
import Post_category from '@/features/category/Post_category'

const Aside = () => {
  return (
    <>
      <aside className="container_box bg-blue-200 text-sm">
        <div>
          <Post_category />
          <Category_list />
        </div>
      </aside>
    </>
  )
}
export default Aside
