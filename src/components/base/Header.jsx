import Head from 'next/head'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className='container_box bg-yellow-50'>
        <Link href="/Learning" className='p-1 bg-yellow-400 hover:bg-yellow-600'>学習用ページへ</Link>
        <div className='flex justify-between'>
          <div className='header_icon'>
            <p>Next掲示板</p>
          </div>
          <div className='flex gap-2'>
            <input type="text" placeholder='検索' />
            <div className='flex gap-1'>
              <input type="radio"/>タイトル
              <input type="radio"/>本文
              <input type="radio"/>コメント
            </div>
            <button>検索</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
