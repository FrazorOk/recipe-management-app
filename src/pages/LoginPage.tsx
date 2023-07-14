import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../hooks/redux';

import { loginUser } from '../store/ActionCreaters';

import Container from '../components/UI/Container/Container';
import LoginRegisterForm, { Inputs } from '../components/LoginRegisterForm/LoginRegisterForm';
import { useRedirectIfAuth } from '../hooks/navigate';

const LoginPage: FC = () => {
	const dispatch = useAppDispatch();
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(loginUser(data.email, data.password));
	};

	useRedirectIfAuth();

	return (
		<div>
			<Container>
				<LoginRegisterForm onSubmit={onSubmit} title="Вхід" btnTitle="Увійти" />
			</Container>
		</div>
	);
};
export default LoginPage;
