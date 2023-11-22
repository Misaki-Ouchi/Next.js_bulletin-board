import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Post_category() {
  const router = useRouter()
  const [categoryName, setCategoryName] = useState('')

  const onChangeHandler = (e: any) => {
    setCategoryName(e.target.value)
  }

  const onSubmitHandler = async (e: any) => {
    e.preventDefault()
    let response

    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category_name: categoryName }),
    }
    if (categoryName.length < 2) return
    try {const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/categories`,
      postData,
      )
      response = await res.json()
    }
    finally {
      router.push("/NewTopics")
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler} action="/api/categories" method="POST">
        <input
          name="category_name"
          value={categoryName}
          onChange={onChangeHandler}
          className="mb-2"
          type="text"
          placeholder="カテゴリ名(2文字以上)"
        />
        <br/>
        <button type="submit" className="mb-3 btn">
          カテゴリ登録
        </button>
      </form>
    </>
  )
}
