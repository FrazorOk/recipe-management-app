import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import './index.scss';
import './nullstyle.scss';

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { getAuth } from 'firebase/auth';
import { app } from './firebase/firebase';
import { getDatabase } from 'firebase/database';

import App from './App';

const auth = getAuth(app);
export const database = getDatabase(app);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>
);
