import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
}


const counterSlice = createSlice({
	name : "Counter",
	initialState,
	reducers: {
		increment : (state , action) =>{
			console.log(state);
			console.log(action);
			state.value = action.payload;
		}
	}

})

export default counterSlice.reducer;
export const {increment} = counterSlice.actions;