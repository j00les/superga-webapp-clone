import Swal from "sweetalert2";
import { adminURL, publicURL } from "../../apis/axiosInstance";
import { FETCH_CATEGORIES } from "../actionTypes/category";

import { FETCH_BY_ID, FETCH_PRODUCTS, PAY_PRODUCT, SET_LOADING_FALSE, SET_LOADING_TRUE } from "../actionTypes/product";
// const baseUrl = "https://superga-react-app.herokuapp.com/pub";
const baseUrl = "http://localhost:3002/public";

const fetchCreator = data => {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
};

const fetchCategoryCreator = data => {
  return {
    type: FETCH_CATEGORIES,
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
    // console.log(productDetail);
    const { data } = await publicURL({
      method: "post",
      url: `/pay`,
      data: { detail: productDetail },
    });
    dispatch(payCreator(data));
  } catch (err) {
    console.log(err);
  }
};

export const fetchCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${baseUrl}/categories`, {
        method: "get",
      });

      if (!response.ok) throw new Error("Can't fetch category");

      const data = await response.json();
      dispatch(fetchCategoryCreator(data));
    } catch (err) {
      Swal.fire("error", "Cant Fetch category");
    }
  };
};

export { fetchProducts, fetchById, buyProduct };
