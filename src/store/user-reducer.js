let SET_USER = 'user-reducer/SET_USER';

const initState = {};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export const setUser = (user) => ({
	type: SET_USER,
	user,
});

export default userReducer;
