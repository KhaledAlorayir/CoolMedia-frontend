import React, { useEffect } from "react";

//pages and compoentns
import InputForm from "./components/InputForm";
import Media from "./components/Media";
import Nav from "./components/Nav";
import Image from "./components/Image";

//styles
import { GloablStyles } from "./components/GloablStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

//redux
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/PostActions";

//router
import { Switch, Route } from "react-router-dom";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<StyledApp>
			<GloablStyles />
			<Nav />
			<Switch>
				<Route path="/" exact>
					<Media />
				</Route>
				<Route path="/upload" exact>
					<InputForm />
				</Route>
				<Route path="/image/:id" exact>
					<Image />
				</Route>
			</Switch>
		</StyledApp>
	);
};

const StyledApp = styled.div`
	margin: 2rem 0rem;
`;

export default App;
