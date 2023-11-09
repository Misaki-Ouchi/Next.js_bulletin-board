import {useState} from 'react'

type Props = {
  placeholder: string
}

const InputForm = ({ placeholder }: Props) => {
  const [input, setInput] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} placeholder={placeholder} />
      <p>入力値：{input}</p>
    </div>
  )
}

export default InputForm
