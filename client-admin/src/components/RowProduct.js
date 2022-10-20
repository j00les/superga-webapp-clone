import { useDispatch } from 'react-redux';
import { deleteProduct, fetchProducts } from '../store/middlewares';
import ModalButton from './ModalButton';

const RowProduct = ({ products }) => {
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteProduct(e.target.id));
    fetchProducts();
  };

  return (
    <>
      {products?.map((el, i) => (
        <tr className="border border-red-700" key={i}>
          <th>{i + 1}</th>
          <td>{el.name}</td>
          <td className="">{el.description}</td>
          <td>{el.price}</td>
          <td>
            <img src={el.mainImg} alt="" />
          </td>
          <td>{el.category}</td>
          <td>{el.author}</td>
          <td>
            {/* modal for image */}
            <button className="btn">Show</button>
          </td>
          <td>
            <ModalButton getId={el.id} />
            {/* <button id={el.id} onClick={e => console.log(e.target.id)}>
              aldkj
            </button> */}

            <button id={el.id} onClick={e => handleDelete(e)} className="btn">
              delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RowProduct;
