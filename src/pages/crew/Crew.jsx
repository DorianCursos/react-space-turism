import Header from '../../components/header/Header';
import { StyledPageContainer } from '../pages.styles';

const Crew = () => {
	return (
		<StyledPageContainer $bgImage='/assets/crew/background-crew-mobile.jpg'>
			<Header />
			<h1>Crew</h1>
		</StyledPageContainer>
	);
};

export default Crew;
