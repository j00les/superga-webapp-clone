import { FETCH_CATEGORIES } from "../action_types/type-category";

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
