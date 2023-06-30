import { CREATED_RECIPES, CREATE_NEW_RECIPE, HOME_ROUTE, LOGIN_ROUTE, MY_RECIPES, REGISTRATION_ROUTE } from '../../utils/consts';

export interface INavBarLinks {
	text: string;
	to: string;
}

export const navBarLoginLinks: INavBarLinks[] = [
	{
		text: 'Вхід',
		to: LOGIN_ROUTE,
	},
	{
		text: 'Реєстрація',
		to: REGISTRATION_ROUTE,
	},
];

export const navBarNavLinks: INavBarLinks[] = [
	{
		text: 'Головна',
		to: HOME_ROUTE,
	},
	{
		text: 'Мої рецепти',
		to: MY_RECIPES,
	},
	{
		text: 'Створені рецепти',
		to: CREATED_RECIPES,
	},
	{
		text: 'Новий рецепт',
		to: CREATE_NEW_RECIPE,
	},
];
