import Swal from 'sweetalert2';
import {
  CLEAR_CATEGORY_STATE,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY_BY_ID,
  UPDATE_CATEGORY,
} from '../action_types/type-category';

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
  console.log(data);
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
  console.log(formData);
  try {
    const response = await fetch('http://localhost:3000/admin/categories', {
      method: 'post',
      mode: 'cors',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',

        access_token: localStorage.getItem('access_token'),
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw new Error("Can't fetch data");

    const data = await response.json();
    dispatch(createCategoryAction(data));
  } catch (err) {
    console.log(err);
  }
};

const fetchCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/admin/categories', {
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token'),
        },
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();

      dispatch(categoryLoaded(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const fetchCategoryById = id => {
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:3000/admin/categories/${id}`,
        {
          method: 'get',
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        }
      );

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();

      dispatch(getCategoryByIdAction(data));
    } catch (err) {
      console.log(err);
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

        const response = await fetch(
          `http://localhost:3000/admin/categories/${id}`,
          {
            method: 'delete',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              access_token: localStorage.getItem('access_token'),
            },
          }
        );

        if (!response.ok) throw new Error("Can't fetch data");

        dispatch(deleteCategoryAction(id));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const updateCategory = (id, data) => {
  const formData = data;
  // console.log(formData);
  return async dispatch => {
    try {
      const response = await fetch(
        `http://localhost:3000/admin/categories/${id}`,
        {
          method: 'put',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Can't update");

      const data = await response.json();

      dispatch(updateCategoryCreator(data));
    } catch (err) {
      console.log(err);
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
