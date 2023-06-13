let SET_RCIPES = 'recipes-reducer/SET_RCIPES';

const initState = {};

const recipesReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_RCIPES:
			return {
				...state,
			};

		default:
			return state;
	}
};

export const setRecipes = (recipes) => ({
	type: SET_RCIPES,
	recipes,
});

export default recipesReducer;
