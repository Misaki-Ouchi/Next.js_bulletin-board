import { useEffect, useState } from 'react'
import LogoutButton from '@/features/users/LogoutButton'

const UserName = () => {
  const [user, setUser] = useState()
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    let persona = localStorage.getItem('user')
    setUser(JSON.parse(persona)[0])
  }, [])

  const handleClick = () => {
    setIsShow(!isShow)
  }

  if (!user) return

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
