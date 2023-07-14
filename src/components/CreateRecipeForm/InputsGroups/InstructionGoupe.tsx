import { FC } from 'react';
import s from '../CreateRecipeForm.module.scss';

import { IinitFullForm } from '../CreateRecipeForm';

interface ITitleGroupe {
	setFullForm: React.Dispatch<React.SetStateAction<IinitFullForm>>;
	fullForm: IinitFullForm;
}

const InstructionGoupe: FC<ITitleGroupe> = ({ setFullForm, fullForm }) => {
	const onChageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFullForm({ ...fullForm, instruction: e.target.value });
	};

	return (
		<div className={s.createFrom__groupe}>
			<h4>Повна інструкція</h4>
			<textarea autoFocus onChange={onChageHandler} value={fullForm.instruction} />
		</div>
	);
};
export default InstructionGoupe;
