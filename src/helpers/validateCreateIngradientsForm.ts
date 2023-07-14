import { IinitFullForm } from '../components/CreateRecipeForm/CreateRecipeForm';

export const validateIngredientsForm = (
	step: number,
	fullForm: IinitFullForm,
	setStep: React.Dispatch<React.SetStateAction<number>>,
	setValidateStatus: React.Dispatch<React.SetStateAction<boolean>>,
	submiteForm?: any
): void => {
	if (step === 1) {
		if (fullForm.title) {
			setStep((step) => ++step);
			setValidateStatus(true);
		} else {
			setValidateStatus(false);
		}
	}
	if (step === 2) {
		if (fullForm.img) {
			setStep((step) => ++step);
			setValidateStatus(true);
		} else {
			setValidateStatus(false);
		}
	}
	if (step === 3) {
		if (fullForm.time) {
			setStep((step) => ++step);
			setValidateStatus(true);
		} else {
			setValidateStatus(false);
		}
	}
	if (step === 4) {
		if (fullForm.description) {
			setStep((step) => ++step);
			setValidateStatus(true);
		} else {
			setValidateStatus(false);
		}
	}
	if (step === 5) {
		fullForm.ingredients.forEach((item, index) => {
			if (!item.amount && !item.ingredient) {
				setValidateStatus(false);
			}
			if (index === fullForm.ingredients.length - 1) {
				if (item.amount && item.ingredient) {
					setStep((step) => ++step);
					setValidateStatus(true);
				} else {
					setValidateStatus(false);
				}
			}
		});
	}
	if (step === 6) {
		if (fullForm.instruction) {
			setValidateStatus(true);
			submiteForm();
		} else {
			setValidateStatus(false);
		}
	}
};
