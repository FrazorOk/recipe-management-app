import { FC } from 'react';
import s from './Card.module.scss';
import { Link } from 'react-router-dom';

import { HOME_ROUTE } from '../../utils/consts';

const Card: FC = () => {
	return (
		<Link to={HOME_ROUTE} className={s.card}>
			<div className={s.card__img}>
				<img
					src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg"
					alt=""
				/>
			</div>
			<div className={s.card__content}>
				<h5>Курка по українськи</h5>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eveniet labore dolorem qui ea, omnis doloremque totam debitis...
				</p>
			</div>
		</Link>
	);
};
export default Card;
