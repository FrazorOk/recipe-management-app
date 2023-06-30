import { FC } from 'react';

import { Link } from 'react-router-dom';

type LinkType = {
	children: React.ReactNode;
	to: string;
	className?: any;
};

const LinkContainer: FC<LinkType> = ({ children, to, className }) => {
	return (
		<Link className={className} to={to}>
			{children}
		</Link>
	);
};
export default LinkContainer;
