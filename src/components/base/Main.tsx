import Link from 'next/link'
import { useEffect, useState } from 'react'

const Main = ({ children }) => {
  
  const [user, setUser] = useState()
  useEffect(() => {
    let persona = localStorage.getItem('user')
    setUser(JSON.parse(persona))
  },[])

  if (!user) {
    return (
      <div className="not_login_message">
        <span>ログインしてください。</span>
        <Link
          href="/"
          className='ml-2 text-blue-500'
        >→ログイン画面へ</Link>
      </div>
    )
  }

  return (
    <>
      <main className="container">
        <div className="container_box mb-4">
          {children}
        </div>
      </main>
    </>
  )
}

export default Main
