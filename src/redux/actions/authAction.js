import axios from "axios";
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types";

// used to perform the rest calls or common BL.

// to register the user it s a common req.

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users", body, config);
    // res will hold success response.
    // do we need to share some data for the store.
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    // we will get the failure response.
  }
};

// we use listing ()

// use table

// user filter

export const login = ({ email, password }) => async (dispatch) => {
  console.log({ email, password });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });
  console.log(body);

  try {
    const res = await axios.post("/api/auth", body, config);
    // res will hold success response.
    // do we need to share some data for the store.
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    // we will get the failure response.
  }
};
