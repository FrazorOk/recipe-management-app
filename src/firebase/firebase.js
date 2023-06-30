// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBUWSrymvsgfHadrnjwSTgw2ZA0nCeKO5k',
	authDomain: 'recipe-management-app-cb1c3.firebaseapp.com',
	projectId: 'recipe-management-app-cb1c3',
	storageBucket: 'recipe-management-app-cb1c3.appspot.com',
	messagingSenderId: '423856362069',
	appId: '1:423856362069:web:6877fceed30b7639b4fadc',
	databaseURL: 'https://recipe-management-app-cb1c3-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
