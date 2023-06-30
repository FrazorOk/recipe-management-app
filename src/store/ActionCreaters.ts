import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AppDispatch } from './store';
import { child, getDatabase, ref, set, get } from 'firebase/database';
import { userSlice } from './UserSlice';

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
