import Header from '../../components/header/Header';
import { StyledPageContainer } from '../pages.styles';

const Destination = () => {
	return (
		<StyledPageContainer $bgImage='/assets/destination/background-destination-mobile.jpg'>
			<Header />
			<h1>Destination</h1>
		</StyledPageContainer>
	);
};

export default Destination;
