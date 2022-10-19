import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  FETCH_CATEGORIES,
} from '../action_types';

const initial = {
  products: [],
  categories: [],
};

export default function productReducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    // const FETCH_CATEGORIES = 'products/categories';
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

    // case CREATE_PRODUCT:
    //   // cc
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };
    default:
      return state;
  }
}
