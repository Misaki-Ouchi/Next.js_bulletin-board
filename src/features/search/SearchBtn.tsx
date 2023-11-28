import { useState } from 'react'
import { useRouter } from 'next/router'

const SearchBtn = () => {
  const router = useRouter()
  const [inputVal, setInputVal] = useState('')
  const [inputType, setInputType] = useState('')

  const inputChange = (e: any) => {
    setInputVal(e.target.value)
  }
  const typeChange = (e: any) => {
    setInputType(e.target.value)
  }

  const searchClick = () => {
    router.push({pathname: "/SearchResult", query: {word: inputVal, type: inputType}})
  }

  return (
    <div className="flex items-center gap-1 text-xs font-semibold">
      <input
        type="text"
        placeholder="検索"
        onChange={inputChange}
      />
      <div className="flex gap-1">
        <label className="flex ">
          <input
            type="radio"
            name="search"
            value="タイトル"
            onChange={typeChange}
            />
          <span>タイトル</span>
        </label>
        <label className="flex ">
          <input
            type="radio"
            name="search"
            value="本文"
            onChange={typeChange}
            />
          <span>本文</span>
        </label>
        <label className="flex ">
          <input
            type="radio"
            name="search"
            value="コメント"
            onChange={typeChange}
          />
          <span>コメント</span>
        </label>
      </div>
      <button
        className="btn"
        onClick={searchClick}
      >
        検索
      </button>
    </div>
  )
}
export default SearchBtn
