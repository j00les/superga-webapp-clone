import { adminURL } from "../../apis/axiosInstance";
import { SET_ISAUTHENTICATED, SET_ISAUTHENTICATED_FALSE, SET_USER_DATA } from "../actionTypes/user";

const setIsAuthenticated = () => {
  return {
    type: SET_ISAUTHENTICATED,
  };
};

export const setIsAuthenticatedFalse = () => {
  return {
    type: SET_ISAUTHENTICATED_FALSE,
  };
};

const setUserData = userData => {
  return {
    type: SET_USER_DATA,
    payload: userData,
  };
};

export const login = credential => async dispatch => {
  try {
    const { data } = await adminURL({
      method: "post",
      url: "/login",
      data: {
        email: credential.email,
        password: credential.password,
      },
    });

    localStorage.setItem("access_token", data.access_token);
    dispatch(setIsAuthenticated());
    dispatch(setUserData(data));
  } catch (error) {
    throw new Error(error);
  }
};

export const register = credential => async () => {
  try {
    const { data } = await adminURL({
      method: "post",
      url: "/register",
      data: {
        username: credential.username,
        email: credential.email,
        password: credential.password,
      },
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
