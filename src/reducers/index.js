import { combineReducers } from "redux";
import { PostReducer } from "./PostReducer";
import { ImageReducer } from "./ImageReducer";
import { EditReducer } from "./EditReducer";
import { AuthReducer } from "./AuthReducer";
import { ErrorReducer } from "./ErrorReducer";

const All = combineReducers({
	Posts: PostReducer,
	Image: ImageReducer,
	Edit: EditReducer,
	Auth: AuthReducer,
	Error: ErrorReducer,
});

export default All;
