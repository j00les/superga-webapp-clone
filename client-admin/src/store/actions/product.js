import { FETCH_PRODUCTS } from '../action_types';

const productLoaded = data => {
  // console.log(data);
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
};

export { productLoaded };
