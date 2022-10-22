import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../store/actions/action-product';
import ModalButton from './ModalButton';
import { ModalImageButton } from './ModalImageButton';

import { MutatingDots } from 'react-loader-spinner';

const RowProduct = ({ products }) => {
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteProduct(e.target.id));
  };

  return (
    <>
      {!products[0] ? (
        <MutatingDots
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        products.map((el, i) => {
          return (
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
          );
        })
      )}
    </>
  );
};

export default RowProduct;
