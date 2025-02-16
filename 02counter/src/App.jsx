import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  let [counter, setCounter] = useState(15);

  // let counter=15;

  const addValue=()=>{
    if(counter>=20){
      return
    }
        counter=counter+1;
        setCounter(counter);
  }

  const decreaseValue=()=>{
    if(counter<=0){
      return;
    }
    setCounter(counter-1);
  }
  
  return (
    
    <>
      <h1>chai or react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>add value {counter}</button>
      <br/>
      <button onClick={decreaseValue}>decrease value {counter}</button>
    </>
  )
}

export default App
