import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increasecount =()=>{
    setCount(count+1)
  }
  const decreasecount=()=>{
    setCount(count-1);
  }
  return (
    <div className='box'>
    <h1 className='head'>Simple Counter</h1>
    <h2 className='head1'>{count}</h2>
    <div className='buttons'>
    <button onClick={()=>increasecount()} className='btn1'>Increase</button>
    <button onClick={()=>{setCount(0)}} className='btn2'>Reset</button>
    <button onClick={()=>{decreasecount()}} className='btn3'>Decrease</button>
    </div>
    </div>
  )
}

export default App
