type NumberGridProps = {
  length: number
}

const NumberGrid = ({ length }: NumberGridProps) => {
  const numbers = Array.from({ length }, (_, i) => i + 1)
  return (
    <div>
      {numbers.map((num) => (
        <div key={num}>{num}</div>
      ))}
    </div>
  )
}

export default NumberGrid
