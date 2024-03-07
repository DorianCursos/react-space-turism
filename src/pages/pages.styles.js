import styled from 'styled-components';

const StyledPageContainer = styled.div`
	min-height: 100vh;
	background-image: ${({ $bgImage }) => `url(${$bgImage})`};
`;

export { StyledPageContainer };
