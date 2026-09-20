import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  const myobj = {
    username: "Nilmani",
    age: 23
  }

  let newarr = [1, 2, 3]

  return (
    <>
      <h1 className="p-4 text-black bg-green-400 rounded-xl">
        TAILWIND TEST
      </h1>

      <Card
        username="Mani bhai"
        btnText="click me"
      />

      <Card
        username="Nilmani"
        btnText="click me"
      />
   
    </>
  )
}

export default App