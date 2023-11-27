import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'
import useTimeFunc from '@/features/hooks/getTime/useTimeFunc'

export default async function titles(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    // // 取得数の制限
    // const fromNum = req.body.fromNum
    // const num = req.body.num
    // let limit = ''
    // if (fromNum && num ) limit = `limit ${fromNum}, ${num}`
    // const sql = `SELECT * FROM titles ORDER BY recent_post DESC ${limit}`
    const sql = `SELECT * FROM titles`
    const titles = await DBquery(sql)
    res.status(200).json(titles[0])
  }

  if (req.method === 'POST') {
    const titleValues = req.body
    titleValues.created_at = useTimeFunc()
    const sql = `INSERT INTO titles (
        title_name,
        category_id,
        user_id,
        outline,
        created_at
      )
      VALUES (
        "${titleValues.title_name}",
        "${titleValues.category_id}",
        "${titleValues.user_id}",
        "${titleValues.outline}",
        "${titleValues.created_at}"
      )`
    const addTitles = await DBquery(sql)
    res.status(200).json(addTitles[0].insertId)
  }
}
