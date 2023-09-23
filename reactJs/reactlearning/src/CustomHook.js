import React from 'react'
import useCounter from './useCounter';
const CustomHook = () => {
  const[counter , increment ,decrement, reset] = useCounter(0);
  return (
    <div><h2>{counter}</h2>
    <button onClick={increment}> Increment </button>
    <button onClick={decrement}> Decrement </button>
    <button onClick={reset}> Reset </button></div>
  )
}

export default CustomHook