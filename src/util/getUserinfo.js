export const getUsername = () => {
	if (!localStorage.getItem("profile")) return null;

	let auth = JSON.parse(localStorage.getItem("profile"));

	if (auth.type === "google") {
		return auth.user.name;
	} else {
		return auth.user.username;
	}
};

export const getUserID = () => {
	if (!localStorage.getItem("profile")) return null;

	let auth = JSON.parse(localStorage.getItem("profile"));

	if (auth.type === "google") {
		return auth.user.googleId;
	} else {
		return auth.user._id;
	}
};
