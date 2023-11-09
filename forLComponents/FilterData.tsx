import { useMemo } from "react";

type Data = {
  id: number
  value: number
}

type Props = {
  data: Data[]
  threshold: number
}

const FilterData = ({ data, threshold }: Props) => {
  const filteredData = useMemo(() => {
    return data.filter((item) => item.value > threshold)
  }, [data, threshold])

  return (
    <div>
      {filteredData.map((item) => (
        <div key={item.id}>{item.value}</div>
      ))}
    </div>
  )
}

export default FilterData
