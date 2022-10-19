import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/middlewares';
import ModalButton from './ModalButton';
import ModalForm from './ModalForm';
import RowProduct from './RowProduct';

const TableProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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

      <ModalForm />
    </>
  );
};

export default TableProduct;
