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
        className='logout_button'
        onClick={handleClick}
      >
        ログアウト
      </button>
    </>
  )
}
export default LogoutButton
