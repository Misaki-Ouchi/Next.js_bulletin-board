import { useCallback } from "react"

const useTimeFunc = () => {

    const days = ['日', '月', '火', '水', '木', '金', '土']

    // 関数実行時の日付と時間
    const dt = new Date()
    const year = dt.getFullYear()
    const month = dt.getMonth() + 1
    const date = dt.getDate()
    const day = days[dt.getDay()]
    const hour = dt.getHours()
    let minute = dt.getMinutes()
    if (minute < 10) minute = '0' + minute

    // 〇年〇月〇日（曜日）△時△分
    const timeData = `${year}年${month}月${date}日(${day})${hour}時${minute}分`

  return timeData

}

export default useTimeFunc
