import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminURL, publicURL } from "../../apis/axiosInstance";
// const baseUrl = "https://superga-react-app.herokuapp.com/pub";

// export const fetchProducts = () => {
//   return async dispatch => {
//     try {
//       const response = await fetch(`${baseUrl}/products`, {
//         method: "get",
//       });

//       if (!response.ok) throw new Error("Can't fetch data");
//       const data = await response.json();

//       dispatch(fetchCreator(data));
//     } catch (err) {
//       Swal.fire("error", err);
//     }
//   };
// };

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const { data } = await publicURL({
      url: "/products",
      method: "GET",
    });

    return data;
  } catch (error) {
    throw error;
  }
});

// const fetchById = id => {
//   return async dispatch => {
//     dispatch(setLoadingTrue());
//     try {
//       const response = await fetch(`${baseUrl}/products/${id}`, {
//         method: "get",
//       });

//       if (!response.ok) throw new Error("Can't fetch data");
//       const data = await response.json();

//       dispatch(fetchByIdCreator(data));
//     } catch (err) {
//       Swal.fire("error", err);
//     } finally {
//       setTimeout(() => {
//         dispatch(setLoadingFalse());
//       }, 1000);
//     }
//   };
// };

// const buyProduct = productDetail => async dispatch => {
//   try {
//     // console.log(productDetail);
//     const { data } = await publicURL({
//       method: "post",
//       url: `/pay`,
//       data: { detail: productDetail },
//     });
//     dispatch(payCreator(data));
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const fetchCategories = () => {
//   return async dispatch => {
//     try {
//       const response = await fetch(`${baseUrl}/categories`, {
//         method: "get",
//       });

//       if (!response.ok) throw new Error("Can't fetch category");

//       const data = await response.json();
//       dispatch(fetchCategoryCreator(data));
//     } catch (err) {
//       Swal.fire("error", "Cant Fetch category");
//     }
//   };
// };

// export { fetchProducts, fetchById, buyProduct };
