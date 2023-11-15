import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'

export default async function users(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'GET') {
    const sql = 'SELECT * FROM users'
    const users = await DBquery(sql)
    res.status(200).json(users[0])
  }

  if (req.method === 'POST') {
    const userValues = req.body
    const sql = `INSERT INTO users (
        name,
        email,
        password
      )
      VALUES (
        "${userValues.name}",
        "${userValues.email}",
        "${userValues.password}"
      )`
    const addUsers = await DBquery(sql)
    res.status(200).json(addUsers[0])
  }
}
