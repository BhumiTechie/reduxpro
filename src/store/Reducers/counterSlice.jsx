import { createSlice } from "@reduxjs/toolkit";

const initialState ={
	value: 0,
}


const counterSlice = createSlice({
	name : "Counter",
	initialState,
	reducers: {}
})

export default counterSlice.reducer;