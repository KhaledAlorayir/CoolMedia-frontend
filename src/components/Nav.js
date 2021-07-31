import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Navigation = () => {
	const [User, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		//if token expiress
		const token = User?.token;

		if (token) {
			const decoded = decode(token);

			if (decoded.exp * 1000 < new Date().getTime()) {
				LogoutHandler();
			}
		}
		//set user after redirect
		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [location]);

	//clears error message
	useEffect(() => {
		dispatch({ type: "CLEAR_ERROR" });
	}, [dispatch, location]);

	const LogoutHandler = () => {
		dispatch({ type: "LOGOUT" });
		setUser(null);
		history.push("/");
	};

	return (
		<Container>
			{User && (
				<StyledHeader>
					<p>
						{User.type === "google"
							? "Hello " + User.user.name
							: "Hello " + User.user.username}
					</p>

					{User.type === "google" && (
						<img src={User.user.imageUrl} alt="google account" />
					)}
				</StyledHeader>
			)}
			<StyledNav>
				<Link to="/">Home</Link>
				<Link to="/upload">Upload</Link>
				{User ? (
					<Button onClick={LogoutHandler} variant="danger" size="sm">
						Logout
					</Button>
				) : (
					<Link to="/auth">Sign in</Link>
				)}
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

	button {
		margin-left: 2rem;
	}
`;

const StyledHeader = styled.header`
	display: flex;
	margin-bottom: 1.5rem;
	justify-content: center;
	p {
		font-size: 1.2rem;
		font-weight: bold;
		margin-right: 0.5rem;
	}

	img {
		width: 2rem;
		height: 2rem;
		border-radius: 1rem;
	}
`;

export default Navigation;
