import { useState } from 'react'

const MultipleInputForm = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} placeholder='名前'/>
      <input type="text" value={age} onChange={handleAgeChange} placeholder='年齢'/>
      <p>名前：{name}</p>
      <p>年齢：{age}</p>
    </div>
  )
}

export default MultipleInputForm
