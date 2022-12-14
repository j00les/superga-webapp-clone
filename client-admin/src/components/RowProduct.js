import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../store/actions/action-product';
import ModalButton from './ModalButton';
import { ModalImageButton } from './ModalImageButton';
import { toRupiah } from '../helpers/helper';

const RowProduct = ({ products }) => {
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteProduct(e.target.id));
  };

  return (
    <>
      {products.map((el, i) => {
        return (
          <tr key={i}>
            <th>{i + 1}</th>
            <td>{el.name}</td>
            <td className="whitespace-normal">{el.description}</td>
            <td>{toRupiah(el.price)}</td>
            <td>
              <img src={el.mainImg} alt="" />
            </td>
            <td>{el.category}</td>
            <td>{el.author}</td>
            <td>
              <ModalImageButton getId={el.id} />
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
        );
      })}
    </>
  );
};

export default RowProduct;
