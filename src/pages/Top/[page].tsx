import type { NextPage } from 'next'
import Layout from '@/components/base/Layout'
import RecentTitleArea from '@/features/titles/RecentTitleArea'

const Top: NextPage = () => {
  return (
    <>
      <Layout>
        <RecentTitleArea />
      </Layout>
    </>
  )
}

export default Top
