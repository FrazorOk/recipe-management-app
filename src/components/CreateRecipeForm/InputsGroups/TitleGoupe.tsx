import { FC, useEffect } from 'react';
import s from '../CreateRecipeForm.module.scss';

import { IinitFullForm } from '../CreateRecipeForm';

interface ITitleGroupe {
	setFullForm: React.Dispatch<React.SetStateAction<IinitFullForm>>;
	fullForm: IinitFullForm;
}

const TitleGoupe: FC<ITitleGroupe> = ({ setFullForm, fullForm }) => {
	const onChageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFullForm({ ...fullForm, title: e.target.value });
	};

	return (
		<div className={s.createFrom__groupe}>
			<h4>Оберіть назву страви</h4>
			<input type="text" autoFocus value={fullForm.title} onChange={onChageHandler} />
		</div>
	);
};
export default TitleGoupe;
