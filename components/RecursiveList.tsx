import React from 'react'

type ListData = {
  id: number
  name: string
  children?: ListData[]
}

type RecursiveListProps = {
  listData: ListData[]
}

const RecursiveList = ({ listData }: RecursiveListProps) => {
  return (
    <ul>
      {listData.map((item) => (
        <li key={item.id}>
          {item.name}
          {item.children && <RecursiveList listData={item.children} />}
        </li>
      ))}
    </ul>
  )
}

// const RecursiveList: React.VFC<RecursiveListProps> = ({ listData }) => {
//   return (
//     <ul>
//       {listData.map((data) => (
//         <li key={data.id}>
//           {data.name}
//           {data.children && <RecursiveList listData={data.children} />}
//         </li>
//       ))}
//     </ul>
//   )
// }

export default RecursiveList
