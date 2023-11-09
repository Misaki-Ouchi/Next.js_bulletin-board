import {useState} from 'react'

type PersonProps = {
  name: string
  age: number
}

const PersonsUpdate = () => {
  const [person, setPerson] = useState<PersonProps>({ name: 'John', age: 20 })

  const updateName = () => {
    setPerson((prevPerson) => ({ ...prevPerson, name: 'Jane' }))
  }

  const updateAge = () => {
    setPerson((prevPerson) => ({ ...prevPerson, age: 30}))
  }

  return (
    <div>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAge}>Update Age</button>
    </div>
  )
}

export default PersonsUpdate
