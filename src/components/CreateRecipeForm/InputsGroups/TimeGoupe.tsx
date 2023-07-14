import { FC } from 'react';
import s from '../CreateRecipeForm.module.scss';

import { IinitFullForm } from '../CreateRecipeForm';

interface ITitleGroupe {
	setFullForm: React.Dispatch<React.SetStateAction<IinitFullForm>>;
	fullForm: IinitFullForm;
}

const TimeGoupe: FC<ITitleGroupe> = ({ setFullForm, fullForm }) => {
	const onChageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFullForm({ ...fullForm, time: e.target.value });
	};

	return (
		<div className={s.createFrom__groupe}>
			<h4>Час на приготування</h4>
			<input type="time" autoFocus className={s.small_input} value={fullForm.time} onChange={onChageHandler} />
		</div>
	);
};
export default TimeGoupe;
