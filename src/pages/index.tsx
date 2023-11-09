import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextApp like todoEba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/Learning" className='p-1 bg-yellow-400 hover:bg-yellow-600'>学習用ページへ</Link>
      </main>
    </>
  )
}

export default Home
