import React, { useState } from 'react'

function useCounter(initialValue) {
    const[counter,setCounter] = useState(initialValue);
    const increment=()=>{
        return setCounter(counter + 1)
    }
    const decrement = () =>{
        return setCounter(counter - 1)
    }
    const reset = () =>{
        return setCounter(0);
    }
  return [counter,increment,decrement,reset]
}

export default useCounter