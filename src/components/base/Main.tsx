import Post_comment from '@/features/comment/Post_comment'

const Main = () => {
  return (
    <>
      <main className="container">
        <div className="container_box">
          <p>コメント(･ω･)一覧</p>
        </div>
        <Post_comment />
      </main>
    </>
  )
}

export default Main
