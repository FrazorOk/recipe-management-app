import { FC, useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import s from './NavBar.module.scss';
import icon from './logoIcon.svg';

import { navBarLoginLinks, navBarNavLinks } from './NavBarLinks';
import { HOME_ROUTE } from '../../utils/consts';

import Container from '../UI/Container/Container';
import LinkContainer from '../UI/LinkContainer/LinkContainer';
import { logOut } from '../../store/ActionCreaters';

const NavBar: FC = () => {
	const dispatch = useAppDispatch();
	let authUser = useAppSelector((state) => state.userReduser.auth);

	let [openedNavBar, setOpenedNavBar] = useState(false);
	let [backgroundNavBar, setBackgroundNavBar] = useState(false);

	const iconClickHandler = (e: React.MouseEvent<HTMLElement>) => {
		document.body.classList.toggle('_lock');
		setOpenedNavBar((openedNavBar) => !openedNavBar);
	};

	const logoutClickHandler = (e: React.MouseEvent<HTMLElement>) => {
		dispatch(logOut());
	};

	useEffect(() => {
		if (!backgroundNavBar) {
			window.addEventListener('scroll', () => {
				setBackgroundNavBar((backgroundNavBar = true));
			});

			return () =>
				window.removeEventListener('scroll', () => {
					setBackgroundNavBar((backgroundNavBar) => !backgroundNavBar);
				});
		}
	}, []);

	return (
		<header className={`${s.header} ${backgroundNavBar && s._active}`}>
			<div className={s.header__background}></div>
			<Container>
				<div className={s.header__container}>
					<LinkContainer to={HOME_ROUTE}>
						<div className={s.header__logo}>
							<img src={icon} alt="" />
							<h1>FastRecipes</h1>
						</div>
					</LinkContainer>
					<div className={(s.header__menu, s.menu)}>
						<div className={s.menu__icon} onClick={iconClickHandler}>
							<span></span>
						</div>
						<nav className={`${s.menu__body} ${openedNavBar && s._active}`}>
							{authUser && (
								<ul className={s.menu__list}>
									{navBarNavLinks.map(({ to, text }, index) => {
										return (
											<li key={index}>
												<LinkContainer to={to} className={s.menu__link}>
													<p>{text}</p>
												</LinkContainer>
											</li>
										);
									})}
								</ul>
							)}

							<ul className={s.menu__list}>
								{authUser ? (
									<li onClick={logoutClickHandler}>
										<LinkContainer to={HOME_ROUTE} className={s.menu__link}>
											<p>Вийти</p>
										</LinkContainer>
									</li>
								) : (
									navBarLoginLinks.map(({ to, text }, index) => {
										return (
											<li key={index}>
												<LinkContainer to={to} className={s.menu__link}>
													<p>{text}</p>
												</LinkContainer>
											</li>
										);
									})
								)}
							</ul>
						</nav>
					</div>
				</div>
			</Container>
		</header>
	);
};
export default NavBar;
