export const PostReducer = (state = [], action) => {
	switch (action.type) {
		case "CREATE":
			return [...state, action.payload];
		case "READ":
			return action.payload;
		case "DELETE":
			return state.filter((p) => p._id !== action.payload);
		case "LIKE":
		case "UPDATE":
			return state.map((p) =>
				p._id === action.payload._id ? action.payload : p
			);
		default:
			return state;
	}
};
