import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { CREACTE_RECIPES, DEFAULT_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MY_RECIPES, REGISTRATION_ROUTE } from './utils/consts';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyRecipes from './pages/MyRecipes';
import CreateRecipe from './pages/CreateRecipe';

function App() {
	return (
		<div className="wrapper">
			<NavBar />
			<div className="main">
				<Routes>
					<Route path={HOME_ROUTE} element={<HomePage />} />
					<Route path={LOGIN_ROUTE} element={<LoginPage />} />
					<Route path={REGISTRATION_ROUTE} element={<RegisterPage />} />
					<Route path={MY_RECIPES} element={<MyRecipes />} />
					<Route path={CREACTE_RECIPES} element={<CreateRecipe />} />
					<Route path={DEFAULT_ROUTE} element={<HomePage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
