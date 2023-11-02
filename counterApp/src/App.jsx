import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './features/counterSlice'


function App() {
  const counterValue = useSelector((state) => state.counter.initialValue);
  const dispatch = useDispatch()

  return (
    <>
      <div className='container'>
        <h1 className='title'>Increment/ Decrement Counter App</h1>
        <p className='ans'>{counterValue}</p>
        <div className='btn'>
          <button className='add' onClick={() => dispatch(increment(counterValue))}>Increment</button>
          <button className='sub' onClick={() => dispatch(decrement(counterValue))}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
