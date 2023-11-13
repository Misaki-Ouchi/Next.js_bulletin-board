import { query } from 'libs/db'

export default async function handler(req, res) {
  if (req.method === 'GET') {

    const products = await query({
      query: 'SELECT * FROM categories',
      value:[]
    })

    res.status(200).json({categories: []})
  }
}
