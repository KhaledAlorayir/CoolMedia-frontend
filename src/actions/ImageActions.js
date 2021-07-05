export const setImage = (post) => {
	return { type: "SET", payload: post };
};

export const ClearImage = () => {
	return { type: "CLEAR" };
};
