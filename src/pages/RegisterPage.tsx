import { FC } from 'react';

import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../hooks/redux';
import { registerNewUser } from '../store/ActionCreaters';

import Container from '../components/UI/Container/Container';
import LoginRegisterForm, { Inputs } from '../components/LoginRegisterForm/LoginRegisterForm';
import { useRedirectIfAuth } from '../hooks/navigate';

const RegisterPage: FC = () => {
	const dispatch = useAppDispatch();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(registerNewUser(data.email, data.password));
	};

	useRedirectIfAuth();

	return (
		<div>
			<Container>
				<LoginRegisterForm onSubmit={onSubmit} title="Реєстрація" btnTitle="Зареєструвати" />
			</Container>
		</div>
	);
};
export default RegisterPage;
