import Counter from 'forLComponents/Counter'
import UserList from 'forLComponents/UserList'
import NumberGrid from 'forLComponents/NumberGrid'
import StringToArray from 'forLComponents/StringToArray'
import InputForm from 'forLComponents/InputForm'
import MultipleInputForm from 'forLComponents/MultipleInputForm'
import PersonsUpdate from 'forLComponents/PersonsUpdate'
import StorageExample from 'forLComponents/StorageExample'
import Login from 'forLComponents/Login'
import IndexPage from 'forLComponents/IndexPage'
import ButtonComponent from 'forLComponents/ButtonComponent'
import WindowSizeDisplay from 'forLComponents/WindowSizeDisplay'
import CalculateSum from 'forLComponents/CalculateSum'
import CalculateHome from 'forLComponents/CalculateHome'
import Notification from 'forLComponents/Notification'
// import LifeCycle from 'components/LifeCycle'
// import ApiLifeCycle from 'components/ApiLifeCycle'
import Link from 'next/link'

const users = [
  { id: 1, name: 'Taro' },
  { id: 2, name: 'Jiro' },
  { id: 3, name: 'Saburo' }
]


const Learning = () => {
  const yaha = () => {
    console.log('yaha')
  }

  return (
    <div className='bg-gray-300 p-10'>
      <div>
        <Link href="/" className='bg-cyan-400 btn hover:bg-red-500'>ホームへ</Link>
        <Counter initialCount={0} />
        <UserList users={users} />
        <NumberGrid length={5} />
        <StringToArray str={"プルャ"} />
        <InputForm placeholder={"プルャ"} />
        <MultipleInputForm />
        <PersonsUpdate />
        <StorageExample initialKey='name' initialValue='うさぎ' />
        <Login user={{ name: 'うさぎ', token: "プルヤ" }} />
        {/* <IndexPage message='ヤハ'/> */}
        <ButtonComponent onClick={yaha} />
        <WindowSizeDisplay />
        <CalculateSum values={[1,2,3,4,5]} />
        <CalculateHome />
        <Notification message={'ヤハー'} type={'success'} />
        {/* <LifeCycle /> */}
        {/* <ApiLifeCycle /> */}

        <div className="pt-10 font-bold text-red-500">
          Hello Tailwind CSS!
        </div>
      </div>
    </div>
  )
}

export default Learning
