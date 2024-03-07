import Header from '../../components/header/Header';
import { StyledPageContainer } from '../pages.styles';

const Home = () => {
	return (
		<StyledPageContainer $bgImage='/assets/home/background-home-mobile.jpg'>
			<Header />
			<h1>Home</h1>
		</StyledPageContainer>
	);
};

export default Home;
