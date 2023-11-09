import Head from 'next/head'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className='container_box bg-yellow-400'>
        <Link href="/Learning" className='p-1 bg-yellow-200 hover:bg-yellow-300'>学習用ページへ</Link>
        <div className='flex justify-between'>
          <div className='header_icon'>
            <p>Next掲示板</p>
          </div>
          <div className='flex items-center gap-2 text-sm font-semibold'>
            <input type="text" placeholder='検索' />
            <div className='flex gap-1'>
              <label><input type="radio"/>タイトル</label>
              <label><input type="radio"/>本文</label>
              <label><input type="radio"/>コメント</label>
            </div>
            <button className='btn'>検索</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
