import { useDispatch } from 'react-redux';
import { getProductById } from '../store/middlewares';

const ModalButton = props => {
  const dispatch = useDispatch();

  //checking if there's an id
  const handleGetById = e => {
    if (e.target.id) {
      dispatch(getProductById(e.target.id));
    }
  };

  return (
    <label
      id={props?.getId}
      onClick={e => handleGetById(e)}
      htmlFor="my-modal-4"
      className="btn modal-button"
    >
      {props.getId ? 'Edit' : 'Add'}
    </label>
  );
};
export default ModalButton;
