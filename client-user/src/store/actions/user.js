import { adminURL } from "../../apis/axiosInstance";

export const login = credential => async () => {
  try {
    console.log(credential);
    const { data } = await adminURL({
      method: "post",
      url: "/login",
      data: {
        email: credential.email,
        password: credential.password,
      },
    });

    localStorage.setItem("access_token", data.access_token);
  } catch (err) {
    console.log(err);
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
