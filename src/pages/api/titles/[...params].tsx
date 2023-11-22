import { DBquery } from '@/libs/db'

export default async function title_id(req,res) {
  const params = req.query.params
  const title_id = params[0]

  if (req.method === 'GET') {
    let name = '*' // urlのname指定が無い場合は全取得
    if (params.length > 1) name = params[1] //カラム名

    const sql = `SELECT ${name} FROM titles WHERE title_id = ${title_id}`
    const titles = await DBquery(sql)
    res.status(200).json(titles[0])
  }

}
