// userloaded  : user info loaded from the backend to store
// user is authenticated and user info will be loaded.

import { REMOVE_ALERT, SET_ALERT } from "../types";

// registeruser
// login successfuly
// getting a token ===> user is authenticated===> load userinfo.

// registerfail
// auth fail
// auth error
// logout
// account deleted
// token has to be delted====> user authentication status is false.
const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);

    default:
      return state;
  }
};
