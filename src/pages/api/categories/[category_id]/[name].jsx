import { DBquery } from '@/libs/db'

export default async function category_id(req,res) {
  //   const {
  //     query: { category_id, name }
  // } = req
  const category_id = req.query.category_id
  console.log(req.query.category_id)
    const sql = `SELECT ${name} FROM titles WHERE category_id = ${category_id}`
    const titles = await DBquery(sql)
    res.status(200).json(titles[0])
}
