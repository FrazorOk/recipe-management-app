import { FC } from 'react';
import s from './LoginRegisterForm.module.scss';

import { useForm, SubmitHandler } from 'react-hook-form';

import WhiteButton from '../UI/WhiteButton/WhiteButton';

export type Inputs = {
	email: string;
	password: string;
};

interface ILoginRegisterForm {
	onSubmit: SubmitHandler<Inputs>;
	title: string;
	btnTitle: string;
}

const LoginRegisterForm: FC<ILoginRegisterForm> = ({ onSubmit, title, btnTitle }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)} noValidate>
			<h3>{title}</h3>

			<div className={s.form__group}>
				<label>Введіть вашу пошту:</label>
				<input
					type="email"
					tabIndex={1}
					placeholder="Enter email"
					{...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })}
				/>
				{errors.email && <span className={s.textDanger}>Невірний формат пошти</span>}
			</div>

			<div className={s.form__group}>
				<label>Введіть ваш пароль:</label>
				<input tabIndex={2} type="password" placeholder="Password" {...register('password', { required: true })} />
				{errors.password && <span className={s.textDanger}>Введіть ваш пароль</span>}
			</div>

			<WhiteButton type={'submit'}>
				<span>{btnTitle}</span>
			</WhiteButton>
		</form>
	);
};
export default LoginRegisterForm;
