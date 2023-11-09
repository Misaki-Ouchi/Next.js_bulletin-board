import {useMemo, useState} from 'react'
import CalculateSum from './CalculateSum'

const CalculateHome = () => {
  const [values, setValues] = useState<number[]>([1,2,3,4,5])

  const handleShuffle = () => {
    setValues(values.sort(()=> Math.random() - 0.5))
    // Math.random()関数は、0.0以上1.0未満の値をランダムに返します。
    // つまり、Math.random() - 0.5は、-0.5以上0.5未満のランダムな値を返します。
    // →比較関数は負数と正数のいずれかをランダムに等確率で返す

    // 比較関数にランダムな値があるのは良くないので↓のFisher-Yates法が好ましい
    // const shuffleArr = (src: number[]): number[] => {
    //   const dst = src.slice();
    //   let i = src.length;
    //   while (i > 0) {
    //     i--;
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [dst[i], dst[j]] = [dst[j], dst[i]];
    //   }
    //   return dst;
    // };
  }

  return (
    <div>
      <button onClick={handleShuffle}>配列をシャッフル</button>
      <CalculateSum values={values} />
    </div>
  )
}

export default CalculateHome
