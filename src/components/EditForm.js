import React, { useState } from "react";
import { ValidateEdit } from "../util/Validation";

//styling
import { Form, Button } from "react-bootstrap";

//redux
import { useDispatch, useSelector } from "react-redux";
import { ClearPost } from "../actions/EditActions";
import { EditPost } from "../actions/PostActions";

const EditForm = () => {
	const post = useSelector((state) => state.Edit);

	const dispatch = useDispatch();

	const [Input, setInput] = useState({
		title: post.title,
		description: post.description,
	});

	const SubmitHandler = (e) => {
		e.preventDefault();

		if (ValidateEdit(Input)) {
			dispatch(EditPost(post._id, Input));
			ExitHandler();
		} else {
			window.alert("Please Enter all fields!");
		}
	};

	const ExitHandler = () => {
		dispatch(ClearPost());
	};

	return (
		<>
			{post && (
				<div className="EditForm">
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

						<div style={{ textAlign: "center" }}>
							<Button
								variant="success"
								type="submit"
								size="sm"
								style={{ marginRight: "1rem" }}
							>
								Update
							</Button>
							<Button onClick={ExitHandler} size="sm" variant="danger">
								Cancel
							</Button>
						</div>
					</Form>
				</div>
			)}
		</>
	);
};

export default EditForm;
