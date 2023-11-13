import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'
import { Dbquery } from '@/libs/db'

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {

    const sql = 'SELECT * FROM categories;'
    const categories = await Dbquery(sql)
    // const categories = await Dbquery({
    //   Dbquery: 'SELECT * FROM categories;',
    //   values: [],
    // })

    res.status(200).json({ categories: categories })
  }
}
