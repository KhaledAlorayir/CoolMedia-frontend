import { combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import { ImageReducer } from "./ImageReducer";
import { EditReducer } from "./EditReducer";

const All = combineReducers({
	Posts: PostReducer,
	Image: ImageReducer,
	Edit: EditReducer,
});

export default All;
