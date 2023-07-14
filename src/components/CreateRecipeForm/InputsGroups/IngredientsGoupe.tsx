import { FC, useState } from 'react';
import s from '../CreateRecipeForm.module.scss';

import { IinitFullForm } from '../CreateRecipeForm';

interface ITitleGroupe {
	setFullForm: React.Dispatch<React.SetStateAction<IinitFullForm>>;
	fullForm: IinitFullForm;
}

interface IinitTngredientsList {
	ingredient: string;
	amount: string;
}

const IngredientsGoupe: FC<ITitleGroupe> = ({ setFullForm, fullForm }) => {
	const setOnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();

		setFullForm((a) => {
			let arr = {
				...a,
			};
			arr.ingredients.push({ ingredient: '', amount: '' });
			return arr;
		});
	};

	const remoteOnClickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();

		setFullForm((a) => {
			let arr = {
				...a,
				ingredients: [{ ingredient: '', amount: '' }],
			};

			return arr;
		});
	};

	return (
		<div className={s.createFrom__groupe}>
			<h4>Інгредієнти</h4>
			<ol>
				{fullForm.ingredients.map((ingredientItem, index) => {
					return (
						<li key={index}>
							<p>{index + 1}.</p>
							<input
								autoFocus
								type="text"
								placeholder="Інгредієнт"
								value={fullForm.ingredients[index].ingredient}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setFullForm((a) => {
										let arr = {
											...fullForm,
										};
										arr.ingredients[index].ingredient = e.target.value;

										return arr;
									});
								}}
							/>{' '}
							<p>-</p>{' '}
							<input
								type="text"
								placeholder="Кількість"
								className={s.small_input}
								value={ingredientItem.amount}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setFullForm((a) => {
										let arr = {
											...a,
										};
										arr.ingredients[index].amount = e.target.value;
										return arr;
									});
								}}
							/>
						</li>
					);
				})}
			</ol>
			<div className={s.row_btns}>
				<button className={s.added_btn} onClick={setOnClickHandler}>
					Додати інгредієнт
				</button>
				<button className={`${s.added_btn} ${s.text_red}`} onClick={remoteOnClickHandler}>
					Очистити список
				</button>
			</div>
		</div>
	);
};
export default IngredientsGoupe;
