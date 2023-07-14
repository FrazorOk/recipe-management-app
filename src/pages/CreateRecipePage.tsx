import { FC } from 'react';
import CreateRecipeForm from '../components/CreateRecipeForm/CreateRecipeForm';
import { useRedirectIfNotAuth } from '../hooks/navigate';

const CreateRecipePage: FC = () => {
	useRedirectIfNotAuth();

	return (
		<div>
			<CreateRecipeForm />
		</div>
	);
};
export default CreateRecipePage;
