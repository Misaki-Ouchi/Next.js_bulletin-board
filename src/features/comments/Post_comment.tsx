import { useState } from 'react'
import { useRouter } from 'next/router'
import useFetch from '@/features/hooks/getAPI/useFetch'
import useTimeFunc from '@/features/hooks/getTime/useTimeFunc'

const Post_comment = ({ title_id }) => {
  const router = useRouter()

  // フォーム用初期値
  const initialValues = {
    title_id: Number(title_id),
    user_id: 1,
    comment_content: '',
    created_at: '',
  }
  // フォーム入力値
  const [formValues, setFormValues] = useState(initialValues)

  // 入力値保存
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  // フォーム送信ボタンクリック
  const handleSubmit = (e) => {
    e.preventDefault()
    if (formValues.comment_content === '') return

    const timeData = useTimeFunc()
    setFormValues({ ...formValues, created_at: timeData })
    // フォーム送信(＆タイトルデータ更新)
    updateTitle(formValues.created_at)
    postComments(formValues)
  }

  // POST＆データ取得
  const postComments = async (values) => {
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
  const updateTitle = async (recent_post) => {
    let response
    try {
      const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: recent_post,
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/titles/${title_id}`,
        postData,
      )
      response = await res.json()
    } finally {
    }
  }

  return (
    <>
      <div className="container_box w-full bg-gray-300 relative bottom-0">
        名前：<p></p>
        <div className="flex items-stretch text-sm">
          <textarea
            className="flex-grow mr-2"
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
