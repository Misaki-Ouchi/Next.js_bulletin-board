import { useState } from 'react'
import { useRouter } from 'next/navigation'
import useFetch from '@/features/hooks/getAPI/useFetch'

const Post_title = () => {
  const router = useRouter()
  // カテゴリー一覧
  const { data, isLoading, error } = useFetch(`/categories`)
  // フォーム用初期値
  const initialValues = {
    title_name: '',
    category_id: 1,
    user_id: '',
    outline: '',
    created_at: '',
  }
  // フォーム入力値
  const [formValues, setFormValues] = useState(initialValues)
  // バリデーションエラー値
  const [formErrors, setFormErrors] = useState({})

  // ロード中
  if (isLoading) {
    return <p>Loading...</p>
  }
  // エラー時
  if (error) {
    return <p>Error occurred.</p>
  }

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
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))

    if (
      Object.keys(formErrors).length === 0 &&
      formValues.title_name !== '' &&
      formValues.outline !== '' &&
      formValues.user_id !== ''
    ) {
      // フォーム送信
      postTitles('POST', formValues)
    }
  }

  // フォームのバリデーション
  const validate = (values) => {
    const errors = {}
    if (values.title_name === '') {
      errors.title_name = '※タイトルを入力してください。'
    } else if (values.title_name.length > 30) {
      errors.title_name = '※30文字以内で入力してください。'
    }
    if (values.outline === '') {
      errors.outline = '※本文を入力してください。'
    } else if (values.outline.length > 500) {
      errors.outline = '※500文字以内で入力してください。'
    }
    return errors
  }

  // POST＆データID取得
  const postTitles = async (method, values) => {
    let response
    try {
      const postData = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/titles`,
        postData,
      )
      response = await res.json()
    } finally {
      // 新タイトルのコメント一覧ページへ
      router.push(`/SomeTitle/${response}`)
    }
  }

  return (
    <div className="container_box text-sm">
      <h1 className="mt-4 mb-8">トピックの作成</h1>
      <hr className="mb-6" />
      <p className="text-center mb-6">
        必要事項を入力し、「作成」ボタンを押してください。
      </p>
      <form className="bg-gray-200 border border-gray-400 rounded-xl p-6 mb-4">
        <div>
          <div className="flex mb-2">
            <label className="form_label form_label_required">タイトル</label>
            <input
              className="newTopic_input"
              type="text"
              placeholder="30文字以内"
              name="title_name"
              value={formValues.title_name}
              onChange={handleChange}
            />
          </div>
          <div className="flex mb-2">
            <label className="form_label">カテゴリ</label>
            <select
              className="newTopic_input"
              name="category_id"
              onChange={handleChange}
              value={formValues.category_id}
            >
              {data.map((item, index) => {
                return (
                  <option
                    key={item.category_id}
                    value={item.category_id}
                    label={item.category_name}
                  />
                )
              })}
            </select>
          </div>
          <div className="flex mb-2">
            <label className="form_label form_label_required">本文</label>
            <textarea
              className="newTopic_input h-24"
              placeholder="500文字以内"
              name="outline"
              value={formValues.outline}
              onChange={handleChange}
            />
          </div>
          <span className="errorText">{formErrors.title_name}</span>
          <span className="errorText">{formErrors.outline}</span>
        </div>
      </form>
      <button onClick={handleSubmit} className="btn form_btn">
        作成
      </button>
    </div>
  )
}

export default Post_title
