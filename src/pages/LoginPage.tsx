import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

import { loginUser } from '../store/ActionCreaters';

import { MY_RECIPES } from '../utils/consts';

import Container from '../components/UI/Container/Container';
import LoginRegisterForm, { Inputs } from '../components/LoginRegisterForm/LoginRegisterForm';

const LoginPage: FC = () => {
	const dispatch = useAppDispatch();
	let auth = useAppSelector((state) => state.userReduser.auth);

	let navigate = useNavigate();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(loginUser(data.email, data.password));
	};

	useEffect(() => {
		if (auth) {
			navigate(MY_RECIPES);
		}
	}, [auth]);

	return (
		<Container>
			<LoginRegisterForm onSubmit={onSubmit} title="Вхід" btnTitle="Увійти" />
		</Container>
	);
};
export default LoginPage;
