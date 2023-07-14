import { useEffect } from 'react';

export let useScrollHandler = (refUl: any, setVisibilitySort: React.Dispatch<React.SetStateAction<boolean>>) => {
	useEffect(() => {
		let scrollHandler = (e: any) => {
			const posTop = refUl.current?.getBoundingClientRect().top;

			if (posTop < 200) {
				setVisibilitySort(true);
			} else {
				setVisibilitySort(false);
			}
		};

		document.addEventListener('scroll', scrollHandler);
		return () => document.removeEventListener('click', scrollHandler);
	}, []);
};
