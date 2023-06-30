import { FC } from 'react';
import s from './Search.module.scss';

import Container from '../UI/Container/Container';

const Search: FC = () => {
	return (
		<div className={s.search}>
			<Container>
				<form className={s.search__form}>
					<div className={s.search__inputGroupe}>
						<input className={s.search__area} type="text" placeholder="Шукати за назвою" />
						<button>
							<span>пошук</span>
						</button>
					</div>
					<div className={s.search__inputGroupe}>
						<input className={s.search__area} type="text" placeholder="Шукати за інгрідієнтом" />
						<button>
							<span>пошук</span>
						</button>
					</div>
				</form>
			</Container>
		</div>
	);
};
export default Search;
