import { DBquery } from '@/libs/db'

export default async function category_id(req,res) {
    const {
      query: { category_id }
    } = req
    const sql = `SELECT * FROM titles WHERE category_id = ${category_id}`
    const titles = await DBquery(sql)
    res.status(200).json(titles[0])
}
