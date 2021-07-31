const InitalState = { message: "", occuerd: false };

export const ErrorReducer = (state = InitalState, action) => {
	switch (action.type) {
		case "SET_ERROR":
			return { ...state, message: action.payload, occuerd: true };
		case "CLEAR_ERROR":
			return { ...state, message: "", occuerd: false };
		default:
			return state;
	}
};
