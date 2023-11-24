import type { NextPage } from 'next'
import Layout from '@/components/base/Layout'
import RecentTitles from '@/features/titles/RecentTitles'

const Top: NextPage = () => {

  return (
    <>
        <Layout>
          <RecentTitles />
        </Layout>
    </>
  )
}

export default Top
