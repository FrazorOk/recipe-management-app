import { FC, useEffect, useRef, useState } from 'react';
import s from './GalleryBlock.module.scss';

import Container from '../UI/Container/Container';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import Card from '../Card/Card';
import { useScrollHandler } from '../../hooks/handlers';

const GalleryBlock: FC = () => {
	const refUl = useRef<any>(null);

	let [visibilitySort, setVisibilitySort] = useState(false);

	useScrollHandler(refUl, setVisibilitySort);

	return (
		<div className={s.gallery} ref={refUl}>
			<Search />
			<Sort visibility={visibilitySort} />
			<Container>
				<div className={s.cards}>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</Container>
		</div>
	);
};
export default GalleryBlock;
