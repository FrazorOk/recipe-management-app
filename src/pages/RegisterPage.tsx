import { FC, useEffect } from 'react';

import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { registerNewUser } from '../store/ActionCreaters';

import Container from '../components/UI/Container/Container';
import LoginRegisterForm, { Inputs } from '../components/LoginRegisterForm/LoginRegisterForm';
import { useNavigate } from 'react-router-dom';
import { MY_RECIPES } from '../utils/consts';

const RegisterPage: FC = () => {
	const dispatch = useAppDispatch();
	let auth = useAppSelector((state) => state.userReduser.auth);

	let navigate = useNavigate();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(registerNewUser(data.email, data.password));
	};

	useEffect(() => {
		if (auth) {
			navigate(MY_RECIPES);
		}
	}, [auth]);

	return (
		<Container>
			<LoginRegisterForm onSubmit={onSubmit} title="Реєстрація" btnTitle="Зареєструвати" />
		</Container>
	);
};
export default RegisterPage;
