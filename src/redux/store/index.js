import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../reducers";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
// requires 3 arg.
// 1. rootreducer(it will hold all reducers spec.)
// 2. global state
// apply middleware + we can provide the access to redux devtool (chrome extension)[to refer the understand the manipulation of data.]
