import { FC } from 'react';
import s from './SocialsList.module.scss';

import Container from '../UI/Container/Container';
import SocialIcon from '../UI/SocialIcon/SocialIcon';
import { socialLinks } from './socialsLinks';

const SocialsList: FC = () => {
	return (
		<div className={s.socials}>
			<Container>
				<div>
					{socialLinks.map(({ path, icon }, index) => {
						return <SocialIcon key={index} path={path} icon={icon} />;
					})}
				</div>
			</Container>
		</div>
	);
};
export default SocialsList;
