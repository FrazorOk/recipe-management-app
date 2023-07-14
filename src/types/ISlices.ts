export interface IUser {
	id: string;
	email: string;
	savedRecipes: string[] | null;
	createdRecipes: string[] | null;
}

export interface IIngredients {
	amount: string;
	ingredient: string;
}
export interface IRecipe {
	id: string;
	description: string;
	img: string;
	instruction: string;
	time: string;
	title: string;
	ingredients: IIngredients[];
}
