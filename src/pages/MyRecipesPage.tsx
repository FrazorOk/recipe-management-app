import { FC } from 'react';

import { useRedirectIfNotAuth } from '../hooks/navigate';

const MyRecipesPage: FC = () => {
	useRedirectIfNotAuth();

	return <div>MyRecipes</div>;
};
export default MyRecipesPage;
