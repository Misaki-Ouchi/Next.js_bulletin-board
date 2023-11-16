import Comment_list from '@/features/comments/Comment_list'
import Post_comment from '@/features/comments/Post_comment'

const SomeTitle_parts = ({title_id}) => {
  return (
    <>
      <Comment_list title_id={title_id} />
      <Post_comment/>
    </>
  )
}

export default SomeTitle_parts
