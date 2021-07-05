export const setPost = (post) => {
	return { type: "SELECT", payload: post };
};

export const ClearPost = () => {
	return { type: "CLEAR_SELECTION" };
};
