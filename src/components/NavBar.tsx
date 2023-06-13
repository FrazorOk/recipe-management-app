import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CREACTE_RECIPES, HOME_ROUTE, LOGIN_ROUTE, MY_RECIPES, REGISTRATION_ROUTE } from '../utils/consts';

const NavBar = () => {
	return (
		<Navbar bg="success" variant="dark">
			<Container>
				<Link className="me-2" to={HOME_ROUTE}>
					<h3>FastRecipes</h3>
				</Link>
				<Nav className="me-auto">
					<Link to={HOME_ROUTE}>
						<Button variant="success">Home</Button>
					</Link>

					<Link to={MY_RECIPES}>
						<Button variant="success">My recipes</Button>
					</Link>

					<Link to={CREACTE_RECIPES}>
						<Button variant="success">Create recipe</Button>
					</Link>
				</Nav>

				<Nav className="me-0">
					<Link to={LOGIN_ROUTE}>
						<Button variant="success">Login</Button>
					</Link>

					<Link to={REGISTRATION_ROUTE}>
						<Button variant="success">Register</Button>
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};
export default NavBar;
