import type { NextPage } from 'next'
import Head from 'next/head'
import Counter from 'components/Counter'
import UserList from 'components/UserList'
import NumberGrid from 'components/NumberGrid'
import StringToArray from 'components/StringToArray'
import InputForm from 'components/InputForm'
import MultipleInputForm from 'components/MultipleInputForm'
import PersonsUpdate from 'components/PersonsUpdate'
import StorageExample from 'components/StorageExample'
import Login from 'components/Login'
import IndexPage from 'components/IndexPage'
import ButtonComponent from 'components/ButtonComponent'
import WindowSizeDisplay from 'components/WindowSizeDisplay'
import CalculateSum from 'components/CalculateSum'
import CalculateHome from 'components/CalculateHome'
import Notification from 'components/Notification'

const users = [
  { id: 1, name: 'Taro' },
  { id: 2, name: 'Jiro' },
  { id: 3, name: 'Saburo' }
]


const Home: NextPage = () => {
  const yaha = () => {
    console.log('yaha')
  }

  return (
    <div className='bg-gray-300 p-10'>
      <Head>
        <title>NextApp like todoEba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Counter initialCount={0} />
        <UserList users={users} />
        <NumberGrid length={5} />
        <StringToArray str={"プルャ"} />
        <InputForm placeholder={"プルャ"} />
        <MultipleInputForm />
        <PersonsUpdate />
        <StorageExample initialKey='name' initialValue='うさぎ' />
        <Login user={{ name: 'うさぎ', token: "プルヤ" }} />
        <IndexPage message='ヤハ'/>
        <ButtonComponent onClick={yaha} />
        <WindowSizeDisplay />
        <CalculateSum values={[1,2,3,4,5]} />
        <CalculateHome />
        <Notification message={'ヤハー'} type={'success'} />

        <div className="pt-10 font-bold text-red-500">
          Hello Tailwind CSS!
        </div>
      </main>
    </div>
  )
}

export default Home
