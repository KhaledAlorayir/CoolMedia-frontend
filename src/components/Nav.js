import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
	return (
		<Container>
			<StyledNav>
				<Link to="/">Home</Link>
				<Link to="/upload">Upload</Link>
			</StyledNav>
		</Container>
	);
};

const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	margin-bottom: 4rem;

	a {
		margin-left: 2rem;
		text-decoration: none;
		font-size: 1.2rem;
	}
`;

export default Navigation;
