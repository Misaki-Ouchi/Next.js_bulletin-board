import { useState } from "react";

type CounterProps = {
  initialCount: number
}

// 再帰関数
// const countDown = (num: number): void => {
//   console.log(num)
//   if (num > 0) {
//     countDown(num-1)
//   }
// }
// console.log(countDown(10))

// フィボナッチ数列
// const fibonacci = (n: number): number => {
//   if (n <= 1) {
//     return n
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2)
//   }
// }
// console.log(fibonacci(10))


// オブジェクトリテラル
// const arr = Array.from({ length: 5 }, (v, i) => i * i)
// console.log(arr)

// const arrayLike = { length: 2, 0: 'a', 1: 'b' }
// const arr = Array.from(arrayLike)
// console.log(arr)

const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter
