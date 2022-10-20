import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  FETCH_CATEGORIES,
  PRODUCT_BY_ID,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CLEAR_PRODUCT_STATE,
} from '../action_types';

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
  console.log(data);
  return {
    type: PRODUCT_BY_ID,
    payload: data,
  };
};

const updateProduct = data => {
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

const categoryLoaded = data => {
  return {
    type: FETCH_CATEGORIES,
    payload: data,
  };
};

export {
  productLoaded,
  createProductAction,
  categoryLoaded,
  getById,
  updateProduct,
  deleteProductAction,
  clearProductState,
};
