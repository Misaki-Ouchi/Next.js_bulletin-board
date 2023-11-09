import useFetch from '~/features/_template/hooks/useFetch'

type User = {
  id: number
  name: string
  email: string
}

const User = ({ id }: { id: number }) => {
  const { data: user, loading, error } = useFetch<User>(`/api/user/${id}`)

  if (loading) return <div>読み込み中...</div>
  if (error) return <div>エラー：{error.message}</div>

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  )
}

export default User
