import { FC } from 'react';
import s from './Footer.module.scss';

import Container from '../UI/Container/Container';

const Footer: FC = () => {
	return (
		<footer className={s.footer_block}>
			<Container>
				<div className={s.footer_block__content}>
					<h5>Copyright © 2023 FastRecipes. All Rights reserved.</h5>
					<p>Dimoniw1996@gmail.com</p>
				</div>
			</Container>
		</footer>
	);
};
export default Footer;
