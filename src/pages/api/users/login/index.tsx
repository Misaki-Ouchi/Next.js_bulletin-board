import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'

export default async function users_login(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {
    const loginValues = req.body
    const sql = `SELECT * FROM users WHERE email = "${loginValues.email}" AND password = "${loginValues.password}"`
    const users = await DBquery(sql)
    res.status(200).json(users[0])
  }
}
