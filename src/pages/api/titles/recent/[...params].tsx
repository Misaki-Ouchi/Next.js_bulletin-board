import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'

export default async function recentComments_per_title(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const page = req.query.params[0]
  const count = req.query.params[1]

  if (req.method === 'GET') {
    const sql = `
    SELECT * FROM
        (SELECT
              newList.title_id,
              titles.category_id,
              newList.created_at
              FROM
                  (
                  SELECT
                      ROW_NUMBER() OVER (
                          PARTITION BY
                              title_id
                          ORDER BY
                              created_at DESC
                      ) AS recentRank,
                      title_id,
              		    created_at
                  FROM
                      comments
                  ) AS newList
            INNER JOIN titles
            ON titles.title_id = newList.title_id
            WHERE
                newList.recentRank = 1
        UNION
        SELECT
        	titles.title_id,
        	titles.category_id,
        	titles.created_at
        FROM
        	titles
        WHERE
        	titles.title_id
        	NOT IN (SELECT comments.title_id FROM comments))
        as unionList
    ORDER BY unionList.created_at DESC
    LIMIT ${count} OFFSET ${(page - 1) * 10 + 1}
    `
    const titleIdAndRecentPost = await DBquery(sql)
    res.status(200).json(titleIdAndRecentPost[0])
  }
}
