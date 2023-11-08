import React, {useMemo} from "react";

type Props = {
  values: number[]
}

const CalculateSum = ({ values }: Props) => {
  const sum = useMemo(() => {
    return values.reduce((prev, curr) => prev + curr, 0)
  }, [values])
  
  return <div>合計：{sum}</div>
}

export default CalculateSum


// useMemoは計算の結果をメモ化するためのものであり、
// 副作用（API 呼び出しやイベントハンドラなど）を含む処理には
// 使用すべきではありません。
// 副作用を含む処理にはuseEffectを使うべきです

// 計算のコストがそれほど高くない場合、
// あるいは計算が頻繁に行われない場合は、
// useMemoを使わない方がパフォーマンスが良い場合もあります

// あまりにも頻繁にuseMemoを使用しすぎると、
// メモ化自体のオーバーヘッドが
// パフォーマンスに影響を及ぼすこともあるので注意が必要


// useMemoは特に以下のようなシーンでよく使われます

// 大規模な配列やオブジェクトの操作
// const sortedList = useMemo(() => {
  // return list.sort((a, b) => a - b)
// }, [list])

// 複雑な計算の結果
// const fib = useMemo(() => {
//   return calculateFibonacci(number)
// }, [number])

// 参照等価性を保つ必要があるオブジェクトや関数
// （子コンポーネントにpropsが渡されるたびに再レンダリングされるのを防ぐ）
// const handleClick = useCallback(
//   (event) => {
//     // ...
//   },
//   [dependency]
// )

// // or

// const configObject = useMemo(() => {
//   return { foo: 'bar', baz: 'qux' }
// }, [dependency])


// const SearchResults = ({ query, data }: Props) => {
//   const results = useMemo(() => {
//     // data が大量で filter の計算コストが高い場合に有効
//     return data.filter((item) => item.includes(query))
//   }, [query, data])

//   // 結果のレンダリング
//   return (
//     <div>
//       {results.map((result) => (
//         <div key={result}>{result}</div>
//       ))}
//     </div>
//   )
// }

// サーバーサイドで検索結果をフィルタリングし、
// クライアントサイドにはすでにフィルタリングされた結果を
// 送信するという設計もあります。
// この場合、useMemoを使用する必要はありません。
