export interface IUser {
	id: string;
	email: string;
	savedRecipes: string[] | null;
	createdRecipes: string[] | null;
}
