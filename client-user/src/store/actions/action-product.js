import { FETCH_BY_ID, FETCH_PRODUCTS } from '../action_types/type-product';

const baseUrl = 'http://localhost:3000/pub';

const fetchCreator = data => {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
};

const fetchByIdCreator = data => {
  return {
    type: FETCH_BY_ID,
    payload: data,
  };
};

const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${baseUrl}/products`, {
        method: 'get',
      });

      if (!response.ok) throw new Error("Can't fetch data");
      const data = await response.json();

      dispatch(fetchCreator(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const fetchById = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${baseUrl}/products/${id}`, {
        method: 'get',
      });

      if (!response.ok) throw new Error("Can't fetch data");
      const data = await response.json();

      dispatch(fetchByIdCreator(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export { fetchProducts, fetchById };
