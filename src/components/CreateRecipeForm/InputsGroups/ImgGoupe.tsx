import { FC } from 'react';
import s from '../CreateRecipeForm.module.scss';

import { IinitFullForm } from '../CreateRecipeForm';

interface ITitleGroupe {
	setFullForm: React.Dispatch<React.SetStateAction<IinitFullForm>>;
	fullForm: IinitFullForm;
}

const ImgGoupe: FC<ITitleGroupe> = ({ setFullForm, fullForm }) => {
	const onChageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFullForm({ ...fullForm, img: e.target.value });
	};

	return (
		<div className={s.createFrom__groupe}>
			<h4>Посилання на зображення</h4>
			<input type="text" autoFocus value={fullForm.img} onChange={onChageHandler} />
		</div>
	);
};
export default ImgGoupe;
