import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'GET') {
    const sql = 'SELECT * FROM comments;'
    const comments = await DBquery(sql)
    res.status(200).json(comments[0])
  }

  if (req.method === 'POST') {
    const commentValues = req.body
    const sql = `INSERT INTO titles (
        title_id,
        user_id,
        comment_content,
        created_at
      )
      VALUES (
        "${commentValues.title_id}",
        "${commentValues.user_id}",
        "${commentValues.comment_content}",
        "${commentValues.created_at}"
      )`
    const addComments = await DBquery(sql)
    res.status(200).json(addComments[0])
  }
}
