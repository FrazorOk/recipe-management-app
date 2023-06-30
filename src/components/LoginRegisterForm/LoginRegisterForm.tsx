import { FC } from 'react';
import s from './LoginRegisterForm.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';

import WhiteButton from '../UI/WhiteButton/WhiteButton';

type Inputs = {
	email: string;
	password: string;
};

const LoginRegisterForm: FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)} noValidate>
			<h3>Вхід</h3>

			<div className={s.form__group}>
				<label>Введіть вашу пошту:</label>
				<input
					type="email"
					placeholder="Enter email"
					{...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })}
				/>
				{errors.email && <span className={s.textDanger}>Невірний формат пошти</span>}
			</div>

			<div className={s.form__group}>
				<label>Введіть ваш пароль:</label>
				<input type="password" placeholder="Password" {...register('password', { required: true })} />
				{errors.password && <span className={s.textDanger}>Введіть ваш пароль</span>}
			</div>

			<WhiteButton type={'submit'}>
				<span>Увійти</span>
			</WhiteButton>
		</form>
	);
};
export default LoginRegisterForm;
