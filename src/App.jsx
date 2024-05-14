import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/Reducers/counterSlice';

const App = () => {
  const dispatch = useDispatch();

  const {value }= useSelector((state) =>  state.counter);

  
  const incrementHandler = () => {
    dispatch(increment(value + 1));
  }

  const decrementHandler = () => {
    dispatch(increment(value - 1));
  }

  return (
    <div className='mt-10 px-10'>
      <h1 className='text-3xl m-10'>{value}</h1>
      <button onClick={incrementHandler} className='rounded bg-red-300 py-2 px-4'>Increment Value</button>
      <button onClick={decrementHandler} className='rounded bg-red-300 py-2 px-4'>Decrement Value</button>
    </div>
  );
}

export default App;



// action is always dispatch