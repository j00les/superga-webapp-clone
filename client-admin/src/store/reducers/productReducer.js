import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  PRODUCT_BY_ID,
  DELETE_PRODUCT,
  CLEAR_PRODUCT_STATE,
  UPDATE_PRODUCT,
  LOADING_TRUE,
  TLOADING_TRUE,
  LOADING_FALSE,
  TLOADING_FALSE,
} from '../action_types/type-product';

const initial = {
  products: [],
  productById: {},
  loading: false,
  tableLoading: false,
};

export default function productReducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case TLOADING_TRUE:
      return {
        ...state,
        tableLoading: true,
      };

    case TLOADING_FALSE:
      return {
        ...state,
        tableLoading: false,
      };

    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };

    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
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
