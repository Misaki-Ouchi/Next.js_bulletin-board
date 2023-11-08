type User = {
  id: number
  name: string
}

type Props = {
  users: User[]
}

const UserList = ({ users }: Props) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList
