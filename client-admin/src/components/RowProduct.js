import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, fetchProducts } from '../store/middlewares';
import ModalButton from './ModalButton';
import { ModalImageButton } from './ModalImageButton';

const RowProduct = ({ products }) => {
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteProduct(e.target.id));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      {products?.map((el, i) => (
        <tr key={i}>
          <th>{i + 1}</th>
          <td>{el.name}</td>
          <td className="whitespace-normal">{el.description}</td>
          <td>{el.price}</td>
          <td>
            <img src={el.mainImg} alt="" />
          </td>
          <td>{el.category}</td>
          <td>{el.author}</td>
          <td>
            <ModalImageButton />
          </td>
          <td>
            <ModalButton getId={el.id} />
            <button
              id={el.id}
              onClick={e => handleDelete(e)}
              className="btn ml-2 btn-sm btn-error"
            >
              delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RowProduct;
