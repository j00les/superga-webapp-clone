import { FETCH_CATEGORIES } from "../actionTypes/category";

const initial = {
  categories: [],
};

export default function categoryReducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
}
