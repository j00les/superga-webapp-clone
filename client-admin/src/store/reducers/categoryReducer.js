import {
  CLEAR_CATEGORY_STATE,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY_BY_ID,
  UPDATE_CATEGORY,
} from '../action_types/type-category';

const initial = {
  categories: [],
  categoryById: {},
};

export default function categoryReducer(state = initial, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    case FETCH_CATEGORY_BY_ID:
      return {
        ...state,
        categoryById: payload,
      };

    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, payload],
      };

    case CLEAR_CATEGORY_STATE:
      return {
        ...state,
        categoryById: {},
      };

    case DELETE_CATEGORY:
      const filteredCat = state.categories.filter(el => el.id !== +payload);
      return {
        ...state,
        categories: filteredCat,
      };

    case UPDATE_CATEGORY:
      const updated = state.categories.map(el => {
        if (el.id === payload.id) {
          return {
            ...el,
            ...payload,
          };
        } else {
          return el;
        }
      });
      return {
        ...state,
        categories: updated,
      };

    default:
      return state;
  }
}
