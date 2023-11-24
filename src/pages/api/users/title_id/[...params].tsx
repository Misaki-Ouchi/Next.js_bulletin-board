import { DBquery } from '@/libs/db'

export default async function user_From_title_id(req, res) {
  const params = req.query.params
  const title_id = params[0]

  if (req.method === 'GET') {
    // urlのname指定が無い場合は全取得
    let name = `
      users.user_id,
      users.user_name,
      users.email,
      users.password
    `
    if (params.length > 1) name = 'users.' + params[1]
    
    const sql = `
    SELECT ${name}
    FROM titles
    INNER JOIN users
    ON users.user_id = titles.user_id
    WHERE titles.title_id = ${title_id}
    `
    const userName = await DBquery(sql)
    res.status(200).json(userName[0])
  }
}
