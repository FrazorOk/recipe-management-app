import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { child, getDatabase, ref, set, get, onValue } from 'firebase/database';

import { AppDispatch } from './store';
import { userSlice } from './UserSlice';

import { IinitFullForm } from '../components/CreateRecipeForm/CreateRecipeForm';

export const registerNewUser = (email: string, password: string) => (dispatch: AppDispatch) => {
	const auth = getAuth();

	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;

			const db = getDatabase();
			set(ref(db, 'users/' + user.uid), {
				id: user.uid,
				email: email,
				recipesSaved: [],
				recipesCreated: [],
			}).then(() => {
				let singIn = signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						const user = userCredential.user;
						const dbRef = ref(getDatabase());

						get(child(dbRef, `users/${user.uid}`))
							.then((snapshot) => {
								if (snapshot.exists()) {
									const data = snapshot.val();

									dispatch(userSlice.actions.setUser(data));
									dispatch(userSlice.actions.toggleAuth(true));
								} else {
									console.log('No data available');
								}
							})
							.catch((error) => {
								console.error(error);
							});
					})
					.catch((error) => {
						const errorMessage = error.message;
						console.log(errorMessage);
					});
			});
		})
		.catch((error) => {
			const errorMessage = error.message;
			console.log(errorMessage);

			// ..
		});
};

export const loginUser = (email: string, password: string) => (dispatch: AppDispatch) => {
	const auth = getAuth();

	let singIn = signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			const dbRef = ref(getDatabase());

			get(child(dbRef, `users/${user.uid}`))
				.then((snapshot) => {
					if (snapshot.exists()) {
						const data = snapshot.val();

						dispatch(userSlice.actions.setUser(data));
						dispatch(userSlice.actions.toggleAuth(true));
					} else {
						console.log('No data available');
					}
				})
				.catch((error) => {
					console.error(error);
				});
		})
		.catch((error) => {
			const errorMessage = error.message;
			console.log(errorMessage);
		});
};

export const logOut = () => (dispatch: AppDispatch) => {
	const auth = getAuth();

	signOut(auth)
		.then(() => {
			dispatch(userSlice.actions.reset());
		})
		.catch((error) => {
			console.log('An error happened');
		});
};

export const createRecipe = (initFullForm: IinitFullForm, recipeId: string) => (dispatch: AppDispatch) => {
	function setResipeInRecipes() {
		const db = getDatabase();

		set(ref(db, 'recipes/' + recipeId), {
			...initFullForm,
			id: recipeId,
		});
	}
	function setResipeInUser() {
		const db = getDatabase();
		const auth = getAuth();

		const userId = auth.currentUser?.uid;

		set(ref(db, 'users/' + userId + '/createdRecipes/' + recipeId), {
			id: recipeId,
		});
	}
	setResipeInRecipes();
	setResipeInUser();
};
