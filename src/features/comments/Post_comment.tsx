

const Post_comment = () => {


  return (
    <>
      <div className="container_box w-full bg-gray-300 relative bottom-0">
        名前：<p></p>
        <div className="flex items-stretch text-sm">
          <textarea className="flex-grow mr-2" placeholder="500文字以内" />
          <button className="btn w-15">投稿</button>
        </div>
      </div>
    </>
  )
}

export default Post_comment
