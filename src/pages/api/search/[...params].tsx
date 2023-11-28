import { DBquery } from '@/libs/db'

export default async function searchFromTitle_name(req,res) {
  const params = req.query.params
  const tableName = params[0]
  const columnName = params[1]
  const word = params[2]

  if (req.method === 'GET') {
    const sql = `SELECT ${tableName} FROM titles WHERE ${columnName} LIKE "%${word}%"`
    const lists = await DBquery(sql)
    res.status(200).json(lists[0])
  }

}
