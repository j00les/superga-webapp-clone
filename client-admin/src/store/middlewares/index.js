import { categoryLoaded, productLoaded } from '../actions/product';

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
  const { category, description, image, mainImg, name, price } = data;
  // category: 'Greedo';
  // description: 'asdklj';
  // image: 'asdslkj';
  // mainImg: 'asdlkj';
  // name: 'asdlkj';
  // price: '098';
  // console.log(j);
  // return async dispatch => {
  //   try {
  //     const response = await fetch('http://localhost:3000/products', {
  //       method: 'post',
  //     });
  //     if (!response.ok) throw new Error("Can't fetch data");
  //     const data = await response.json();
  //     dispatch(productLoaded(data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
};

export { fetchProducts, createProduct, fetchCategories };
