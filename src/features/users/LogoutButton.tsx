import { useRouter } from 'next/router'

const LogoutButton = () => {
  const router = useRouter()

  const handleClick = () => {
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <>
      <button
        className='btn'
        onClick={handleClick}
      >ログアウト</button>
    </>
  )
}
export default LogoutButton
