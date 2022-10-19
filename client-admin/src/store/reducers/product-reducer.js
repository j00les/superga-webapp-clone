import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  FETCH_CATEGORIES,
  PRODUCT_BY_ID,
  DELETE_PRODUCT,
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
      // console.log(typeof payload);
      console.log(payload);
      // console.log(state.products);
      const filtered = state.products.filter(product =>
        console.log(product.id)
      );
      console.log(filtered);

      // const obj = {
      //   ...state,
      //   products: [...state.products],
      // };
      // console.log(obj);
      return {
        ...state,
      };

    case PRODUCT_BY_ID:
      // const obj = {
      //   ...state,
      //   productById: payload,
      //   // products: [...state.products, payload],
      // };
      // console.log(obj);
      return {
        ...state,
        productById: payload,
        // products: [...state.products, payload],
      };
    default:
      return state;
  }
}
