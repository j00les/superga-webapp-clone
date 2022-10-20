import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  FETCH_CATEGORIES,
  PRODUCT_BY_ID,
  DELETE_PRODUCT,
  CLEAR_PRODUCT_STATE,
} from '../action_types';

const initial = {
  products: [],
  categories: [],
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

    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      };

    case DELETE_PRODUCT:
      const filtered = state.products.filter(el => el.id !== +payload);

      return {
        ...state,
        products: filtered,
      };

    case PRODUCT_BY_ID:
      return {
        ...state,
        productById: payload,
      };

    case CLEAR_PRODUCT_STATE:
      return {
        ...state,
        productById: {},
      };
    default:
      return state;
  }
}
