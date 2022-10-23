import Swal from 'sweetalert2';
import { FETCH_CATEGORIES } from '../action_types/type-category';

const baseUrl = 'http://localhost:3000/pub';

const fetchCreator = data => {
  return {
    type: FETCH_CATEGORIES,
    payload: data,
  };
};

export const fetchCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${baseUrl}/categories`, {
        method: 'get',
      });

      if (!response.ok) throw new Error("Can't fetch category");

      const data = await response.json();
      dispatch(fetchCreator(data));
    } catch (err) {
      Swal.fire('error', 'Cant Fetch category');
    }
  };
};
