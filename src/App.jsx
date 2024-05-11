import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/Reducers/counterSlice';

const App = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counterReducer.value); // Accessing 'value' property correctly
  
  const incrementHandler = () => {
    dispatch(increment(value + 1));
  }

  return (
    <div className='mt-10 p-10'>
      <h1 className='text-3xl'>{value}</h1>
      <button onClick={incrementHandler} className='rounded bg-red-300 py-2 px-4'>Increment Value</button>
    </div>
  );
}

export default App;
