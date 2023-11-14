import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'

export default async function comments(req:NextApiRequest, res:NextApiResponse) {
    const sql = 'SELECT * FROM comments;'
    const comments = await DBquery(sql)

    res.status(200).json({ comments: comments })
}
