import styled from 'styled-components';

const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	width: 254px;
	height: 100vh;
	padding: 7.375rem 2rem;
	background-color: rgb(0 0 0 / 0.4);
	backdrop-filter: blur(10px);
`;

const StyledMenuItem = styled.li`
	margin-bottom: 2rem;
	font-family: 'Barlow Condensed', sans-serif;
`;

export { StyledMenuItem, StyledNav };
