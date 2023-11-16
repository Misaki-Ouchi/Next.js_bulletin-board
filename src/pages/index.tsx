import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/base/Layout'
import RecentTitles from '@/components/main_parts/RecentTitles'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextApp like todoEba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <RecentTitles />
      </Layout>
    </>
  )
}

export default Home
