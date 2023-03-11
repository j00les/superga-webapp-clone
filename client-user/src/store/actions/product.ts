import { createAsyncThunk } from '@reduxjs/toolkit'
import { adminURL, publicURL } from '../../apis/axiosInstance'

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
  try {
    const { data } = await publicURL({
      url: '/products',
      method: 'GET'
    })
    return data
  } catch (error) {
    throw error
  }
})

export const fetchById = createAsyncThunk(
  'products/fetchById',
  async (id: string | undefined) => {
    // return async (dispatch) => {
    //   dispatch(setLoadingTrue());
    //   try {
    //     const response = await fetch(`${baseUrl}/products/${id}`, {
    //       method: 'get',
    //     });
    //     if (!response.ok) throw new Error("Can't fetch data");
    //     onst data = await response.json();
    //     dispatch(fetchByIdCreator(data));
    //   } catch (err) {
    //     Swal.fire('error', err);
    //   } finally {
    //     setTimeout(() => {
    //       dispatch(setLoadingFalse());
    //     }, 1000);
    //   }
    // };
    try {
      console.log(id, 'ye')
      const { data } = await publicURL({
        url: `/products/${id}`,
        method: 'GET'
      })
      return data
    } catch (error) {
      throw error
    } finally {
      //  setTimeout(() => {
      //    dispatch(setLoadingFalse());
      //  }, 1000);
    }
  }
)

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
