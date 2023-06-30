import { FC } from 'react';

import LoginForm from '../components/LoginForm';
import Container from '../components/UI/Container/Container';
import LoginRegisterForm from '../components/LoginRegisterForm/LoginRegisterForm';

const LoginPage: FC = () => {
	return (
		<Container>
			<LoginRegisterForm />
		</Container>
	);
};
export default LoginPage;
