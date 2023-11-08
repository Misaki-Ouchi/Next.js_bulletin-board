import { useEffect, useState } from "react";

type User = {
  name: string
  token: string
}

type Props = {
  user: User
}

const Login = ({ user }: Props) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
    const storedUser = JSON.parse(localStorage.getItem('user') || '')
    if (storedUser && storedUser.token) {
      setIsLogged(true)
    }
  }, [user])
  
  return <div>Welcome { isLogged ? user.name : 'Guest'}</div>
}

export default Login
