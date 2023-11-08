import { useEffect, useState } from "react";

type Props = {
  initialKey: string
  initialValue: string
}

const StorageExample = ({ initialKey, initialValue }: Props) => {
  const [storageValue, setStorageValue] = useState<string | null>(null)

  useEffect(() => {
    localStorage.setItem(initialKey, initialValue)
    const storedValue = localStorage.getItem(initialKey)
    setStorageValue(storedValue)
  }, [initialKey, initialValue])

  return <div>Stored Value: {storageValue}</div>
}

export default StorageExample
