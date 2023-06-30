import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../hooks/redux';
import { loginUser } from '../store/ActionCreaters';

type Inputs = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(loginUser(data.email, data.password));
	};

	return (
		<>
			Login form
			{/* <Col xs={5} className="p-4 bg-white">
				<h5 className="text-center">Login</h5>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							{...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })}
						/>
						{errors.email && <span className="text-danger">Invalid mail form</span>}
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" {...register('password', { required: true })} />
						{errors.password && <span className="text-danger">This field is required</span>}
					</Form.Group>

					<Button variant="primary" type="submit">
						Login
					</Button>
				</Form>
			</Col> */}
		</>
	);
};
export default LoginForm;
