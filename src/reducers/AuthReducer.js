const InitalState = { user: null };

export const AuthReducer = (state = InitalState, action) => {
	//danger
	switch (action.type) {
		case "GOOGLE_AUTH":
			localStorage.setItem(
				"profile",
				JSON.stringify({ ...action.payload, type: "google" })
			);
			return { ...state, user: action.payload };

		case "CUSTOM_AUTH":
			localStorage.setItem(
				"profile",
				JSON.stringify({ ...action.payload, type: "custom" })
			);
			return { ...state, user: action.payload };

		case "LOGOUT":
			localStorage.clear();
			return { ...state, user: null };

		default:
			return { ...state };
	}
};
