import { DBquery } from '@/libs/db'

export default async function comment_id(req,res) {
    const {
      query: { comment_id }
    } = req
    const sql = `SELECT * FROM comments WHERE comment_id = ${comment_id}`
    const comments = await DBquery(sql)
    res.status(200).json(comments[0])
}
