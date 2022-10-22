// import { FETCH_PRODUCTS } from '../action_types/type-product';

import { FETCH_BY_ID, FETCH_PRODUCTS } from '../action_types/type-product';

const initial = {
  products: [],
  productById: {},
};
export default function productReducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case FETCH_BY_ID:
      return {
        ...state,
        productById: payload,
      };

    default:
      return state;
  }
}
