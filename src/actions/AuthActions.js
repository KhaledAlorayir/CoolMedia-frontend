//actions for the backend auth not google's
import axios from "axios";

const base_url = "https://cool-media-api.herokuapp.com/user";

export const Signin = (Formdata, history) => async (dispatch) => {
	const { data } = await axios.post(`${base_url}/signin`, Formdata);

	//server error handling
	if (data.message) {
		dispatch({ type: "SET_ERROR", payload: data.message });
		return;
	}

	dispatch({ type: "CUSTOM_AUTH", payload: data });

	history.push("/");
};

export const Signup = (Formdata, history) => async (dispatch) => {
	const { data } = await axios.post(`${base_url}/signup`, Formdata);

	//server error handling
	if (data.message) {
		dispatch({ type: "SET_ERROR", payload: data.message });
		return;
	}

	dispatch({ type: "CUSTOM_AUTH", payload: data });

	history.push("/");
};
