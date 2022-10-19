import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  FETCH_CATEGORIES,
} from '../action_types';

const productLoaded = data => {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
};

const createAction = data => {
  // console.log(data);
  // return {
  //   type: CREATE_PRODUCT,
  //   payload: data,
  // };
};

const categoryLoaded = data => {
  return {
    type: FETCH_CATEGORIES,
    payload: data,
  };
};

export { productLoaded, createAction, categoryLoaded };
