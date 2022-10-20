import Swal from 'sweetalert2';
import {
  categoryLoaded,
  createCategoryAction,
  deleteCategoryAction,
} from '../actions/action-category';

const createCategory = data => async dispatch => {
  const formData = { name: data };
  console.log(formData);
  try {
    const response = await fetch('http://localhost:3000/categories', {
      method: 'post',
      mode: 'cors',
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // console.log(response);
    if (!response.ok) throw new Error("Can't fetch data");

    // const data = await response.json();
    dispatch(createCategoryAction(data));
  } catch (err) {
    console.log(err);
  }
};

const fetchCategories = () => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/categories', {
        method: 'get',
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();

      dispatch(categoryLoaded(data));
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

        const response = await fetch(`http://localhost:3000/categories/${id}`, {
          method: 'delete',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error("Can't fetch data");

        dispatch(deleteCategoryAction(id));
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export { deleteCategory, fetchCategories, createCategory };
