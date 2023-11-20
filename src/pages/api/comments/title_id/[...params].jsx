import { DBquery } from '@/libs/db'

export default async function comment_title_id(req,res) {
  const params = req.query.params
  const title_id = params[0]

  // urlのrecentの指定が無い場合は全取得
  let recent = ''
  if (params.length > 1) recent = 'limit 1'

  const sql = `SELECT * FROM comments WHERE title_id = ${title_id} ORDER BY created_at DESC ${recent}`
  const comments = await DBquery(sql)
  res.status(200).json(comments[0])
}
