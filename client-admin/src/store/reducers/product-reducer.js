import { FETCH_PRODUCTS } from '../action_types';

const initial = {
  products: [],
};

export default function productReducer(state = initial, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
