import { useState } from 'react'
import { useRouter } from 'next/router'

const SearchBtn = () => {
  const router = useRouter()
  const [columnName, setColumnName] = useState('')
  const [word, setWord] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)

  const inputChange = (e: any) => {
    setWord(e.target.value)
  }
  const typeChange = (e: any) => {
    const type = e.target.value

    if (type !== '' && word !== '') {
      setBtnDisabled(false)
    }

    if (type === 'タイトル') {
      setColumnName('title_name')
    }
    if (type === '本文') {
      setColumnName('outline')
    }
    if (type === 'コメント') {
      setColumnName('comment_content')
    }
  }

  const searchClick = () => {
    router.push(
      {
        pathname: `/SearchResult`,
        query: {
          columnName: columnName,
          word: word,
        },
      },
      `SearchResult`
    )
  }

  return (
    <div className="flex items-center gap-1 text-xs font-semibold">
      <input type="text" placeholder="検索" onChange={inputChange} />
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
      <button className="btn" onClick={searchClick} disabled={btnDisabled}>
        検索
      </button>
    </div>
  )
}
export default SearchBtn
