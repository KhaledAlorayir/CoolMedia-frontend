export const ValidateInput = (Input) => {
	if (
		Input.title.trim() === "" ||
		Input.description.trim() === "" ||
		Input.item.trim() === ""
	) {
		return false;
	} else {
		return true;
	}
};

export const ValidateEdit = (Input) => {
	if (Input.title.trim() === "" || Input.description.trim() === "") {
		return false;
	} else {
		return true;
	}
};
export const ValidateSignIn = (Input) => {
	if (Input.email.trim() === "" || Input.password.trim() === "") {
		return false;
	} else {
		return true;
	}
};

export const ValidateSignup = (Input) => {
	for (const key in Input) {
		if (Input[key].trim() === "") {
			return false;
		}
	}
	return true;
};
