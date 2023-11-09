import React, {useState, useEffect} from 'react'
import axios from 'axios'

type Data = {
  id: number
  title: string
}

const ApiLifeCycle = () => {
  const [data, setData] = useState<Data[]>([])

  // マウントフェーズ
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(result.data)
    }
    fetchData()

    // アンマウントフェーズ(コンポーネントが DOM から削除されるフェーズ)
    return () => {
      setData([])
    }
  }, [])

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default ApiLifeCycle
