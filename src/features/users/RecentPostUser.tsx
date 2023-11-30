import useFetch from '@/features/hooks/getAPI/useFetch'

export default function RecentPostUser({ resistUser, recentPostUserId }) {
  let recentPostUser = useFetch(`/users/${recentPostUserId}`)

  if (recentPostUser.isLoading) {
    return <p>Loading...</p>
  }
  if (recentPostUser.error) {
    return <p>Error occurred.</p>
  }

  return (
    <>
      {recentPostUserId
        ? { recentPostUser }
        : { resistUser }
      }
    </>
  )
}
