import { DBquery } from '@/libs/db'

export default async function title_id(req,res) {
  const params = req.query.params
  const title_id = params[0]

  // コメント投稿時の最新投稿日時を更新
  if (req.method === 'POST') {
    const recentPost = req.body.created_at
    const sql = `UPDATE titles SET
    recent_post = "${recentPost}"
    WHERE title_id = "${title_id}"
    `
    const postedTitles = await DBquery(sql)
    console.log(recentPost)
    res.status(200).json(postedTitles[0].insertId)
  }

}
