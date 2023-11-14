import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'

export default async function categories(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  let message

  if (req.method === 'GET') {
    const sql = 'SELECT * FROM categories'
    const categories = await DBquery(sql)

    res.status(200).json({ categories: categories })
  }

  
  if (req.method === 'POST') {
    const categoryName = req.body.category_name
    
    const sql = `INSERT INTO categories (category_name) VALUES ("${categoryName}")`
    const addCategories = await DBquery(sql)

    if (addCategories.insertId) {
      message = 'success'
    } else {
      message = 'error'
    }

    let category = {
      category_id: addCategories.insertId,
      category_name: categoryName,
    }

    res.status(200).json({ response: { message: message, category: category } })
  }
}
