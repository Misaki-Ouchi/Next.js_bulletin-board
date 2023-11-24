import { DBquery } from '@/libs/db'

export default async function user_id(req,res) {
  const params = req.query.params
  const user_id = params[0]

  if (req.method === 'GET') {
  // urlのname指定が無い場合は全取得
  let name = '*'
  if (params.length > 1) name = params[1]

  const sql = `SELECT ${name} FROM users WHERE user_id = ${user_id}`
  const users = await DBquery(sql)
  res.status(200).json(users[0])
  }

}
