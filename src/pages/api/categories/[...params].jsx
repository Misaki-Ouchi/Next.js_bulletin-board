import { DBquery } from '@/libs/db'

export default async function category_id(req,res) {
  const params = req.query.params
  const category_id = params[0]

  // urlのname指定が無い場合は全取得
  let name = '*'
  if (params.length > 1) name = params[1]

  const sql = `SELECT ${name} FROM categories WHERE category_id = ${category_id}`
  const titles = await DBquery(sql)
  res.status(200).json(titles[0])
}

