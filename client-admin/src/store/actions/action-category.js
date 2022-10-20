import {
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
} from '../action_types/type-category';

const categoryLoaded = data => {
  return {
    type: FETCH_CATEGORIES,
    payload: data,
  };
};

const createCategoryAction = data => {
  return {
    type: CREATE_CATEGORY,
    payload: data,
  };
};

const deleteCategoryAction = id => {
  return {
    type: DELETE_CATEGORY,
    payload: id,
  };
};

export { categoryLoaded, createCategoryAction, deleteCategoryAction };
