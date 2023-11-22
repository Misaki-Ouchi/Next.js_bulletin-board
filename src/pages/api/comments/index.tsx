import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'
import useTimeFunc from '@/features/hooks/getTime/useTimeFunc'

export default async function comments(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'GET') {
    const sql = 'SELECT * FROM comments ORDER BY created_at DESC;'
    const comments = await DBquery(sql)
    res.status(200).json(comments[0])
  }

  if (req.method === 'POST') {
    const commentValues = req.body
    commentValues.created_at = useTimeFunc()
    const sql = `INSERT INTO comments (
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
