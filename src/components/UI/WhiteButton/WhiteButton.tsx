import { FC } from 'react';

import s from './WhiteButton.module.scss';

type WhiteButtonType = {
	children: React.ReactNode;
	type?: any;
};

const WhiteButton: FC<WhiteButtonType> = ({ children, type }) => {
	return (
		<button className={s.white_button} type={type}>
			<span>{children}</span>
		</button>
	);
};
export default WhiteButton;
