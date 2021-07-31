import React, { useState } from "react";
import FileBase from "react-file-base64";
import { ValidateInput } from "../util/Validation";

//styles
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { SubmitPost } from "../actions/PostActions";

const InputForm = () => {
	const [Input, setInput] = useState({
		title: "",
		description: "",
		item: "",
	});

	const dispatch = useDispatch();

	const ErrorMessage = useSelector((state) => state.Error);

	const SubmitHandler = (e) => {
		e.preventDefault();
		if (ValidateInput(Input)) {
			dispatch(SubmitPost(Input));
			setInput({
				title: "",
				description: "",
				item: "",
			});
		} else {
			dispatch({ type: "SET_ERROR", payload: "please enter all information" });
		}
	};

	return (
		<Container style={{ marginTop: "2rem" }}>
			<StyledHeader>
				<h3>Submit a Post!</h3>
				{ErrorMessage.occuerd && <p>{ErrorMessage.message}</p>}
			</StyledHeader>

			<Row className="align-items-center justify-content-center">
				<Col md="4">
					{localStorage.getItem("profile") ? (
						<Form onSubmit={SubmitHandler}>
							<Form.Group className="mb-3" controlId="Title">
								<Form.Label>Title</Form.Label>
								<Form.Control
									onChange={(e) =>
										setInput({ ...Input, title: e.target.value })
									}
									value={Input.title}
									type="text"
									placeholder="Enter Tilte"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="description">
								<Form.Label>Description</Form.Label>
								<Form.Control
									onChange={(e) =>
										setInput({ ...Input, description: e.target.value })
									}
									value={Input.description}
									type="text"
									placeholder="Enter Description"
								/>
							</Form.Group>

							<div className="mb-3">
								<FileBase
									type="file"
									multiple={false}
									onDone={({ base64 }) => setInput({ ...Input, item: base64 })}
									value={Input.item}
								/>
							</div>

							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					) : (
						<NotAuthenticated>
							<h4>Please Sign in first to submit a post!</h4>
						</NotAuthenticated>
					)}
				</Col>
			</Row>
		</Container>
	);
};

const NotAuthenticated = styled.div`
	display: flex;
	height: 55vh;
	justify-content: center;
	align-items: center;

	h4 {
		font-weight: bold;
		color: #c04242;
	}
`;

const StyledHeader = styled.header`
	margin-bottom: 2rem;
	text-align: center;

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

export default InputForm;
