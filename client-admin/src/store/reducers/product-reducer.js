import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  FETCH_CATEGORIES,
  PRODUCT_BY_ID,
  DELETE_PRODUCT,
  CLEAR_PRODUCT_STATE,
  UPDATE_PRODUCT,
  DELETE_CATEGORY,
  CREATE_CATEGORY,
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

    case CREATE_CATEGORY:
      console.log(payload);
      return {
        ...state,
        categories: [...state.categories, payload],
      };

    case DELETE_PRODUCT:
      const filtered = state.products.filter(el => el.id !== +payload);

      return {
        ...state,
        products: filtered,
      };

    case DELETE_CATEGORY:
      const filteredCat = state.categories.filter(el => el.id !== +payload);
      return {
        ...state,
        products: filteredCat,
      };

    case PRODUCT_BY_ID:
      return {
        ...state,
        productById: payload,
      };

    case UPDATE_PRODUCT:
      const updated = state.products.map(product => {
        if (product.id === payload.id) {
          return {
            ...product,
            ...payload,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        products: updated,
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
