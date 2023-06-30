import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReduser from './UserSlice';

let rootReducer = combineReducers({
	userReduser,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
