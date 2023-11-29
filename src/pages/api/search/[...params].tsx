import { DBquery } from '@/libs/db'

export default async function searchFromTitle_name(req, res) {
  const params = req.query.params
  const columnName = params[0]
  const word = params[1]

  if (req.method === 'GET') {
    let sql
    if (columnName === 'title_name') {
      sql = `
        SELECT
          titles.title_id,
          titles.title_name,
          titles.created_at,
          users.user_name
        FROM
          titles
        INNER JOIN
          users
        ON
          users.user_id = titles.user_id
        WHERE
          ${columnName}
        LIKE
          "%${word}%"
      `
    }
    if (columnName === 'outline') {
      sql = `
        SELECT
          titles.title_id,
          titles.title_name,
          titles.outline,
          titles.created_at,
          users.user_name
        FROM
          titles
        INNER JOIN
          users
        ON
          users.user_id = titles.user_id
        WHERE
          ${columnName}
        LIKE
          "%${word}%"
      `
    }
    if (columnName === 'comment_content') {
      sql = `
        SELECT
          titles.title_id,
          titles.title_name,
          comments.comment_content,
          comments.created_at,
          users.user_name
        FROM
          comments
        INNER JOIN
          titles
        ON
          titles.title_id = comments.title_id
        INNER JOIN
          users
        ON
          users.user_id = comments.user_id
        WHERE
          ${columnName}
        LIKE
          "%${word}%"
      `
    }
    const lists = await DBquery(sql)
    res.status(200).json(lists[0])
  }
}
