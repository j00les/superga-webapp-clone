import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  PRODUCT_BY_ID,
  DELETE_PRODUCT,
  CLEAR_PRODUCT_STATE,
  UPDATE_PRODUCT,
} from '../action_types/type-product';

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

    case CREATE_PRODUCT:
      // console.log(payload);
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
