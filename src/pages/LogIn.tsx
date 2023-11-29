import { useState } from 'react'
import { useRouter } from 'next/router'

const LogIn = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()
  const initialValues = {
    email: '',
    password: '',
  }
  const [formValues, setFormValues] = useState(initialValues)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleClick = (e: any) => {
    e.preventDefault()
    if (formValues.email !== '' && formValues.password !== '') {
      postUsers_login(formValues)
    }
    if (loggedIn && !error) {
      router.push({pathname:'Top/1'})
    }
  }

  const postUsers_login = async (values: object) => {
    setError(false)
    let response
    try {
      const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/users/login`,
        postData,
      )
      response = await res.json()
    }
    catch {
      setError(true)
    }
    finally {
      if (response.length > 0) {
        setLoggedIn(true)
        localStorage.setItem('user', JSON.stringify(response))
      } else {
        setError(true)
      }
    }
  }

  return (
    <div className="login">
      <div className="login_box">
        <h1
          className="mb-4 p-4 text-center text-orange-400"
        >Next掲示板</h1>
        <input
          className='mb-3 p-1 text-xs bg-blue-100 border-gray-300'
          type="text"
          name="email"
          placeholder='メールアドレス'
          onChange={handleChange}
          />
        <input
          className='mb-4 p-1 text-xs bg-blue-100 border-gray-300'
          type="text"
          name="password"
          placeholder='パスワード'
          onChange={handleChange}
        />
        {error && (
          <p className='mb-2 text-red-400 text-sm'>メールアドレスまたはパスワードが違います。</p>
        )}
        <button
          className='login_btn'
          onClick={handleClick}
        >
          ログイン
        </button>
      </div>
    </div>
  )
}

export default LogIn
