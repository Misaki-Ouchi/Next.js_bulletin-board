import type { NextApiRequest, NextApiResponse } from 'next'
import { DBquery } from '@/libs/db'
import useTimeFunc from '@/features/hooks/getTime/useTimeFunc'

export default async function recentComments_per_title(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const sql = `
    SELECT
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
    `
    const titleIdAndRecentPost = await DBquery(sql)
    res.status(200).json(titleIdAndRecentPost[0])
  }
}
