import { CREATED_RECIPES, CREATE_NEW_RECIPE, DEFAULT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MY_RECIPES, REGISTRATION_ROUTE } from './utils/consts';

import CreateRecipe from './pages/CreateRecipePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyRecipes from './pages/MyRecipesPage';
import RegisterPage from './pages/RegisterPage';
import CreatedRecipes from './pages/CreatedRecipesPage';

export interface IAppRoute {
	path: string;
	element: any;
}

export const appRoutes: IAppRoute[] = [
	{ path: HOME_ROUTE, element: HomePage },
	{ path: LOGIN_ROUTE, element: LoginPage },
	{ path: REGISTRATION_ROUTE, element: RegisterPage },
	{ path: MY_RECIPES, element: MyRecipes },
	{ path: CREATED_RECIPES, element: CreatedRecipes },
	{ path: CREATE_NEW_RECIPE, element: CreateRecipe },
	{ path: DEFAULT_ROUTE, element: HomePage },
];
