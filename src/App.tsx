import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { appRoutes } from './AppRoutes';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SocialsList from './components/SocialsList/SocialsList';

const App: FC = () => {
	return (
		<div className="wrapper">
			<NavBar />
			<div className="page">
				<Routes>
					{appRoutes.map((appRoute, index): any => {
						return <Route key={index} path={appRoute.path} element={<appRoute.element />} />;
					})}
				</Routes>
			</div>
			<Footer />
			<SocialsList />
		</div>
	);
};

export default App;
