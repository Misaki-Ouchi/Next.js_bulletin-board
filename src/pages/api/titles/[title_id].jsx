import { DBquery } from '@/libs/db'

export default async function title_id(req,res) {
    const {
      query: { title_id }
    } = req
    const sql = `SELECT * FROM titles WHERE title_id = ${title_id}`
    const titles = await DBquery(sql)
    res.status(200).json(titles[0])
}
