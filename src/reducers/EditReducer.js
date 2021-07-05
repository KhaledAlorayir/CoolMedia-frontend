export const EditReducer = (state = null, action) => {
	switch (action.type) {
		case "SELECT":
			return action.payload;
		case "CLEAR_SELECTION":
			return null;
		default:
			return state;
	}
};
