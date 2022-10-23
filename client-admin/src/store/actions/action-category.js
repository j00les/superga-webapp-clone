import Swal from 'sweetalert2';
import {
  CLEAR_CATEGORY_STATE,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY_BY_ID,
  UPDATE_CATEGORY,
} from '../action_types/type-category';

const baseURL = 'https://superga-react-app.herokuapp.com/admin';

const categoryLoaded = data => {
  return {
    type: FETCH_CATEGORIES,
    payload: data,
  };
};

const clearCategoryStateCreator = data => {
  return {
    type: CLEAR_CATEGORY_STATE,
    payload: data,
  };
};

const createCategoryAction = data => {
  return {
    type: CREATE_CATEGORY,
    payload: data,
  };
};

const updateCategoryCreator = data => {
  return {
    type: UPDATE_CATEGORY,
    payload: data,
  };
};

const getCategoryByIdAction = data => {
  return {
    type: FETCH_CATEGORY_BY_ID,
    payload: data,
  };
};

const deleteCategoryAction = id => {
  return {
    type: DELETE_CATEGORY,
    payload: id,
  };
};

const createCategory = data => async dispatch => {
  const formData = data;
  try {
    const response = await fetch(`${baseURL}/categories`, {
      method: 'post',
      mode: 'cors',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',

        access_token: localStorage.getItem('access_token'),
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Can't create category");

    const data = await response.json();
    dispatch(createCategoryAction(data));
  } catch (err) {
    Swal.fire('error', err);
  }
};

const fetchCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${baseURL}/categories`, {
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });

      if (!response.ok) throw new Error("Can't fetch category");

      const data = await response.json();

      dispatch(categoryLoaded(data));
    } catch (err) {
      Swal.fire('error', err);
    }
  };
};

const fetchCategoryById = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${baseURL}/categories/${id}`, {
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });

      if (!response.ok) throw new Error('Cant fetch category');

      const data = await response.json();

      dispatch(getCategoryByIdAction(data));
    } catch (err) {
      Swal.fire('error', err);
    }
  };
};

//delete category
const deleteCategory = id => {
  return async dispatch => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes please!',
        cancelButtonText: 'Nope',
      });
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');

        const response = await fetch(`${baseURL}/categories/${id}`, {
          method: 'delete',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
        });

        if (!response.ok) throw new Error("Can't fetch data");

        dispatch(deleteCategoryAction(id));
      }
    } catch (err) {
      Swal.fire('error', 'cant delete category!');
    }
  };
};

const updateCategory = (id, data) => {
  const formData = data;
  return async dispatch => {
    try {
      const response = await fetch(`${baseURL}/categories/${id}`, {
        method: 'put',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Can't update");

      const data = await response.json();

      dispatch(updateCategoryCreator(data));
    } catch (err) {
      Swal.fire('error', 'cant update category!');
    }
  };
};

export {
  deleteCategory,
  fetchCategories,
  createCategory,
  categoryLoaded,
  createCategoryAction,
  deleteCategoryAction,
  fetchCategoryById,
  updateCategory,
  clearCategoryStateCreator,
};
