import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';
import ModalButton from './ModalButton';
import ModalForm from './ModalForm';
import { ModalImage } from './ModalImage';
import RowProduct from './RowProduct';
import { fetchProducts } from '../store/actions/action-product';

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const TableProduct = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-between p-4">
        <Header view="product" />
        <ModalButton />
      </div>

      <div className="overflow-scroll">
        {
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
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              <RowProduct products={product.products} />
            </tbody>
          </table>
        }
      </div>

      <ModalForm />
      <ModalImage />
    </>
  );
};

export default TableProduct;
