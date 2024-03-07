import { Link } from 'react-router-dom';
import { StyledMenuItem, StyledNav } from './menu.styles';

const Menu = ({action}) => {
	return (
		<>
			<StyledNav>
				<ul>
					<StyledMenuItem>
						<Link to='/'>00 Home</Link>
					</StyledMenuItem>
					<StyledMenuItem>
						<Link to='/destination'>01 Destination</Link>
					</StyledMenuItem>
					<StyledMenuItem>
						<Link to='/crew'>02 Crew</Link>
					</StyledMenuItem>
					<StyledMenuItem>
						<Link to='/technology'>03 Technology</Link>
					</StyledMenuItem>
				</ul>
			</StyledNav>
		</>
	);
};

export default Menu;
