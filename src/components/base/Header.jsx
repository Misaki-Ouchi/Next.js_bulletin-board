import Head from 'next/head'
import Link from 'next/link'
import LogoutButton from '@/features/users/LogoutButton'
import UserName from '@/features/users/UserName'

const Header = () => {
  return (
    <>
      <header className='bg-yellow-400'>
        {/* <Link href='/Learning' className='inline-block p-1 mb-2 bg-yellow-200 hover:bg-yellow-300'>
          学習用ページへ
        </Link> */}
        <div className='flex justify-between items-center'>
          <div className='header_icon'>
            <Link href='/Top' className='font-bold text-white hover:text-yellow-500 hover:bg-yellow-50'>
              Next掲示板
            </Link>
          </div>
          <div className='flex items-center gap-1 text-xs font-semibold'>
            <input type="text" placeholder='検索' />
            <div className='flex gap-1'>
              <label className='flex '><input type="radio" name="search"/><span>タイトル</span></label>
              <label className='flex '><input type="radio" name="search"/><span>本文</span></label>
              <label className='flex '><input type="radio" name="search"/><span>コメント</span></label>
            </div>
            <button className='btn'>検索</button>
          </div>
            <UserName />
        </div>
      </header>
    </>
  )
}

export default Header
