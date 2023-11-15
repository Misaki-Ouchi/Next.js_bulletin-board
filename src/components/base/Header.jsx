import Head from 'next/head'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className='container_box bg-yellow-400'>
        <Link href='/Learning' className='inline-block p-1 mb-2 bg-yellow-200 hover:bg-yellow-300'>学習用ページへ</Link>
        <div className='flex justify-between'>
          <div className='header_icon'>
            <Link href='/' className='font-bold text-white hover:text-yellow-500 hover:bg-yellow-50'>Next掲示板</Link>
          </div>
          <div className='flex items-center gap-2 text-sm font-semibold'>
            <input type="text" placeholder='検索' />
            <div className='flex gap-1'>
              <label><input type="radio" name="search"/>タイトル</label>
              <label><input type="radio" name="search"/>本文</label>
              <label><input type="radio" name="search"/>コメント</label>
            </div>
            <button className='btn'>検索</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
