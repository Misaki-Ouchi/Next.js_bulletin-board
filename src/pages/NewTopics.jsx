import type { NextPage } from 'next'

const NewTopics: NextPage = () => {
  return (
    <>
      <h1>トピックの作成</h1>
      <div>
        <p>必要事項を入力し、「作成」ボタンを押してください。</p>
        <form action="">
          <div>
            <label>タイトル</label>
            <input type="text" placeholder='30文字以内'/>
            <label>カテゴリ</label>
            <select name="category_select">
              <option value=""></option>
            </select>
            <label>本文</label>
            <textarea placeholder='500文字以内'/>
          </div>
          <button className='btn'>作成</button>
        </form>
      </div>
    </>
  )
}

export default NewTopics
