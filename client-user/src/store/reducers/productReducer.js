import {
  FETCH_BY_ID,
  FETCH_PRODUCTS,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from '../action_types/type-product';

const initial = {
  products: [],
  productById: {},
  isLoading: false,
};
export default function productReducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case SET_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };

    case SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
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