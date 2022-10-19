import {
  categoryLoaded,
  createProductAction,
  deleteProductAction,
  getById,
  productLoaded,
} from '../actions/product';

const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'get',
      });

      if (!response.ok) throw new Error("Can't fetch data");
      const data = await response.json();

      dispatch(productLoaded(data));
    } catch (err) {
      console.log(err);
    }
  };
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

const createProduct = data => {
  const formData = data;
  return async dispatch => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'post',
        mode: 'cors',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();
      dispatch(createProductAction(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const getProductById = id => {
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'get',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();
      dispatch(getById(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const updateProduct = (id, data) => {
  const formData = data;
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'put',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();
      dispatch(updateProduct(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const deleteProduct = id => {
  // const formData = data;
  console.log(id);
  return async dispatch => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'delete',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error("Can't fetch data");

      // const data = await response.json();
      // console.log(data);

      dispatch(deleteProductAction(id));
    } catch (err) {
      console.log(err);
    }
  };
};

export {
  getProductById,
  fetchProducts,
  createProduct,
  fetchCategories,
  deleteProduct,
};
