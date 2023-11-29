import { useEffect, useState } from 'react'
import LogoutButton from '@/features/users/LogoutButton'
import Link from 'next/link'

const UserName = () => {
  const [user, setUser] = useState()
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    let persona = localStorage.getItem('user')
    if (persona) {
      setUser(JSON.parse(persona)[0])
    }
  }, [])

  const handleClick = () => {
    setIsShow(!isShow)
  }

  if (!user) {
    return (
      <div className='userInfo'>
        <Link className="userName" href={'/'}>ログイン</Link>
      </div>
    )
  }

  return (
    <div className='userInfo'>
      <button
        className="userName"
        onClick={handleClick}
      >
        {user.user_name}
      </button>
      {isShow && (
        <div className='userMenu bg-yellow-400'>
          <LogoutButton />
        </div>
      )}
    </div>
  )
}
export default UserName
