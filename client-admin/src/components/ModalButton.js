import { useDispatch } from 'react-redux';
import { getProductById } from '../store/middlewares';

const ModalButton = props => {
  const dispatch = useDispatch();

  //checking if there's an id
  const handleGetById = e => {
    if (e.target.id) {
      dispatch(getProductById(e.target.id));
    }
    // else {
    //   console.log(e);
    // }
  };

  return (
    <label
      id={props?.getId}
      onClick={e => handleGetById(e)}
      htmlFor="my-modal-4"
      className="btn modal-button"
    >
      Add
    </label>
  );
};
export default ModalButton;
