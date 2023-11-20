import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'

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
    const sql = `SELECT * FROM titles ORDER BY recent_post DESC`
    const titles = await DBquery(sql)
    res.status(200).json(titles[0])
  }

  if (req.method === 'POST') {
    const titleValues = req.body
    const sql = `INSERT INTO titles (
        title_name,
        category_id,
        outline,
        created_at,
        recent_post
      )
      VALUES (
        "${titleValues.title_name}",
        "${titleValues.category_id}",
        "${titleValues.outline}",
        "${titleValues.created_at}",
        "${titleValues.created_at}"
      )`
    const addTitles = await DBquery(sql)
    console.log(addTitles[0])
    res.status(200).json(addTitles[0].insertId)
  }
}
