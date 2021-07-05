import React from "react";

//styles
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import loading from "../image/loading.svg";

//redux
import { useSelector } from "react-redux";

//components
import Item from "./Item";

const Media = () => {
	const Posts = useSelector((state) => state.Posts);

	return (
		<>
			{Posts.length !== 0 ? (
				<Container className="mt-4">
					<Row xs={1} md={3} className="g-4">
						{Posts.map((P) => (
							<Item Post={P} key={P._id} />
						))}
					</Row>
				</Container>
			) : (
				<LoadingContiner>
					<div>
						<img src={loading} alt="loading" />
					</div>
				</LoadingContiner>
			)}
		</>
	);
};

const LoadingContiner = styled.div`
	width: 100vw;
	height: 70vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Media;
