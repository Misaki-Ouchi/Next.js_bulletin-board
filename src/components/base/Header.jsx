import Head from 'next/head'
import Link from 'next/link'
import LogoutButton from '@/features/users/LogoutButton'
import UserName from '@/features/users/UserName'
import SearchBtn from '@/features/search/SearchBtn'

const Header = () => {
  return (
    <>
      <header className='bg-yellow-400'>
        {/* <Link href='/Learning' className='inline-block p-1 mb-2 bg-yellow-200 hover:bg-yellow-300'>
          学習用ページへ
        </Link> */}
          <div className='header_icon'>
            <Link href='/Top/1' className='font-bold text-white hover:text-yellow-500 hover:bg-yellow-50'>
              Next掲示板
            </Link>
          </div>
          <SearchBtn />
          <UserName />
      </header>
    </>
  )
}

export default Header
