export const ValidateInput = (Input) => {
	if (
		Input.creator.trim() === "" ||
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
	if (
		Input.creator.trim() === "" ||
		Input.title.trim() === "" ||
		Input.description.trim() === ""
	) {
		return false;
	} else {
		return true;
	}
};
