import { SET_ISAUTHENTICATED, SET_ISAUTHENTICATED_FALSE, SET_USER_DATA } from "../actionTypes/user";

const initial = {
  isAuthenticated: false,
  userData: {
    name: "",
    email: " ",
  },
};

export default function userReducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ISAUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };
    case SET_ISAUTHENTICATED_FALSE:
      return {
        ...state,
        isAuthenticated: false,
      };

    case SET_USER_DATA: {
      return {
        ...state,
        userData: { name: payload.username, email: payload.email },
      };
    }
    default:
      return state;
  }
}
