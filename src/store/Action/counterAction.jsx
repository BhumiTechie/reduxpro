export {increment , decrement, increment2} from '../Reducers/counterSlice'


export const asyncincrement2 = (value)=> async (dispatch, getState)=>{
    try {
       setTimeout(()=>{
        dispatch(increment2(value));
       },1000)
    } catch (error) {
         console.log(error)
    }
}

const counterAction = () => {
  return (
	<div>counterAction</div>
  )
}

export default counterAction