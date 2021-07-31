import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "./Input";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Signin, Signup } from "../actions/AuthActions";
import { ValidateSignIn, ValidateSignup } from "../util/Validation";

const Auth = () => {
	const InitalState = { username: "", email: "", password: "", repassword: "" };

	const [isSignup, setisSignup] = useState(false);
	const [FormData, setFormData] = useState(InitalState);

	const ErrorMessage = useSelector((state) => state.Error);

	const dispatch = useDispatch();
	const history = useHistory();

	const SubmitHandler = (e) => {
		e.preventDefault();

		if (isSignup && ValidateSignup(FormData)) {
			dispatch(Signup(FormData, history));
		} else if (!isSignup && ValidateSignIn(FormData)) {
			dispatch(Signin(FormData, history));
		} else {
			dispatch({ type: "SET_ERROR", payload: "please enter all information" });
		}

		//we sent the history here to redirect from the action
		//we have to send the obj becacues we cant create one in the action since its not a react component
	};

	const SwitchHandler = () => {
		setisSignup(!isSignup);
	};

	const FormChangeHandler = (e) => {
		setFormData({ ...FormData, [e.target.name]: e.target.value });
	};

	const GoogleSuccessHandler = (res) => {
		//danger
		const user = res.profileObj;
		const token = res.tokenId;
		dispatch({ type: "GOOGLE_AUTH", payload: { user, token } });
		history.push("/");
	};
	const GoogleFailureHandler = (err) => {
		console.log(err);
	};

	return (
		<Container>
			<StyledHeader>
				<h2> {isSignup ? "Sign up" : "Sign in"}</h2>
				{ErrorMessage.occuerd && <p>{ErrorMessage.message}</p>}
			</StyledHeader>

			<Row className="align-items-center justify-content-center">
				<Col md="4">
					<Form onSubmit={SubmitHandler}>
						{isSignup && (
							<Input
								name="username"
								Change={FormChangeHandler}
								Label="Username"
								Type="text"
							/>
						)}

						<Input
							name="email"
							Change={FormChangeHandler}
							Label="Email"
							Type="email"
						/>

						<Input
							name="password"
							Change={FormChangeHandler}
							Label="Password"
							Type="password"
						/>

						{isSignup && (
							<Input
								name="repassword"
								Change={FormChangeHandler}
								Label="Repeat Password"
								Type="password"
							/>
						)}

						<StyledBtn variant="primary" type="submit">
							{isSignup ? "Sign up" : "Sign in"}
						</StyledBtn>
						<GoogleLogin
							clientId="246764371724-3n1kbbeus5ntltm7m7iigngqljr61r2j.apps.googleusercontent.com"
							buttonText="Login with Google"
							onSuccess={GoogleSuccessHandler}
							onFailure={GoogleFailureHandler}
							cookiePolicy={"single_host_origin"}
						/>
						<StyledP onClick={SwitchHandler}>
							{isSignup
								? "if you already have an account Sign in!"
								: "you don't have an account? Sign up!"}
						</StyledP>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

const StyledP = styled.p`
	margin-top: 2rem;
	font-weight: bold;
	cursor: pointer;
`;

const StyledBtn = styled(Button)`
	display: block;
	margin-bottom: 1rem;
`;

const StyledHeader = styled.header`
	text-align: center;
	margin-bottom: 2rem;

	p {
		background-color: #f36060;
		color: #f0f0f0;
		padding: 0.5rem 0.2rem;
		font-size: 1.1rem;
		width: 30%;
		margin: 1rem auto;
		border-radius: 1rem;
	}
`;

export default Auth;
