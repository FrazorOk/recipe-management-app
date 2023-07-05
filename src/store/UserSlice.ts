import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/ISlices';

const logout = createAction('auth/logout');

interface IInitState {
	dataUser: IUser;
	auth: boolean;
}

const initialState: IInitState = {
	dataUser: {
		id: '',
		email: '',
		savedRecipes: [],
		createdRecipes: [],
	},
	auth: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUser>) {
			state.dataUser = action.payload;
		},
		toggleAuth(state, action: PayloadAction<boolean>) {
			state.auth = action.payload;
		},
		reset: () => {
			return initialState;
		},
	},
});

export default userSlice.reducer;
