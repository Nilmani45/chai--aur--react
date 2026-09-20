import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)

  const addvalue = () => {
    setcounter(counter + 1)
  }

  const removevalue = () => {
    setcounter(counter - 1)
  }

  return (
    <>
      <h1>kya chal rha hai react me bro</h1>

      <h2>counter value: {counter}</h2>

      <br />

      <button onClick={addvalue}>
        Add value {counter}
      </button>

      <button onClick={removevalue}>
        Remove value {counter}
      </button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App