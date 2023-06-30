import { FC } from 'react';
import s from './HiBlock.module.scss';

import ArrowDown from '../UI/ArrowDown/ArrowDown';
import HiBlickContent from './HiBlickContent';

const HiBlock: FC = () => {
	return (
		<div className={s.hi_block}>
			<HiBlickContent />

			<div className={s.arrow__container}>
				<ArrowDown />
			</div>
		</div>
	);
};
export default HiBlock;
