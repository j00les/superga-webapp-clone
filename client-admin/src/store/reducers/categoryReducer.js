import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
} from '../action_types/type-category';

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

    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };

    case DELETE_CATEGORY:
      const filteredCat = state.categories.filter(el => el.id !== +payload);
      return {
        ...state,
        categories: filteredCat,
      };

    default:
      return state;
  }
}
