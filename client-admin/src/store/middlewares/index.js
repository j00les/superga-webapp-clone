import { productLoaded } from '../actions/product';

export default function fetchProducts() {
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
}
