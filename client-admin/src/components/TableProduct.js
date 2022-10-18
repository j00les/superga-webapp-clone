import { useEffect, useState } from 'react';
import ModalButton from './ModalButton';
import RowProduct from './RowProduct';

const TableProduct = () => {
  const [products, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'get',
      });

      if (!response.ok) throw new Error("Can't fetch data");

      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <div>
        <ModalButton />
      </div>
      <div className="overflow-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Main Image</th>
              <th>Category</th>
              <th>Author</th>
              <th>Images</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <RowProduct products={products} />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableProduct;
