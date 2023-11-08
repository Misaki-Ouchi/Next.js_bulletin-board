import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='bg-gray-300'>
      <Head>
        <title>NextApp like todoEba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="p-10 font-bold text-red-500">
          Hello Tailwind CSS!
        </div>
      </main>
    </div>
  )
}

export default Home
