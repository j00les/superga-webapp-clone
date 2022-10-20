import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/middlewares/product';
import ModalButton from './ModalButton';
import ModalForm from './ModalForm';
import { ModalImage } from './ModalImage';
import RowProduct from './RowProduct';

const TableProduct = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(state => state);
  // console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div>
        <ModalButton />
      </div>
      <div className="overflow-scroll">
        {/* table-normal .... */}
        <table className="table w-full table-auto table-normal">
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
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <RowProduct products={product.products} />
          </tbody>
        </table>
      </div>

      <ModalForm />
      <ModalImage />
    </>
  );
};

export default TableProduct;
