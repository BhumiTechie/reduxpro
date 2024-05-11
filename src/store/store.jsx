import { configureStore} from '@reduxjs/toolkit';
import counterSlice from './Reducers/counterSlice';

export const store = configureStore ({
	reducer: {
		couterReducer : counterSlice,
	},
})

export default store;