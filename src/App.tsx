import React, { FC, useState, useMemo } from "react"
import { useInterval } from "react-use"
import { AppProvider, useIncrement, useCount } from "./useCounter"
import { fibonacci } from "./fibonacci"
import "./styles.css"

const ComplexComponent: FC<{ number: number }> = ({ number }) => {
  console.log("ComplexComponent render")

  const increment = useIncrement()
  const expenciveComputationsResult = useMemo(() => fibonacci(number), [number])

  return (
    <div>
      result is: {expenciveComputationsResult}
      <button onClick={increment}>increase count</button>
    </div>
  )
}

const Clock = () => {
  console.log("Clock render")

  const [now, setNow] = useState(Date.now())
  useInterval(() => {
    setNow(Date.now())
  }, 1000)

  return (
    <h1>
      {new Intl.DateTimeFormat("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(now)}
    </h1>
  )
}

const Count = () => {
  console.log("Count render")

  const count = useCount()

  return <div>You clicked {count} times</div>
}

const OtherComponent = () => {
  console.log("OtherComponent")
  return <div>OtherComponent</div>
}

export default function App() {
  return (
    <AppProvider>
      <h1>Improve perf & reduce rendres count</h1>
      <p>Using current tech stack, improve performance using various react optimizations techniques</p>

      <hr style={{ marginBottom: 24 }} />

      <ComplexComponent number={38} />
      <Clock />
      <Count />
      <OtherComponent />
    </AppProvider>
  )
}
