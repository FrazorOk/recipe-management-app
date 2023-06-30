import { FC, useEffect, useRef, useState } from 'react';
import * as React from 'react';
import s from './Sort.module.scss';

type T = {
	visibility: boolean;
};

const Sort: FC<T> = ({ visibility }) => {
	let [activeSort, setActiveSort] = useState(false);

	const onClikHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		setActiveSort((activeSort) => !activeSort);
	};

	const refUl = useRef<any>(null);
	const refBtn = useRef<any>(null);

	useEffect(() => {
		const onClick = (e: any) =>
			refUl.current?.contains(e.target) || refBtn.current?.contains(e.target) || setActiveSort((activeSort = false));

		document.addEventListener('click', onClick);

		return () => document.removeEventListener('click', onClick);
	}, []);

	return (
		<div className={`${s.sort} ${visibility && s.visibility} ${activeSort && s.active}`} ref={refUl}>
			<button className={s.sort_icon} onClick={onClikHandler} ref={refBtn}></button>

			<ul className={s.sort_list}>
				<p>Сортувати за:</p>

				<li className={`${s.sort_list__button}`}>
					<button>Назвою страви</button>
				</li>

				<li className={s.sort_list__button}>
					<button>Датою додавання</button>
				</li>

				<li className={s.sort_list__button}>
					<button>Часом готування</button>
				</li>

				<li className={s.sort_list__button}>
					<button>Кількістю інгредієнтів</button>
				</li>
			</ul>
		</div>
	);
};
export default Sort;
