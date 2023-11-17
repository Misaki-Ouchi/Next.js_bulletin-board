import { DBquery } from '@/libs/db'

export default async function comment_id(req,res) {
  const params = req.query.params
  const comment_id = params[0]

  // urlのname指定が無い場合は全取得
  let name = '*'
  if (params.length > 1) name = params[1]

  const sql = `SELECT ${name} FROM comments WHERE comment_id = ${comment_id}`
  const comments = await DBquery(sql)
  res.status(200).json(comments[0])
}
