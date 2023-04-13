import React from 'react'
import {useState} from 'react'

const Counter = () => {
    const [counti,setCount] = useState(0)
    
function IncreaseBtn(){
    setCount(counti + 1) 
}
function decreaseBtn(){
    setCount(counti -1)    
}
function resetBtn (){
    setCount(0) 
}
  return (
    <div>
      <h2>{counti}</h2>

      <div>
        <button onClick={decreaseBtn}>decrease</button>
        <button onClick={resetBtn}>reset</button>
        <button onClick={IncreaseBtn}>increase</button>
      </div>
    </div>
    
  )
}

export default Counter
