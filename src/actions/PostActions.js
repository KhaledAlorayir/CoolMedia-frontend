import "axios";
import axios from "axios";

const base_url = "https://cool-media-api.herokuapp.com/post";

export const SubmitPost = (post) => async (dispacth) => {
	try {
		const url = `${base_url}/submit`;
		const SavedData = await axios.post(url, post);

		dispacth({
			type: "CREATE",
			payload: SavedData.data,
		});

		window.alert("Photo has been uploaded");
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};

export const getPosts = () => async (dispacth) => {
	try {
		const PostData = await axios.get(base_url);
		dispacth({
			type: "READ",
			payload: PostData.data,
		});
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};

export const DeletePost = (id) => async (dispacth) => {
	try {
		await axios.delete(`${base_url}/${id}/delete`);
		dispacth({
			type: "DELETE",
			payload: id,
		});
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};

export const LikePost = (id) => async (dispacth) => {
	try {
		const updated = await axios.patch(`${base_url}/${id}/like`);
		dispacth({
			type: "LIKE",
			payload: updated.data,
		});
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};

export const EditPost = (id, EditedPost) => async (dispacth) => {
	try {
		const updated = await axios.patch(`${base_url}/${id}/edit`, EditedPost);
		dispacth({
			type: "UPDATE",
			payload: updated.data,
		});
	} catch (err) {
		console.log(err);
		window.alert(err.message);
	}
};
