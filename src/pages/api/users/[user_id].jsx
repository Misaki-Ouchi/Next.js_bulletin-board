import { DBquery } from '@/libs/db'

export default async function users_tid(req,res) {

  if (req.method === 'GET') {
    const {
      query: { user_id }
    } = req
    const sql = `SELECT * FROM users WHERE user_id = ${title_id}`
    const users = await DBquery(sql)
    res.status(200).json(users[0][0])
  }
}
