import { FC, useState } from 'react';
import s from './CreateRecipeForm.module.scss';

import { useAppDispatch } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';

import Container from '../UI/Container/Container';
import TitleGoupe from './InputsGroups/TitleGoupe';
import ImgGoupe from './InputsGroups/ImgGoupe';
import TimeGoupe from './InputsGroups/TimeGoupe';
import DescriptionGoupe from './InputsGroups/DescriptionGoupe';
import IngredientsGoupe from './InputsGroups/IngredientsGoupe';
import InstructionGoupe from './InputsGroups/InstructionGoupe';

import { validateIngredientsForm } from '../../helpers/validateCreateIngradientsForm';
import { generatedId } from '../../helpers/idGenerator';
import { createRecipe } from '../../store/ActionCreaters';
import { CREATED_RECIPES } from '../../utils/consts';

export type InputsIngredients = {
	title: string;
	exampleRequired: string;
};

interface Iingredients {
	ingredient: string;
	amount: string;
}

export interface IinitFullForm {
	title: string;
	img: string;
	time: string;
	description: string;
	ingredients: Iingredients[];
	instruction: string;
}

const initialFullFormIngredient = { ingredient: '', amount: '' };

const initFullForm: IinitFullForm = {
	title: '',
	img: '',
	time: '',
	description: '',
	ingredients: [initialFullFormIngredient],
	instruction: '',
};

const CreateRecipeForm: FC = () => {
	const dispatch = useAppDispatch();
	let navigate = useNavigate();

	let [step, setStep] = useState<number>(1);
	let [fullForm, setFullForm] = useState<IinitFullForm>(initFullForm);
	let [validateStatus, setValidateStatus] = useState<boolean>(true);

	const incrementOnClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();

		validateIngredientsForm(step, fullForm, setStep, setValidateStatus);
	};
	const decrementOnClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setStep((step) => --step);
	};

	return (
		<div className={s.formContainer}>
			<div className={`${s.formContainer__bg} ${s.formContainer__bg_1}`}>
				<img
					src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
					alt="sorry"
				/>
			</div>
			<div className={`${s.formContainer__bg} ${s.formContainer__bg_2}`}>
				<img
					src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
					alt="sorry"
				/>
			</div>

			<Container>
				<form
					noValidate
					className={s.createFrom}
					onSubmit={(e) => {
						e.preventDefault();

						let submite = () => {
							dispatch(createRecipe(fullForm, generatedId()));
							navigate(CREATED_RECIPES);
						};

						validateIngredientsForm(step, fullForm, setStep, setValidateStatus, submite);
					}}>
					<div className={s.createFrom__input}>
						{step === 1 && <TitleGoupe setFullForm={setFullForm} fullForm={fullForm} />}
						{step === 2 && <ImgGoupe setFullForm={setFullForm} fullForm={fullForm} />}
						{step === 3 && <TimeGoupe setFullForm={setFullForm} fullForm={fullForm} />}
						{step === 4 && <DescriptionGoupe setFullForm={setFullForm} fullForm={fullForm} />}
						{step === 5 && <IngredientsGoupe setFullForm={setFullForm} fullForm={fullForm} />}
						{step === 6 && <InstructionGoupe setFullForm={setFullForm} fullForm={fullForm} />}
					</div>

					<p className={`${s.createFrom__under_btns} ${!validateStatus ? s.text_red : s.text_ivvisible}`}>Обов'язкові поля</p>

					<div className={s.createFrom__btns}>
						{step > 1 && <button onClick={decrementOnClick}>Назад</button>}
						{step < 6 && <button onClick={incrementOnClick}>Далі</button>}
						{step === 6 && <button type="submit">Створити рецепт</button>}
					</div>

					<p className={s.createFrom__under_btns}>Крок {step}/6</p>
				</form>
			</Container>
		</div>
	);
};
export default CreateRecipeForm;
