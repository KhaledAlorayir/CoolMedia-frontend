import React from "react";
import { Form } from "react-bootstrap";
//resuable component for bootstrap inputs
const Input = ({ Label, Type, name, Change }) => {
	return (
		<Form.Group className="mb-3" controlId={Label}>
			<Form.Label>{Label}</Form.Label>
			<Form.Control
				name={name}
				onChange={Change}
				type={Type}
				placeholder={`Enter ${Label}`}
			/>
		</Form.Group>
	);
};

export default Input;
