// userloaded  : user info loaded from the backend to store
// user is authenticated and user info will be loaded.

import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types";

// registeruser
// login successfuly
// getting a token ===> user is authenticated===> load userinfo.

// registerfail
// auth fail
// auth error
// logout
// account deleted
// token has to be delted====> user authentication status is false.
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true, // to apply spinner.
  user: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      /// either store this token in cookie or store it in localstorage/
      localStorage.setItem("token", payload.token);
      return { ...state, ...payload };

    default:
      return state;
  }
};
