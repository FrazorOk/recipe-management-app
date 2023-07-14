import { useRedirectIfNotAuth } from '../hooks/navigate';

const CreatedRecipesPage = () => {
	useRedirectIfNotAuth();

	return <div>CreatedRecipes</div>;
};
export default CreatedRecipesPage;
