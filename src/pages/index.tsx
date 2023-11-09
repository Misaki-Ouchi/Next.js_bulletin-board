import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '~/components/base/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextApp like todoEba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout />
    </>
  )
}

export default Home
