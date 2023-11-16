import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'

export default async function titles(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'GET') {
    const sql = 'SELECT * FROM titles'
    const titles = await DBquery(sql)
    res.status(200).json(titles[0])
  }

  if (req.method === 'POST') {
    const titleValues = req.body
    const sql = `INSERT INTO titles (
        title_name,
        category_id,
        outline,
        created_at
      )
      VALUES (
        "${titleValues.title_name}",
        "${titleValues.category_id}",
        "${titleValues.outline}",
        "${titleValues.created_at}"
      )`
    const addTitles = await DBquery(sql)
    res.status(200).json(addTitles[0].insertId)
  }
}
