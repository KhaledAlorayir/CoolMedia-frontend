import "axios";
import axios from "axios";
import { getUsername } from "../util/getUserinfo";

//https://cool-media-api.herokuapp.com/post
//http://localhost:5000/post

const base_url = "https://cool-media-api.herokuapp.com/post";

const API = axios.create({ baseURL: base_url });

//sending the token with each req
API.interceptors.request.use((req) => {
	if (localStorage.getItem("profile")) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem("profile")).token
		}`;
	}

	return req;
});

export const SubmitPost = (post) => async (dispatch) => {
	try {
		const name = getUsername();

		const SavedData = await API.post("/submit", { ...post, name });
		//server error handling
		if (SavedData.data.message) {
			dispatch({ type: "SET_ERROR", payload: SavedData.data.message });
			return;
		}

		dispatch({
			type: "CREATE",
			payload: SavedData.data,
		});

		window.alert("Photo has been uploaded");
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};

export const getPosts = () => async (dispatch) => {
	try {
		const PostData = await API.get();
		dispatch({
			type: "READ",
			payload: PostData.data,
		});
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};

export const DeletePost = (id) => async (dispatch) => {
	try {
		await API.delete(`/${id}/delete`);
		dispatch({
			type: "DELETE",
			payload: id,
		});
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};

export const LikePost = (id) => async (dispatch) => {
	try {
		const updated = await API.patch(`/${id}/like`);
		dispatch({
			type: "LIKE",
			payload: updated.data,
		});
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};

export const EditPost = (id, EditedPost) => async (dispatch) => {
	try {
		const updated = await API.patch(`/${id}/edit`, EditedPost);
		dispatch({
			type: "UPDATE",
			payload: updated.data,
		});
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};
