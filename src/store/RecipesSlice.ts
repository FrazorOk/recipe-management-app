import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { IRecipe, IUser } from '../types/ISlices';

interface IInitState {
	homeRecipes: IRecipe;
}

const initialState: IInitState = {
	homeRecipes: {
		id: '',
		description: '',
		img: '',
		instruction: '',
		time: '',
		title: '',
		ingredients: [
			{
				amount: '',
				ingredient: '',
			},
		],
	},
};

export const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		setRecipes(state, action: PayloadAction<IRecipe>) {
			state.homeRecipes = action.payload;
		},
	},
});

export default recipesSlice.reducer;
