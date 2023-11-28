import { useState } from 'react'
import { useRouter } from 'next/router'

const Post_comment = ({ title_id }) => {
  const router = useRouter()

  // フォーム用初期値
  const initialValues = {
    title_id: Number(title_id),
    user_id: '',
    comment_content: '',
    created_at: '',
  }
  // フォーム入力値
  const [formValues, setFormValues] = useState(initialValues)

  // 入力値保存
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })

    if (formValues.user_id === '') {
      let user = localStorage.getItem('user')
      user = JSON.parse(user)[0]
      setFormValues({ ...formValues, user_id: Number(user.user_id) })
    }
  }

  // フォーム送信ボタンクリック
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (formValues.comment_content !== '' && formValues.user_id !== '') {
      // フォーム送信
      postComments(formValues)
    }
  }

  // POST＆データ取得
  const postComments = async (values: object) => {
    let response
    try {
      const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/comments`,
        postData,
      )
      response = await res.json()
    } finally {
      // コメント一覧ページ更新
      router.reload()
    }
  }

  return (
    <>
      <div className="comment_box bg-gray-300">
        <div className="flex text-sm">
          <textarea
            className="flex-grow"
            placeholder="500文字以内"
            name="comment_content"
            value={formValues.comment_content}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn w-15">
            投稿
          </button>
        </div>
      </div>
    </>
  )
}

export default Post_comment
