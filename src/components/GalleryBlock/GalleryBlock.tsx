import { FC, useEffect, useRef, useState } from 'react';
import s from './GalleryBlock.module.scss';

import Container from '../UI/Container/Container';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import Card from '../Card/Card';

const GalleryBlock: FC = () => {
	const refUl = useRef<any>(null);

	let [visibilitySort, setVisibilitySort] = useState(false);

	useEffect(() => {
		let scrollHandler = (e: any) => {
			const posTop = refUl.current?.getBoundingClientRect().top;

			if (posTop < 200) {
				setVisibilitySort((visibilitySort = true));
			} else {
				setVisibilitySort((visibilitySort = false));
			}
		};

		document.addEventListener('scroll', scrollHandler);
		return () => document.removeEventListener('click', scrollHandler);
	}, []);

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
