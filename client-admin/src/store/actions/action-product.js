import Swal from 'sweetalert2';
import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  PRODUCT_BY_ID,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CLEAR_PRODUCT_STATE,
  LOADING_TRUE,
  LOADING_FALSE,
  TLOADING_FALSE,
  TLOADING_TRUE,
} from '../action_types/type-product';

const productLoaded = data => {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
};

const clearProductState = () => {
  return {
    type: CLEAR_PRODUCT_STATE,
  };
};

const createProductAction = data => {
  return {
    type: CREATE_PRODUCT,
    payload: data,
  };
};

const getById = data => {
  return {
    type: PRODUCT_BY_ID,
    payload: data,
  };
};

const updateProductAction = data => {
  return {
    type: UPDATE_PRODUCT,
    payload: data,
  };
};

const deleteProductAction = id => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

const loadingTrue = () => {
  return {
    type: LOADING_TRUE,
  };
};

const loadingFalse = () => {
  return {
    type: LOADING_FALSE,
  };
};

const tLoadingFalse = () => {
  return {
    type: TLOADING_FALSE,
  };
};

const tLoadingTrue = () => {
  return {
    type: TLOADING_TRUE,
  };
};

const fetchProducts = () => {
  return async dispatch => {
    dispatch(tLoadingTrue());
    try {
      const response = await fetch('http://localhost:3000/admin/products', {
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });

      if (!response.ok) throw new Error("Can't fetch data");
      const data = await response.json();

      dispatch(productLoaded(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(tLoadingFalse());
    }
  };
};

const createProduct = data => {
  const formData = data;
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/admin/products', {
        method: 'post',
        mode: 'cors',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();
      dispatch(createProductAction(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const getProductById = id => {
  return async dispatch => {
    try {
      dispatch(loadingTrue());
      const response = await fetch(`http://localhost:3000/admin/products/${id}`, {
        method: 'get',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',

          access_token: localStorage.getItem('access_token'),
        },
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();
      dispatch(getById(data));
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        dispatch(loadingFalse());
      }, 1000);
    }
  };
};

const updateProduct = (id, data) => {
  const formData = data;
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3000/admin/products/${id}`, {
        method: 'put',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();

      dispatch(updateProductAction(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteProduct = id => {
  console.log(id);
  return async dispatch => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes please!',
        cancelButtonText: 'Nope',
      });
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

        const response = await fetch(`http://localhost:3000/admin/products/${id}`, {
          method: 'delete',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
        });

        if (!response.ok) throw new Error("Can't fetch data");

        dispatch(deleteProductAction(id));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export {
  getProductById,
  fetchProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  clearProductState,
};
