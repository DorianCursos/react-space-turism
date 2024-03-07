import { useState } from 'react';
import Hamburguer from '../hamburguer/Hamburguer';
import Menu from '../menu/Menu';
import { StyledHeader } from './header.styles';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<StyledHeader>
			<img src='/public/assets/shared/logo.svg' alt='' />
			<Hamburguer
				setIsMenuOpen={setIsMenuOpen}
				image='/assets/shared/icon-hamburger.svg'
				alt=''
				action={() => setIsMenuOpen(!isMenuOpen)}
			/>
			<Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
		</StyledHeader>
	);
};

export default Header;
