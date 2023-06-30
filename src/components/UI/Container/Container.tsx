import { FC } from 'react';

type Props = {
	children: React.ReactNode;
};

type Style = {
	maxWidth: string;
	margin: string;
	padding: string;
	height: string;
	position: any;
};

const style: Style = {
	maxWidth: '1200px',
	margin: '0 auto',
	padding: '0 15px',
	height: '100%',
	position: 'relative',
};

const Container: FC<Props> = ({ children }) => {
	return <div style={style}>{children}</div>;
};

export default Container;
