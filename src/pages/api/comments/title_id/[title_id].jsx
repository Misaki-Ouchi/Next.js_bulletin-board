import { DBquery } from '@/libs/db'

export default async function comments_title_id(req,res) {
    const {
      query: { title_id }
    } = req
    const sql = `SELECT * FROM comments WHERE title_id = ${title_id}`
    const comments = await DBquery(sql)
    res.status(200).json(comments[0])
}
