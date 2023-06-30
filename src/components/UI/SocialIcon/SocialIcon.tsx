import { FC } from 'react';

import s from './SocialIcon.module.scss';

type SocialIconType = {
	path: string;
	icon: string;
};

const SocialIcon: FC<SocialIconType> = ({ path, icon }) => {
	return (
		<a href={path} className={s.socialIcon}>
			<img className={s.socialIcon__img} src={icon} alt="sorry" />
		</a>
	);
};
export default SocialIcon;
