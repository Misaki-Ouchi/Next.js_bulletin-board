type StringToArrayProps = {
  str: string
}

const StringToArray = ({ str }: StringToArrayProps) => {
  const characters = Array.from(str)
  return (
    <div>
      {characters.map((char, i) => (
        <div key={i}>{char}</div>
      ))}
    </div>
  )
}

export default StringToArray
