import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//redux
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import RootReducers from "./reducers";
import thunk from "redux-thunk";

//redux bs for async calls
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	RootReducers, //redux bs for async calls
	composeEnchancer(applyMiddleware(thunk))
);
//

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
