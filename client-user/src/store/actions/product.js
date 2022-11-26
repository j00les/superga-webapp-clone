import Swal from "sweetalert2";
import { admin, pub } from "../../apis/axiosInstance";
import { FETCH_BY_ID, FETCH_PRODUCTS, PAY_PRODUCT, SET_LOADING_FALSE, SET_LOADING_TRUE } from "../types/product";

// const baseUrl = "https://superga-react-app.herokuapp.com/pub";
const baseUrl = "http://localhost:3000/pub";

const fetchCreator = data => {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
};

const setLoadingFalse = () => {
  return { type: SET_LOADING_FALSE };
};

const setLoadingTrue = () => {
  return { type: SET_LOADING_TRUE };
};

const fetchByIdCreator = data => {
  return {
    type: FETCH_BY_ID,
    payload: data,
  };
};

const payCreator = data => {
  return {
    type: PAY_PRODUCT,
    payload: data,
  };
};

const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${baseUrl}/products`, {
        method: "get",
      });

      if (!response.ok) throw new Error("Can't fetch data");
      const data = await response.json();

      dispatch(fetchCreator(data));
    } catch (err) {
      Swal.fire("error", err);
    }
  };
};

const fetchById = id => {
  return async dispatch => {
    dispatch(setLoadingTrue());
    try {
      const response = await fetch(`${baseUrl}/products/${id}`, {
        method: "get",
      });

      if (!response.ok) throw new Error("Can't fetch data");
      const data = await response.json();

      dispatch(fetchByIdCreator(data));
    } catch (err) {
      Swal.fire("error", err);
    } finally {
      setTimeout(() => {
        dispatch(setLoadingFalse());
      }, 1000);
    }
  };
};

const buyProduct = productDetail => async dispatch => {
  try {
    const { data } = await pub({
      method: "post",
      url: `/pay`,
      data: { detail: productDetail },
    });
    dispatch(payCreator(data));
  } catch (err) {
    console.log(err);
  }
};

const login = credential => async () => {
  try {
    console.log(credential);
    const { data } = await admin({
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

export { login, fetchProducts, fetchById, buyProduct };
