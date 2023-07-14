import { FC } from 'react';
import s from '../CreateRecipeForm.module.scss';

import { IinitFullForm } from '../CreateRecipeForm';

interface ITitleGroupe {
	setFullForm: React.Dispatch<React.SetStateAction<IinitFullForm>>;
	fullForm: IinitFullForm;
}

const DescriptionGoupe: FC<ITitleGroupe> = ({ setFullForm, fullForm }) => {
	const onChageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFullForm({ ...fullForm, description: e.target.value });
	};

	return (
		<div className={s.createFrom__groupe}>
			<h4>Короткий опис</h4>
			<textarea autoFocus value={fullForm.description} onChange={onChageHandler} />
		</div>
	);
};
export default DescriptionGoupe;
