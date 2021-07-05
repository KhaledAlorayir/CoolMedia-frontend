import React, { useState } from "react";
import FileBase from "react-file-base64";
import { ValidateInput } from "../util/Validation";

//styles
import { Form, Button, Container, Row, Col } from "react-bootstrap";

//REDUX
import { useDispatch } from "react-redux";
import { SubmitPost } from "../actions/PostActions";

const InputForm = () => {
	const [Input, setInput] = useState({
		creator: "",
		title: "",
		description: "",
		item: "",
	});

	const dispatch = useDispatch();

	const SubmitHandler = (e) => {
		e.preventDefault();
		if (ValidateInput(Input)) {
			dispatch(SubmitPost(Input));
			setInput({
				creator: "",
				title: "",
				description: "",
				item: "",
			});
		} else {
			window.alert("Please Enter all fields!");
		}
	};

	return (
		<Container style={{ marginTop: "2rem" }}>
			<h3 style={{ marginBottom: "2rem" }} className="text-center">
				Submit a Post!
			</h3>

			<Row className="align-items-center justify-content-center">
				<Col md="4">
					<Form onSubmit={SubmitHandler}>
						<Form.Group className="mb-3" controlId="Title">
							<Form.Label>Title</Form.Label>
							<Form.Control
								onChange={(e) => setInput({ ...Input, title: e.target.value })}
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

						<Form.Group className="mb-3" controlId="creator">
							<Form.Label>Your name</Form.Label>
							<Form.Control
								onChange={(e) =>
									setInput({ ...Input, creator: e.target.value })
								}
								value={Input.creator}
								type="text"
								placeholder="Enter Name"
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
				</Col>
			</Row>
		</Container>
	);
};

export default InputForm;
