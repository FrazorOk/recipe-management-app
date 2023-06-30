import { FC } from 'react';
import s from './HiBlock.module.scss';

import { LOGIN_ROUTE } from '../../utils/consts';

import Container from '../UI/Container/Container';
import LinkContainer from '../UI/LinkContainer/LinkContainer';
import WhiteButton from '../UI/WhiteButton/WhiteButton';

const HiBlickContent: FC = () => {
	return (
		<Container>
			<div className={s.hi_block__container}>
				<h5>Вітаємо вас</h5>
				<h2>Давайте готувати разом</h2>
				<p>
					Запрошуємо до участі у проекті всіх кухарів та вмілих господарок, які хочуть дивувати інтернет-користувачів своїми рецептами.
					Разом ми зможемо творити кулінарні дива!
				</p>
				<LinkContainer to={LOGIN_ROUTE}>
					<WhiteButton>почати готувати</WhiteButton>
				</LinkContainer>
			</div>
		</Container>
	);
};
export default HiBlickContent;
