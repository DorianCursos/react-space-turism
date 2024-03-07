import { Route, Routes } from 'react-router-dom';
import Crew from '../pages/crew/Crew';
import Destination from '../pages/destination/Destination';
import Home from '../pages/home/Home';
import Technology from '../pages/technology/Technology';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/destination' element={<Destination />} />
			<Route path='/crew' element={<Crew />} />
			<Route path='/technology' element={<Technology />} />
		</Routes>
	);
};

export default Router;