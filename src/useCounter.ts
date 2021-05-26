import {useCallback, useState} from "react"
import constate from "constate"

const useCounter = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  return {count, increment}
}

export const [AppProvider, useCount, useIncrement] = constate(
  useCounter,
  (value) => value.count,
  (value) => value.increment
)
