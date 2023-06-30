import { useForm, SubmitHandler } from 'react-hook-form';
import { registerNewUser } from '../store/ActionCreaters';
import { useAppDispatch } from '../hooks/redux';

type Inputs = {
	email: string;
	password: string;
};

const RegisterForm = () => {
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		dispatch(registerNewUser(data.email, data.password));
		console.log(data);
	};

	return (
		<div>
			Register form
			{/* <Col xs={5} className="p-4 bg-white">
				<h5 className="text-center">Registration</h5>
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
						Register
					</Button>
				</Form>
			</Col> */}
		</div>
	);
};
export default RegisterForm;
