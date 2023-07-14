import { useEffect } from 'react';
import { useAppSelector } from './redux';
import { useNavigate } from 'react-router-dom';

import { HOME_ROUTE, MY_RECIPES } from '../utils/consts';

export const useRedirectIfNotAuth = () => {
	let auth = useAppSelector((state) => state.userReduser.auth);
	let navigate = useNavigate();

	useEffect(() => {
		if (!auth) {
			navigate(HOME_ROUTE);
		}
	}, [auth]);
};

export const useRedirectIfAuth = () => {
	let auth = useAppSelector((state) => state.userReduser.auth);
	let navigate = useNavigate();

	useEffect(() => {
		if (auth) {
			navigate(MY_RECIPES);
		}
	}, [auth]);
};
