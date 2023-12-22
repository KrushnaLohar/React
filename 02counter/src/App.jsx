import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // for update counter in web we can simply do 
  let [counter, setCounter] = useState(0)
  // let counter = 0

  const addValue = () =>{
    // console.log("Value Added: ", Math.random())
    console.log("clicked ", Math.random());
    // counter = counter + 1;
    setCounter(counter+1)
  }

  const removeValue = () => {
    if(counter >= 1) {
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>
        Add Value
      </button>
      <br/>
      <button onClick={removeValue}>
        Remove Value
      </button>
    </>
  )
}

export default App
